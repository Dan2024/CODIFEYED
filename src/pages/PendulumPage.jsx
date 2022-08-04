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
              <div className='pendulum-card__title'>Pendulum</div>
              <div className='pendulum-card__info-text'>
                <span className='highlighted-text'>ADJUST THE CONTROLS</span> TO
                SEE HOW THE PENDULUM BEHAVES UNDER DIFFERENT CONDITIONS
              </div>
            </div>
            <PendulumComponent />
          </div>
        </li>
      </div>
    </div>
  )
}
