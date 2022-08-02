import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Background from './components/Background'
import Header from './components/Header'
import AlgorithmVisualizer from './pages/AlgorithmVisualizer'
import FractalForest from './pages/FractalForest'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='algorithm-visualizer' element={<AlgorithmVisualizer />} />
        <Route path='fractal-forest' element={<FractalForest />} />
      </Routes>
      <Background />
    </>
  )
}
