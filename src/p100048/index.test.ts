import solution, { title } from ".";

interface CaseSet {
  name: string;
  data: {
    arg: Parameters<typeof solution>;
    expected: ReturnType<typeof solution>;
  };
}

function numberArray(count: number) {
  const output = [];

  for (let i = 0; i < count; i++) {
    output.push(i + 1);
  }

  return output;
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
    {
      name: "Test 1",
      data: {
        arg: [numberArray(10)],
        expected: 55,
      },
    },
    {
      name: "Test 2",
      data: {
        arg: [numberArray(10000)],
        expected: 50005000,
      },
    },
    {
      name: "Test 3",
      data: {
        arg: [numberArray(100000)],
        expected: 5000050000,
      },
    },
    {
      name: "Error 1",
      data: {
        arg: [[1000000000, 1000000000]],
        expected: 2000000000,
      },
    },
  ])("$name", ({ data }) => {
    const result = solution(...data.arg);
    expect(result).toStrictEqual(data.expected);
  });
});
