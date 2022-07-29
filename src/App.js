import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuickSortComponent from './sort-components/QuickSortComponent'
import BubbleSortComponent from './sort-components/BubbleSortComponent'
// import SelectionSortComponent from './sort-components/SelectionSortComponent'
// import InsertionSortComponent from './sort-components/InsertionSortComponent'
// import MergeSortComponent from './sort-components/MergeSortComponent'

export default function App() {
  return (
    <BrowserRouter>
      <div className='grid'>
        <Routes>
          <Route path='/' element={<QuickSortComponent />} />
          <Route path='test' element={<BubbleSortComponent />} />
          {/* <SelectionSortComponent />
          <InsertionSortComponent />
          <MergeSortComponent /> */}
        </Routes>
      </div>
    </BrowserRouter>
  )
}
