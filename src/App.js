import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Background from './components/Background'
import Header from './components/Header'
import AlgorithmVisualizer from './pages/AlgorithmVisualizer'
import FractalForest from './pages/FractalForest'
import PendulumPage from './pages/PendulumPage'

export default function App() {
  return (
    <>
      <Header />
      <Routes basename='CODIFEYED'>
        <Route path='/' element={<HomePage />} />
        <Route path='algorithm-visualizer' element={<AlgorithmVisualizer />} />
        <Route path='fractal-forest' element={<FractalForest />} />
        <Route path='pendulum' element={<PendulumPage />} />
      </Routes>
      <Background />
    </>
  )
}
