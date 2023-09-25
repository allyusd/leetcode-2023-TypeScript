export const title = "271. Encode and Decode Strings";

// 2023-09-25
export default function solution(input: string[]): string[] {
  function encode(input: string[]): string {
    return JSON.stringify(input);
  }

  function decode(input: string): string[] {
    return JSON.parse(input);
  }

  return decode(encode(input));
}
