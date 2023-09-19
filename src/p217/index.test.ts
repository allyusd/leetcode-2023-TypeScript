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
        arg: [[1, 2, 3, 1]],
        expected: true,
      },
    },
    { name: "Example 2", data: { arg: [[1, 2, 3, 4]], expected: false } },
    { name: "Example 3", data: { arg: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]], expected: true } },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
