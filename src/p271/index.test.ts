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
        arg: [["lint", "code", "love", "you"]],
        expected: ["lint", "code", "love", "you"],
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [["we", "say", ":", "yes"]],
        expected: ["we", "say", ":", "yes"],
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
