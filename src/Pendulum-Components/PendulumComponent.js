import { useEffect, useRef } from 'react'
import p5 from 'p5'
import pendulumSketch from '../p5/pendulumSketch'

export default function PendulumComponent() {
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(pendulumSketch, p5ContainerRef.current)

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
