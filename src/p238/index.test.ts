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
    { name: "Example 1", data: { arg: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] } },
    { name: "Example 2", data: { arg: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] } },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
