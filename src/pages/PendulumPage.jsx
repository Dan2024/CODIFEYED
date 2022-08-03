import './PendulumPage.css'
import PendulumComponent from '../Pendulum-Components/PendulumComponent'

export default function PendulumPage() {
  return (
    <div className='container'>
      <div className='pendulum__container'>
        <li className='pendulum-styling__container'>
          <div className='pendulum-styling__card'></div>
          <div className='pendulum-card'>
            <div className='pendulum-card__info-container'>
              <div className='pendulum-card__title'>(Double) Pendulum</div>
              <div className='pendulum-card__info-text'>hhhhhh</div>
              <div className='pendulum-card__cta'>
                <span className='highlighted-text'>CLICK THE CANVAS</span> TO
                GROW YOUR FIRST FRACTAL TREE
              </div>
            </div>
            <PendulumComponent />
          </div>
        </li>
      </div>
    </div>
  )
}
