import './Header.css'

export default function Header() {
  return (
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
  )
}
