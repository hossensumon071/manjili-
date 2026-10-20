#!/usr/bin/env bash
# Regenerates src/content/copy/{en,ar}/*.json from Buddy's copy files in /copy.
#   bash scripts/copy/run.sh
set -euo pipefail
cd "$(dirname "$0")"
python3 parse.py
python3 extract.py
python3 emit.py
python3 emit_all.py
python3 emit_contact.py
python3 emit_legal.py
python3 gen_raw.py
rm -f en.json ar.json en.fields.json ar.fields.json
echo "Copy regenerated."
