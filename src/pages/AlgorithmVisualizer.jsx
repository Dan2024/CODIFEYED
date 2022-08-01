import SelectionSortComponent from '../sort-components/SelectionSortComponent'
import InsertionSortComponent from '../sort-components/InsertionSortComponent'
import MergeSortComponent from '../sort-components/MergeSortComponent'
import QuickSortComponent from '../sort-components/QuickSortComponent'
import BubbleSortComponent from '../sort-components/BubbleSortComponent'

export default function AlgorithmVisualizer() {
  return (
    <div>
      <QuickSortComponent />
      <BubbleSortComponent />
      <SelectionSortComponent />
      <InsertionSortComponent />
      <MergeSortComponent />
    </div>
  )
}
