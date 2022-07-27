import quickSort from '../algorithms/quickSortAlg'
import bubbleSort from '../algorithms/bubbleSortAlg'
import selectionSort from '../algorithms/selectionSortAlg'

export default function sketch(p) {
  let values
  let w = 5

  p.setup = function () {
    p.createCanvas(400, 300)
    values = new Array(p.floor(p.width / w))
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(p.height)
    }
  }

  p.draw = function () {
    p.background(51)
    for (let i = 0; i < values.length; i++) {
      p.stroke(0)
      p.fill(225)
      p.rect(i * w, p.height - values[i], w, values[i])
    }
  }

  p.quickSortP5 = function () {
    quickSort(values, 0, values.length)
  }

  p.bubbleSortP5 = function () {
    bubbleSort(values, 0, values.length)
  }

  p.selectionSortP5 = function () {
    selectionSort(values, 0, values.length)
  }
}
