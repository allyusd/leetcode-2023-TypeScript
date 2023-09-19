import { exportWarp } from "../../src/p49";

interface CaseSet {
  name: string;
  data: {
    arg: Parameters<typeof exportWarp>;
    expected: ReturnType<typeof exportWarp>;
  };
}

describe("49. Group Anagrams", () => {
  test.each<CaseSet>([
    {
      name: "case 1",
      data: {
        arg: [["eat", "tea", "tan", "ate", "nat", "bat"]],
        expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
      },
    },
    { name: "case 2", data: { arg: [[""]], expected: [[""]] } },
    { name: "case 3", data: { arg: [["a"]], expected: [["a"]] } },
  ])("$name", ({ data }) => {
    const result = exportWarp(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
