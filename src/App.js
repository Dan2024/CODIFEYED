import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Background from './components/Background'
import Header from './components/Header'
import AlgorithmVisualizer from './pages/AlgorithmVisualizer'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='algorithm-visualizer' element={<AlgorithmVisualizer />} />
      </Routes>
      <Background />
    </>
  )
}
