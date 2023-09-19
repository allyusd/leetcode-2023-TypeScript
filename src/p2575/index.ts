export function exportWarp(word: string, m: number): number[] {
  return divisibilityArray(word, m);
}

// 2023-02-25
// 2575. Find the Divisibility Array of a String
// 試著用這個思維解題，但是時間到了
// https://math.stackexchange.com/questions/2455480/divisibility-of-big-numbers
function divisibilityArray(word: string, m: number): number[] {
  const output: number[] = [];

  for (let i = 0; i < word.length; i++) {
    const num = Number(word.slice(0, i + 1));
    const divisibility = num % m === 0 ? 1 : 0;
    output.push(divisibility);
  }

  const y = m.toString().length;
  // let start = word.length - y;
  // let end = word.length;
  // let w = word.slice(start, end);
  // console.log(w);

  let tmp = 0;

  let i = 0;
  let start = word.length;
  let end = word.length;

  let first = 0;
  let last = 0;

  // eslint-disable-next-line no-constant-condition
  while (true) {
    end = start;
    start = start - y;
    if (start < 0) {
      start = 0;
    }

    const w = Number(word.slice(start, end));
    // console.log(w);

    const p = Math.pow(10, y);
    // console.log(p);

    switch (i) {
      case 0:
        tmp = w;
        break;
      case 1:
        first = p % m;
        last = p % m;
        tmp += w * last;
        break;
      default:
        last = (first * last) % m;
        tmp += w * last;
        break;
    }

    i++;
    if (start === 0) {
      break;
    }
  }

  console.log(tmp);

  // let first = 100000 % 14159;
  // let last = 100000 % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);
  // last = first * last % 14159;
  // console.log(last);

  return output;
}
