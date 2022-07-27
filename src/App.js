import './App.css'
import QuickSortComponent from './sort-components/QuickSortComponent'
import BubbleSortComponent from './sort-components/BubbleSortComponent'
import SelectionSortComponent from './sort-components/SelectionSortComponent'

export default function App() {
  return (
    <div className='grid'>
      <QuickSortComponent />
      <BubbleSortComponent />
      <SelectionSortComponent />
    </div>
  )
}
