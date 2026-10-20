import os
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
EN_MD = os.environ.get("COPY_EN", os.path.join(ROOT, "copy", "Manzili_Website_Copy_EN.md"))
AR_MD = os.environ.get("COPY_AR", os.path.join(ROOT, "copy", "Manzili_Website_Copy_AR.md"))
OUT_DIR = os.path.join(ROOT, "src", "content", "copy")
