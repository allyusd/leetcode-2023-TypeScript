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
        arg: [[1, 8, 6, 2, 5, 4, 8, 3, 7]],
        expected: 49,
      },
    },
    {
      name: "Example 2",
      data: {
        arg: [[1, 1]],
        expected: 1,
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
