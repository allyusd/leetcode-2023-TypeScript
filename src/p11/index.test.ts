import solution, { title } from ".";
import { input1 } from "./input1.data";

interface CaseSet {
  name: string;
  data: {
    arg: Parameters<typeof solution>;
    expected: ReturnType<typeof solution>;
  };
}

describe(title, () => {
  test.each<CaseSet>([
    {
      name: "Example 1",
      data: {
        arg: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
        expected: 49,
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[1, 1]],
        expected: 1,
      },
    },
    {
      name: "Test 1",
      data: {
        arg: [input1],
        expected: 721777500,
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
