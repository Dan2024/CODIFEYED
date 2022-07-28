import './App.css'
import QuickSortComponent from './sort-components/QuickSortComponent'
import BubbleSortComponent from './sort-components/BubbleSortComponent'
import SelectionSortComponent from './sort-components/SelectionSortComponent'
import InsertionSortComponent from './sort-components/InsertionSortComponent'

export default function App() {
  return (
    <div className='grid'>
      <QuickSortComponent />
      <BubbleSortComponent />
      <SelectionSortComponent />
      <InsertionSortComponent />
    </div>
  )
}
