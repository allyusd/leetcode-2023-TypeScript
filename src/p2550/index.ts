export function exportWarp(n: number): number {
  return monkeyMove(n);
}

class Vertex {
  static init(n: number) {
    const vertices = [];
    for (let i = 0; i < n; i++) {
      vertices[i] = 0;
    }

    return vertices;
  }

  static add(vertices: number[], index: number): void {
    if (index < 0) {
      vertices[vertices.length - 1]++;
    } else if (index >= vertices.length) {
      vertices[0]++;
    } else {
      vertices[index]++;
    }

    // console.log(`index: ${index}`);
    // console.log(`vertices: ${vertices}`);
  }

  static collision(vertices: number[]): boolean {
    console.log(vertices);
    // console.log(vertices.filter(x => x > 1));
    // console.log(vertices.filter(x => x > 1).length);
    // console.log(vertices.filter(x => x > 1).length > 1);

    return vertices.filter((x) => x > 1).length > 0;
  }
}

// 2023-01-28
// 6338. Count Collisions of Monkeys on a Polygon
// 思考有誤，目前的寫法是以跳過去的頂點為紀錄，但是忽略了兩個同時交換時碰撞的情況
function monkeyMove(n: number): number {
  const fn = function (vertices: number[], i: number): number {
    const left = [...vertices];
    Vertex.add(left, i - 1);
    const right = [...vertices];
    Vertex.add(right, i + 1);

    if (i === vertices.length - 1) {
      return (Vertex.collision(left) ? 1 : 0) + (Vertex.collision(right) ? 1 : 0);
    } else {
      return fn(left, i + 1) + fn(right, i + 1);
    }
  };

  const array = Vertex.init(n);

  return fn(array, 0);
}
