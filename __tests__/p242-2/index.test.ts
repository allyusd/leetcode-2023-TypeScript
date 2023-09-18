import { exportWarp } from "../../src/p242-2";

interface CaseSet {
  name: string;
  data: {
    arg: Parameters<typeof exportWarp>;
    expected: ReturnType<typeof exportWarp>;
  };
}

describe("242. Valid Anagram", () => {
  test.each<CaseSet>([
    { name: "case 1", data: { arg: ["anagram", "nagaram"], expected: true } },
    { name: "case 2", data: { arg: ["rat", "car"], expected: false } },
    { name: "長度不同的話", data: { arg: ["abc", "a"], expected: false } },
    { name: "只有一個字母的話", data: { arg: ["a", "a"], expected: true } },
  ])("$name", ({ data }) => {
    const result = exportWarp(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
