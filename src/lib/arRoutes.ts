/**
 * English paths whose Arabic (/ar) version is built. The language toggle only
 * links to pages listed here. All 23 pages now have Arabic versions.
 */
export const AR_READY = new Set<string>(["/", "/platform-cse", "/pillars/*", "/case-studies", "/case-studies/*", "/contact-us", "/privacy", "/terms"]);

export const arReady = (enPath: string) => {
  const base = (enPath.split("#")[0] || "/").replace(/\/$/, "") || "/";
  return AR_READY.has(base) || [...AR_READY].some((p) => p.endsWith("/*") && base.startsWith(p.slice(0, -1)));
};
