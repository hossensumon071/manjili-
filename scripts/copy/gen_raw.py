from paths import OUT_DIR
pages=['home','platform','pillar-01','pillar-02','pillar-03','pillar-04','pillar-05','pillar-06','case-index','case-template','contact','privacy','terms']
cases=['thee-erth','masar-maab','dyari-signature','raffles-residences-jeddah','nhc-alwareef','nhc-al-mukiman','nhc-malfa-al-assalah','nhc-tabuk-hills','mohammed-al-habib','al-basateen-offices']
ident=lambda l,n:(l+'_'+n).replace('-','_')
L=["/* AUTO-GENERATED import map for Buddy's final copy (EN + AR). Do not edit by hand. */"]
for l in ['en','ar']:
    L+= [f'import {ident(l,p)} from "./{l}/{p}.json";' for p in pages]
    L+= [f'import {ident(l,"case_"+c)} from "./{l}/cases/{c}.json";' for c in cases]
L+=['','export const RAW = {']
for l in ['en','ar']:
    L+=[f'  {l}: {{']+[f'    "{p}": {ident(l,p)},' for p in pages]+['    cases: {']+[f'      "{c}": {ident(l,"case_"+c)},' for c in cases]+['    },','  },']
L+=['} as const;']
open(OUT_DIR+'/raw.ts','w').write('\n'.join(L)+'\n')
