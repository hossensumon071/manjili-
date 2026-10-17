import { pillar01 } from "./pillar-01";
import { pillar02 } from "./pillar-02";
import { pillar03 } from "./pillar-03";
import { pillar04 } from "./pillar-04";
import { pillar05 } from "./pillar-05";
import { pillar06 } from "./pillar-06";

export const pillarPages = [pillar01, pillar02, pillar03, pillar04, pillar05, pillar06];

export const slugOf = (href: string) => href.split("/").pop() as string;

export function getPillarPage(slug: string) {
  return pillarPages.find((p) => slugOf(p.href) === slug);
}
