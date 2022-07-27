export default async function selectionSort(arr) {
  let len = arr.length

  for (let i = 0; i < len; i++) {
    let min = i

    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) await swap(arr, i, min)
  }

  return arr
}

async function swap(arr, a, b) {
  await sleep(50)
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
