export default async function quickSort(arr, start, end) {
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
