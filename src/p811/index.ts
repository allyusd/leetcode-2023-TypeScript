export function exportWarp(cpdomains: string[]): string[] {
  return subdomainVisits(cpdomains);
}

// 2023-01-16
// 811. Subdomain Visit Count
// Accepted
function subdomainVisits(cpdomains: string[]): string[] {
  const countMap: Map<string, number> = new Map<string, number>();

  cpdomains.forEach((x) => {
    const cpdomain = x.split(" ");
    const rep = Number(cpdomain[0]);
    const cpd = cpdomain[1];

    const paths = cpd.split(".");
    while (paths.length > 0) {
      const domain = paths.join(".");

      const tmp = countMap.get(domain);
      let count = tmp === undefined ? 0 : tmp;
      count = count + rep;
      countMap.set(domain, count);

      paths.shift();
    }
  });

  const output = [];

  countMap.keys();

  for (const [domain, count] of countMap) {
    const row = `${count} ${domain}`;
    output.push(row);
  }

  return output;
}
