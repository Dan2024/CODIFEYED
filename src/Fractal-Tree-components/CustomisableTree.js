import { useEffect, useRef } from 'react'
import p5 from 'p5'
import customizableTreeSketch from '../p5/customizableTreeSketch'
import { AlgButton } from '../styledComponents/AlgButtonStyledComp'

export default function CustomizableTree() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(customizableTreeSketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  function handleClick() {
    p5Instance.current.newRandomTree()
  }

  return (
    <div>
      <AlgButton onClick={handleClick}>New Tree</AlgButton>
      <div ref={p5ContainerRef}></div>
    </div>
  )
}
