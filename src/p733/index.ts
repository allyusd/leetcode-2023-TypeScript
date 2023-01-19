export function exportWarp(image: number[][], sr: number, sc: number, color: number): number[][] {
  return floodFill(image, sr, sc, color);
}

// 2023-01-19
// 733. Flood Fill
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  let target = image[sr][sc];

  if (target === color) {
    return image;
  }

  const fillColor = (sr: number, sc: number, target: number, color: number) => {
    if (sr >= 0 && sr < image.length
      && sc >= 0 && sc < image[0].length) {
      if (image[sr][sc] === target) {
        image[sr][sc] = color;
        autoFill(sr, sc, target, color);
      }
    }
  };

  const autoFill = (sr: number, sc: number, target: number, color: number) => {
    fillColor(sr - 1, sc, target, color);
    fillColor(sr, sc + 1, target, color);
    fillColor(sr + 1, sc, target, color);
    fillColor(sr, sc - 1, target, color);
  }

  fillColor(sr, sc, target, color);

  return image;
}
