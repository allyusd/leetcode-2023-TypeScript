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
        arg: [[5, 3, 4, 1, 1]],
        expected: 13,
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[6, 5, 3, 9, 2, 7]],
        expected: 22,
      },
    },
    {
      name: "Example 3",
      data: {
        arg: [[3, 2, 5, 5, 2, 3]],
        expected: 18,
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
