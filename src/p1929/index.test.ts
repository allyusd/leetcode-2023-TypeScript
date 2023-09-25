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
        arg: [[1, 2, 1]],
        expected: [1, 2, 1, 1, 2, 1],
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[1, 3, 2, 1]],
        expected: [1, 3, 2, 1, 1, 3, 2, 1],
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
