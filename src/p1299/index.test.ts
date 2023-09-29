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
    { name: "Example 1", data: { arg: [[17, 18, 5, 4, 6, 1]], expected: [18, 6, 6, 6, 1, -1] } },
    { name: "Example 2", data: { arg: [[400]], expected: [-1] } },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
