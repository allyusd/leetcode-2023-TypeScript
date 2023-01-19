export function exportWarp(image: number[][], sr: number, sc: number, color: number): number[][] {
  return floodFill(image, sr, sc, color);
}

// 2023-01-19
// 733. Flood Fill
// Official Solution
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const target = image[sr][sc];

  if (target === color) {
    return image;
  }

  fds(image, sr, sc, color, target);

  return image;
}

function fds(image: number[][], sr: number, sc: number, color: number, target: number) {
  if (image[sr][sc] === target) {
    image[sr][sc] = color;

    if (sr - 1 >= 0) {
      fds(image, sr - 1, sc, color, target);
    }

    if (sc - 1 >= 0) {
      fds(image, sr, sc - 1, color, target);
    }

    if (sr + 1 < image.length) {
      fds(image, sr + 1, sc, color, target);
    }

    if (sc + 1 < image[0].length) {
      fds(image, sr, sc + 1, color, target);
    }
  }
}
