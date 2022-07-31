import './App.css'
import { Routes, Route } from 'react-router-dom'
import QuickSortComponent from './sort-components/QuickSortComponent'
import BubbleSortComponent from './sort-components/BubbleSortComponent'
import HomePage from './pages/HomePage'
import SelectionSortComponent from './sort-components/SelectionSortComponent'
import InsertionSortComponent from './sort-components/InsertionSortComponent'
import MergeSortComponent from './sort-components/MergeSortComponent'
import Background from './components/Background'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
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
    </>
  )
}
