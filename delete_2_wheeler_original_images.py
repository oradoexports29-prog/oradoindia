from pathlib import Path

# ONLY processes: project/public/2 wheeler/
# Does not touch any other folder inside public.

PROJECT_ROOT = Path(__file__).resolve().parent
TARGET_FOLDER = PROJECT_ROOT / "public" / "2 wheeler"

IMAGE_EXTENSIONS = {".png", ".jpg", ".jpeg"}

# Safety: first run previews files. Change to False only after checking.
DRY_RUN = False


def is_valid_webp(path: Path) -> bool:
    """Check the WebP RIFF signature."""
    try:
        with path.open("rb") as file:
            header = file.read(12)
        return (
            len(header) == 12
            and header[:4] == b"RIFF"
            and header[8:12] == b"WEBP"
        )
    except OSError:
        return False


def find_matching_webp(original: Path):
    """Find same-name WebP in the same folder, ignoring extension case."""
    for candidate in original.parent.iterdir():
        if (
            candidate.is_file()
            and candidate.stem.casefold() == original.stem.casefold()
            and candidate.suffix.casefold() == ".webp"
        ):
            return candidate
    return None


def main():
    if not TARGET_FOLDER.is_dir():
        print(f"ERROR: Folder not found: {TARGET_FOLDER}")
        print("Place this script in your project root, beside package.json.")
        return

    deleted = 0
    kept = 0
    preview = 0

    print(f"Target folder: {TARGET_FOLDER}")
    print(f"Preview mode: {DRY_RUN}")
    print("-" * 60)

    for original in TARGET_FOLDER.rglob("*"):
        if not original.is_file():
            continue
        if original.suffix.casefold() not in IMAGE_EXTENSIONS:
            continue

        webp = find_matching_webp(original)

        if webp is None:
            print(f"KEEP (no matching WebP): {original.relative_to(TARGET_FOLDER)}")
            kept += 1
            continue

        if not is_valid_webp(webp):
            print(f"KEEP (invalid WebP signature): {webp.relative_to(TARGET_FOLDER)}")
            kept += 1
            continue

        if DRY_RUN:
            print(f"WOULD DELETE: {original.relative_to(TARGET_FOLDER)}")
            preview += 1
        else:
            try:
                original.unlink()
                print(f"DELETED: {original.relative_to(TARGET_FOLDER)}")
                deleted += 1
            except OSError as error:
                print(f"ERROR deleting {original}: {error}")
                kept += 1

    print("\\n" + "=" * 60)
    print(f"Would delete: {preview}" if DRY_RUN else f"Deleted: {deleted}")
    print(f"Kept: {kept}")
    print("No files outside public/2 wheeler were examined.")


if __name__ == "__main__":
    main()
