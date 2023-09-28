import solution, { title } from ".";

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
        arg: [[100, 4, 200, 1, 3, 2]],
        expected: 4,
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[0, 3, 7, 2, 5, 8, 4, 6, 0, 1]],
        expected: 9,
      },
    },
    {
      name: "Test 1",
      data: {
        arg: [[]],
        expected: 0,
      },
    },
    {
      name: "Test 1",
      data: {
        arg: [[-6, 8, -5, 7, -9, -1, -7, -6, -9, -7, 5, 7, -1, -8, -8, -2, 0]],
        expected: 4,
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
