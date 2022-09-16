import quickSort from '../algorithms/quickSortAlg'
import bubbleSort from '../algorithms/bubbleSortAlg'
import selectionSort from '../algorithms/selectionSortAlg'
import insertionSort from '../algorithms/insertionSortAlg'
import mergeSort from '../algorithms/mergeSortAlg'

let sharedValues = []

export default function algorithmSketch(p) {
  let w = 5
  let values

  p.setup = function () {
    p.createCanvas(500, 250)
    if (sharedValues.length === 0) {
      sharedValues = new Array(p.floor(p.width / w))

      for (let i = 0; i < sharedValues.length; i++) {
        sharedValues[i] = p.random(p.height)
      }
    }

    values = sharedValues.slice()
  }

  p.draw = function () {
    p.background(255)
    for (let i = 0; i < values.length; i++) {
      p.stroke(1)
      p.fill(24, 52, 70)
      p.rect(i * w, p.height - values[i], w, values[i])
    }
  }

  p.resetArray = function () {
    values = new Array(p.floor(p.width / w))
    for (let i = 0; i < values.length; i++) {
      values[i] = p.random(p.height)
    }
  }

  p.bubbleSortP5 = function () {
    bubbleSort(values)
  }

  p.selectionSortP5 = function () {
    selectionSort(values)
  }

  p.insertionSortP5 = function () {
    insertionSort(values)
  }

  p.quickSortP5 = function () {
    quickSort(values, 0, values.length)
  }

  p.mergeSortP5 = function () {
    mergeSort(values)
  }
}
