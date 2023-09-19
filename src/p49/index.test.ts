import { exportWarp } from ".";
import { input1 } from "./input.data";

interface CaseSet {
  name: string;
  data: {
    arg: Parameters<typeof exportWarp>;
    expected: ReturnType<typeof exportWarp>;
  };
}

function sortArray(arr: string[][]) {
  arr.forEach((e) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    e = e.sort();
  });
  arr = arr.sort();
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
    // Time Limit Exceeded
    { name: "input 1", data: { arg: [input1], expected: [["a"]] } },
  ])("$name", ({ data }) => {
    const result = exportWarp(...data.arg);
    sortArray(result);
    sortArray(data.expected);
    expect(result).toStrictEqual(data.expected);
  });
});
