import { exportWarp } from "../../src/p811";

describe("811. Subdomain Visit Count", () => {
  test.each([
    [["9001 discuss.leetcode.com"], ["9001 leetcode.com", "9001 discuss.leetcode.com", "9001 com"]],
    [
      ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"],
      ["901 mail.com", "50 yahoo.com", "900 google.mail.com", "5 wiki.org", "5 org", "1 intel.mail.com", "951 com"],
    ],
  ])("case", (cpdomains, expected) => {
    const result = exportWarp(cpdomains);

    // You may return the answer in any order.
    expect(result.sort()).toStrictEqual(expected.sort());
  });
});
