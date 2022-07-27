export default async function bubbleSort(arr) {
  let noSwaps // for optimisation

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true

    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }

  return arr
}

async function swap(arr, a, b) {
  await sleep(5)
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
