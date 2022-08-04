import './Header.css'
import { Link } from 'react-router-dom'
import { Button } from '../styledComponents/ButtonSyledComp'

export default function Header() {
  return (
    <div className='header three-col-grid__expand-two'>
      <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
        <div className='header-title'>
          CODIF<span className='highlighted-text'>EYE</span>D
        </div>
      </Link>

      <div className='spacer'></div>

      <ul className='nav-list grid__auto-columns'>
        <li>
          <Link to='algorithm-visualizer'>
            <Button>Algorithm Visualizer</Button>
          </Link>
        </li>
        <li>
          <Link to='fractal-forest'>
            <Button>Fractal Forest</Button>
          </Link>
        </li>
        <li>
          <Link to='pendulum'>
            <Button>Pendulum</Button>
          </Link>
        </li>
        <li>
          <Link to='playground'>
            <Button>PlayGround</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}
