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
      <Routes>
        <Route path='/CODIFEYED' element={<HomePage />} />
        <Route
          path='/CODIFEYED/algorithm-visualizer'
          element={<AlgorithmVisualizer />}
        />
        <Route path='/CODIFEYED/fractal-forest' element={<FractalForest />} />
        <Route path='/CODIFEYED/pendulum' element={<PendulumPage />} />
      </Routes>
      <Background />
    </>
  )
}
