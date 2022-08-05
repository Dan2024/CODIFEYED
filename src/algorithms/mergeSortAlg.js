export default async function mergeSort(values) {
  async function doMergeSort(a, start, end) {
    if (end - start <= 1) return

    var mid = Math.round((end + start) / 2)
    await doMergeSort(a, start, mid)
    await doMergeSort(a, mid, end)

    let i = start,
      j = mid
    while (i < end && j < end) {
      if (a[i] > a[j]) {
        let t = a[j]
        a.splice(j, 1)
        a.splice(i, 0, t)
        j++
      }
      i++
      if (i === j) j++
      await sleep(10)
    }
  }

  doMergeSort(values, 0, values.length)
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
