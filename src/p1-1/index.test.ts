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
    { name: "Example 1", data: { arg: [[2, 7, 11, 15], 9], expected: [0, 1] } },
    { name: "Example 2", data: { arg: [[3, 2, 4], 6], expected: [1, 2] } },
    { name: "Example 3", data: { arg: [[3, 3], 6], expected: [0, 1] } },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
