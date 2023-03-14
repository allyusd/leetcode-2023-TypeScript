import { exportWarp } from "../../src/p225";

describe("225. Implement Stack using Queues", () => {
  test.each([
    [
      ["MyStack", "push", "push", "top", "pop", "empty"],
      [[], [1], [2], [], [], []],
      [null, null, null, 2, 2, false],
    ],
  ])("case", (command, data, expected) => {
    const result = exportWarp(command, data);
    expect(result).toStrictEqual(expected);
  });
});
