interface Rectangle {
  x: number,
  y: number,
  width: number,
  height: number,
}

function computeBounds(rects: Array<Rectangle>): Rectangle {
  let [min_x, min_y, max_width, max_height] = [rects[0].x, rects[0].y, 0, 0]
  for (let v of rects) {
    const { x, y, width, height } = v
    if (min_x > x) min_x = x
    if (min_y > y) min_y = y
    if (max_width < x + width) max_width = x + width
    if (max_height < y + height) max_height = y + height
  }
  return {
    x: min_x,
    y: min_y,
    width: max_width - min_x,
    height: max_height - min_y
  }
}

const rects: Array<Rectangle> = [
  {
    x: 3,
    y: 3,
    width: 5,
    height: 5,
  },
  {
    x: 2,
    y: 2,
    width: 10,
    height: 10
  },
  {
    x: 0,
    y: 0,
    width: 8,
    height: 8
  }
]

console.log(computeBounds(rects))