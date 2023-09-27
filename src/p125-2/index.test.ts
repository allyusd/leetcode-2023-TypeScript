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
        arg: ["A man, a plan, a canal: Panama"],
        expected: true,
      },
    },
    {
      name: "Example 2",
      data: {
        arg: ["race a car"],
        expected: false,
      },
    },
    {
      name: "Example 3",
      data: {
        arg: [" "],
        expected: true,
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
