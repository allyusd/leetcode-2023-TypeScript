import solution, { title } from ".";
import { input1 } from "./input1.data";
import { expect1 } from "./input1.expect";

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
        arg: [[-1, 0, 1, 2, -1, -4]],
        expected: [
          [-1, -1, 2],
          [-1, 0, 1],
        ],
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[0, 1, 1]],
        expected: [],
      },
    },
    {
      name: "Example 3",
      data: {
        arg: [[0, 0, 0]],
        expected: [[0, 0, 0]],
      },
    },
    {
      name: "Large 1",
      data: {
        arg: [input1],
        expected: expect1,
      },
    },
    {
      name: "Wrong Answer",
      data: {
        arg: [[0, 0, 0, 0]],
        expected: [[0, 0, 0]],
      },
    },
  ])("$name", ({ data }) => {
    let result = solution(...data.arg);
    result = result.sort();
    console.log(JSON.stringify(result));
    data.expected = data.expected.sort();
    expect(result).toStrictEqual(data.expected);
  });
});
