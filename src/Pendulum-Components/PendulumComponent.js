import { useEffect, useRef, useState } from 'react'
import p5 from 'p5'
import pendulumSketch from '../p5/pendulumSketch'
import { Slider } from '@mui/material'
import './PendulumComponent.css'

export default function PendulumComponent() {
  // const [sliderValue, setSliderValue] = useState({
  //   g: 1,
  //   m1: 10,
  //   m2: 10,
  //   pl1: 120,
  //   pl2: 225,
  //   dampMult: 0.99999999999,
  // })
  const p5ContainerRef = useRef()
  let p5Instance = useRef()

  useEffect(() => {
    p5Instance.current = new p5(pendulumSketch, p5ContainerRef.current)

    return () => {
      p5Instance.current.remove()
    }
  }, [])

  function handleChangeGravity(e) {
    p5Instance.current.changeGravity(e)
  }

  function handleChangeMass1(e) {
    p5Instance.current.changeMass1(e)
  }

  function handleChangeMass2(e) {
    p5Instance.current.changeMass2(e)
  }

  function handleChangePendLen1(e) {
    p5Instance.current.changePendLen1(e)
  }

  function handleChangePendLen2(e) {
    p5Instance.current.changePendLen2(e)
  }

  function handleChangeDampening(e) {
    p5Instance.current.changeDampening(e)
  }

  return (
    <div>
      <div ref={p5ContainerRef}></div>
      <div className='slider-element__container'>
        <div className='slider-element'>
          <div className='slider-name'>Gravity</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={1}
            step={0.01}
            min={0.1}
            max={4}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangeGravity(e)}
          />
        </div>

        <div className='slider-element'>
          <div className='slider-name'>Pendulum Length 1</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={140}
            step={1}
            min={10}
            max={200}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangePendLen1(e)}
          />
        </div>

        <div className='slider-element'>
          <div className='slider-name'>Mass 1</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={10}
            step={1}
            min={1}
            max={100}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangeMass1(e)}
          />
        </div>

        <div className='slider-element'>
          <div className='slider-name'>Pendulum Length 2</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={200}
            step={1}
            min={10}
            max={300}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangePendLen2(e)}
          />
        </div>

        <div className='slider-element'>
          <div className='slider-name'>Mass 2</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={10}
            step={1}
            min={1}
            max={100}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangeMass2(e)}
          />
        </div>

        <div className='slider-element'>
          <div className='slider-name'>Dampening</div>
          <Slider
            sx={{ width: 250, color: '#183446' }}
            defaultValue={0.99999999999}
            step={0.00001}
            min={0.99}
            max={0.99999999999}
            valueLabelDisplay='auto'
            onChange={(e) => handleChangeDampening(e)}
          />
        </div>
      </div>
    </div>
  )
}
