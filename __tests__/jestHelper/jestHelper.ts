/* eslint-disable @typescript-eslint/no-explicit-any */

// ref: https://stackoverflow.com/a/49031341/2613884
export function arrayContainEqualWithoutOrder(array1: any[], array2: any[]) {
  // check if they have equal length to ensure [1] !== [1, 1]
  expect(array1.length).toBe(array2.length);

  // check if every element of array2 is element of array1
  // to ensure [1, 1] !== [1, 2]
  array2.forEach((x) => expect(array1).toContainEqual(x));

  // check if every element of array1 is element of array2
  // to ensure [1, 2] !== [1, 1]
  array1.forEach((x) => expect(array2).toContainEqual(x));
}
