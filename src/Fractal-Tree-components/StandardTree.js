import { useEffect, useRef } from 'react'
import p5 from 'p5'
import standardTreeSketch from '../p5/standardTreeSketch'

export default function StandardTree() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(standardTreeSketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  return (
    <div>
      <div ref={p5ContainerRef}></div>
    </div>
  )
}
