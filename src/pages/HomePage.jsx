import React from 'react'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='container'>
      <div className='header three-col-grid__expand-two'>
        <div className='header-title'>
          CODIF<span>EYE</span>D
        </div>

        <div className='spacer'></div>

        <ul className='nav-list grid__auto-columns'>
          <button className='nav-list-item'>
            <li>Algorithm Visualizer</li>
          </button>

          <button className='nav-list-item'>
            <li>Fractal Forest</li>
          </button>

          <button className='nav-list-item'>
            <li>Pendulum</li>
          </button>

          <button className='nav-list-item'>
            <li>PlayGround</li>
          </button>
        </ul>
      </div>

      <div className='mission-statement'>
        Exploring the interface of computer science, maths and art.
      </div>

      <ul className='page-link-list'>
        <li className='card-styling-container'>
          <div className='styling-card'></div>
          <div className='page-link-card'>
            <div className='card-title'>Algorithm Visualizer</div>
          </div>
          <div className='card-call-to-action'>Take Me There</div>
        </li>
        <li className='card-styling-container'>
          <div className='styling-card'></div>
          <div className='page-link-card'>
            <div className='card-title'>Fractal Forest</div>
          </div>
          <div className='card-call-to-action'>Take Me There</div>
        </li>
        <li className='card-styling-container'>
          <div className='styling-card'></div>
          <div className='page-link-card'>
            <div className='card-title'>Pendulum</div>
          </div>
          <div className='card-call-to-action'>Take Me There</div>
        </li>
        <li className='card-styling-container'>
          <div className='styling-card'></div>
          <div className='page-link-card'>
            <div className='card-title'>PlayGround</div>
          </div>
          <div className='card-call-to-action'>Take Me There</div>
        </li>
      </ul>
    </div>
  )
}
