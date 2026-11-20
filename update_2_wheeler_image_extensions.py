from pathlib import Path
from urllib.parse import unquote
import re

# Run from the project root (the folder containing package.json).
# Updates source references only for files inside public/2 wheeler/.
# Supports both conversion naming styles:
#   original.png -> original.webp
#   original.png -> original.png.webp

ROOT = Path(__file__).resolve().parent
PUBLIC_DIR = ROOT / "public"
TWO_WHEELER_DIR = PUBLIC_DIR / "2 wheeler"
SOURCE_DIR = ROOT / "src"

CODE_EXTENSIONS = {
    ".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs",
    ".css", ".scss", ".sass", ".json", ".html"
}
OLD_EXTENSIONS = {".png", ".jpg", ".jpeg"}

# Preview first. Review the output, then set False to write changes.
DRY_RUN = True

IMAGE_PATH_RE = re.compile(
    r"""(?P<q>["'`])(?P<path>[^"'`\r\n]*?\.(?:png|jpe?g)(?:[?#][^"'`\r\n]*)?)(?P=q)""",
    re.IGNORECASE,
)


def child_case_insensitive(folder: Path, name: str):
    if not folder.is_dir():
        return None
    wanted = name.casefold()
    try:
        for item in folder.iterdir():
            if item.name.casefold() == wanted:
                return item
    except OSError:
        pass
    return None


def valid_webp(path: Path) -> bool:
    try:
        with path.open("rb") as f:
            header = f.read(12)
        return (
            len(header) == 12
            and header[:4] == b"RIFF"
            and header[8:12] == b"WEBP"
        )
    except OSError:
        return False


def locate_original_and_webp(reference: str):
    # Ignore external URLs and dynamic template literals.
    if "://" in reference or "${" in reference:
        return None

    path_part = re.split(r"[?#]", reference, maxsplit=1)[0]
    decoded = unquote(path_part).replace("\\", "/").lstrip("/")

    # Also accept /public/2 wheeler/... references.
    if decoded.casefold().startswith("public/"):
        decoded = decoded[7:]

    if not decoded.casefold().startswith("2 wheeler/"):
        return None

    parts = Path(decoded).parts
    if len(parts) < 2 or Path(parts[-1]).suffix.casefold() not in OLD_EXTENSIONS:
        return None

    folder = TWO_WHEELER_DIR
    for part in parts[1:-1]:
        folder = child_case_insensitive(folder, part)
        if folder is None:
            return None

    original = child_case_insensitive(folder, parts[-1])
    if original is None or not original.is_file():
        return None

    # Check both common WebP naming conventions.
    candidates = [
        child_case_insensitive(folder, original.stem + ".webp"),
        child_case_insensitive(folder, original.name + ".webp"),
    ]

    for candidate in candidates:
        if candidate and candidate.is_file() and valid_webp(candidate):
            return candidate

    return None


def replacement_path(original_reference: str, webp_file: Path):
    # Keep the original URL prefix and path style; replace only the filename.
    path_part, separator, suffix = re.partition(r"[?#]", original_reference)
    # re.partition is not a regex split, so preserve query/hash with a normal split.
    match = re.search(r"[?#]", original_reference)
    tail = original_reference[match.start():] if match else ""

    # Use the WebP filename actually present on disk (including .png.webp if used).
    slash = max(path_part.rfind("/"), path_part.rfind("\\"))
    prefix = path_part[:slash + 1] if slash >= 0 else ""
    return prefix + webp_file.name + tail


def main():
    if not SOURCE_DIR.is_dir():
        print(f"ERROR: Source folder not found: {SOURCE_DIR}")
        return
    if not TWO_WHEELER_DIR.is_dir():
        print(f"ERROR: Folder not found: {TWO_WHEELER_DIR}")
        return

    changed_files = 0
    changed_paths = 0
    matched_paths = 0

    for source_file in SOURCE_DIR.rglob("*"):
        if not source_file.is_file() or source_file.suffix.casefold() not in CODE_EXTENSIONS:
            continue

        try:
            original_text = source_file.read_text(encoding="utf-8")
        except (UnicodeDecodeError, OSError):
            continue

        file_count = 0

        def replace_match(match):
            nonlocal file_count, matched_paths
            old_reference = match.group("path")
            webp = locate_original_and_webp(old_reference)
            if webp is None:
                return match.group(0)

            new_reference = replacement_path(old_reference, webp)
            if new_reference == old_reference:
                return match.group(0)

            file_count += 1
            matched_paths += 1
            return f'{match.group("q")}{new_reference}{match.group("q")}'

        updated_text = IMAGE_PATH_RE.sub(replace_match, original_text)

        if file_count:
            changed_files += 1
            changed_paths += file_count
            action = "WOULD UPDATE" if DRY_RUN else "UPDATED"
            print(f"{action}: {source_file.relative_to(ROOT)} ({file_count} image paths)")
            if not DRY_RUN:
                source_file.write_text(updated_text, encoding="utf-8")

    print("\n========== IMAGE PATH UPDATE SUMMARY ==========")
    print(f"Source files containing matches: {changed_files}")
    print(f"Image references matched: {matched_paths}")
    print(f"Preview mode: {DRY_RUN}")

    if matched_paths == 0:
        print("\nNo matching references found.")
        print("Check that:")
        print("1. The original image files still exist under public/2 wheeler/.")
        print("2. The WebP files are beside their originals.")
        print("3. The source references start with /2 wheeler/ or 2 wheeler/.")
    elif DRY_RUN:
        print("\nReview the listed files. If correct, set DRY_RUN = False and run again.")
    else:
        print("\nUpdate complete. Run: npm run build")


if __name__ == "__main__":
    main()
