// 2023-09-20
export const title = "347. Top K Frequent Elements";

export default function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();

  nums.forEach((num) => {
    if (map.has(num)) {
      map.set(num, (map.get(num) ?? 0) + 1);
    } else {
      map.set(num, 1);
    }
  });

  let keys = Array.from(map.keys());

  keys = keys.sort((a, b) => {
    return (map.get(b) ?? 0) - (map.get(a) ?? 0);
  });

  return keys.slice(0, k);
}
