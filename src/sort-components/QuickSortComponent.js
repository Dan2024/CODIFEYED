import { useEffect, useRef } from 'react'
import p5 from 'p5'
import AlgorithmSketch from '../p5/p5AlgorithmsSketch'
import { AlgButton } from '../styledComponents/AlgButtonStyledComp'
import { BigO } from '../styledComponents/BigOStyledComp'

export default function QuickSortComponent() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(AlgorithmSketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  function handleClickVisualize() {
    p5Instance.current.quickSortP5()
  }
  function handleClickReset() {
    p5Instance.current.resetArray()
  }

  return (
    <div>
      <div ref={p5ContainerRef}></div>
      <AlgButton onClick={handleClickVisualize}>Visualise</AlgButton>
      <AlgButton onClick={handleClickReset}>Reset</AlgButton>
      <BigO>O(n²)</BigO>
    </div>
  )
}
