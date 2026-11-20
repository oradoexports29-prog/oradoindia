
from pathlib import Path
from PIL import Image, ImageOps
import os

# Automatically locate the 2 Wheeler folder
PROJECT_FOLDER = Path(__file__).resolve().parent
SOURCE_FOLDER = PROJECT_FOLDER / "public" / "2 wheeler"

# WebP settings
QUALITY = 85
METHOD = 6

SUPPORTED_FORMATS = {".jpg", ".jpeg", ".png"}

converted = 0
skipped = 0
failed = 0

saved_bytes = 0

print("=" * 55)
print("ORADO - 2 WHEELER WEBP IMAGE CONVERTER")
print("=" * 55)

if not SOURCE_FOLDER.exists():
    print("ERROR: Folder not found:")
    print(SOURCE_FOLDER)
    raise SystemExit(1)

# Scan every category and subfolder
for image_path in SOURCE_FOLDER.rglob("*"):

    if not image_path.is_file():
        continue

    if image_path.suffix.lower() not in SUPPORTED_FORMATS:
        continue

    output_path = image_path.with_suffix(".webp")

    try:
        # Skip if WebP already exists
        if output_path.exists():
            print(f"SKIPPED: {output_path.name}")
            skipped += 1
            continue

        original_size = image_path.stat().st_size

        with Image.open(image_path) as image:

            # Correct image orientation
            image = ImageOps.exif_transpose(image)

            # Preserve transparency
            if image.mode not in ("RGB", "RGBA"):
                if "transparency" in image.info or image.mode in ("LA", "PA"):
                    image = image.convert("RGBA")
                else:
                    image = image.convert("RGB")

            # Preserve embedded colour profile
            icc_profile = image.info.get("icc_profile")

            image.save(
                output_path,
                "WEBP",
                quality=QUALITY,
                method=METHOD,
                icc_profile=icc_profile
            )

        new_size = output_path.stat().st_size
        saved_bytes += original_size - new_size

        converted += 1

        print(f"CONVERTED: {image_path.name}")
        print(f"       TO: {output_path.name}")

    except Exception as error:
        failed += 1
        print(f"FAILED: {image_path}")
        print(f"REASON: {error}")

print("\n" + "=" * 55)
print("ORADO WEBP CONVERSION COMPLETED")
print("=" * 55)

print(f"Successfully converted : {converted}")
print(f"Already existed        : {skipped}")
print(f"Failed                 : {failed}")

print(
    f"Space saved             : "
    f"{saved_bytes / (1024 * 1024):.2f} MB"
)

print("\nOriginal images are NOT deleted.")
print("All WebP files are saved beside their originals.")
print("=" * 55)
