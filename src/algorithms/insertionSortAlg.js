export default async function insertionSort(arr) {
  const len = arr.length

  for (let i = 1; i < len; i++) {
    let currentValue = arr[i]
    let j = i - 1

    while (j >= 0 && arr[j] > currentValue) {
      await sleep(5)
      arr[j + 1] = arr[j]
      j--
    }
    await sleep(5)
    arr[j + 1] = currentValue
  }
  return arr
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
