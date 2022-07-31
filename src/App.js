import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import QuickSortComponent from './sort-components/QuickSortComponent'
import BubbleSortComponent from './sort-components/BubbleSortComponent'
import HomePage from './pages/HomePage'
import SelectionSortComponent from './sort-components/SelectionSortComponent'
import InsertionSortComponent from './sort-components/InsertionSortComponent'
import MergeSortComponent from './sort-components/MergeSortComponent'
import Background from './components/Background'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='test' element={<QuickSortComponent />} /> */}
        {/* <QuickSortComponent />
          <BubbleSortComponent />
          <SelectionSortComponent />
          <InsertionSortComponent />
          <MergeSortComponent /> */}
      </Routes>
      <Background />
    </BrowserRouter>
  )
}
