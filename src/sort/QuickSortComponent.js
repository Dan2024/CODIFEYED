import { useEffect, useRef } from 'react'
import p5 from 'p5'
import '../sort/QuickSortComponent.css'

// store sketch with all methods on it
const sketch = function (p) {
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
}

// ----------- algo logic
// store all algos together
// import into sketch obj so can be made methods
// import sketch where needed
async function quickSort(arr, start, end) {
  if (start >= end) return

  let idx = await partition(arr, start, end)

  await Promise.all([
    quickSort(arr, start, idx - 1),
    quickSort(arr, idx + 1, end),
  ])
}

async function partition(arr, start, end) {
  let pivotIndex = start
  let pivotValue = arr[end]

  for (let index = start; index < end; index++) {
    const element = arr[index]
    if (element < pivotValue) {
      await swap(arr, index, pivotIndex)
      pivotIndex++
    }
  }
  await swap(arr, pivotIndex, end)
  return pivotIndex
}

async function swap(arr, a, b) {
  await sleep(25)
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// ----------- algo logic

export default function QuickSortComponent() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(sketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  function handleClick() {
    p5Instance.current.quickSortP5()
  }

  return (
    <div>
      <button onClick={handleClick}>visualise</button>
      <div ref={p5ContainerRef}></div>
    </div>
  )
}
