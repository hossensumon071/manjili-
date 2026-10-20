from paths import EN_MD, AR_MD, OUT_DIR
import json,sys
from build_copy import build
OUT=''+OUT_DIR+''
for lang in ['en','ar']:
    P=build(lang)
    g={k:P[k] for k in ['nav','footer','ctaBanner','faq','ui','notFound']}
    json.dump(g,open(f'{OUT}/{lang}/global.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
    json.dump(P['meta'],open(f'{OUT}/{lang}/meta.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
    print(lang,'ok', len(P['meta']),'meta rows')
