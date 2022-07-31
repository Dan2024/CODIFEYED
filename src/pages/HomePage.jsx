import HeroCard from '../components/HeroCard'
import './HomePage.css'

export default function HomePage() {
  return (
    <div className='container'>
      <div className='mission-statement'>
        Exploring the interface of computer science, maths and art.
      </div>

      <ul className='hero-card__list'>
        <HeroCard
          title={'Algorithm Visualizer'}
          text={
            'watch many of the most well-known sorting algorithms in action.'
          }
        />
        <HeroCard
          title={'Fractal Forest'}
          text={
            'explore a forest of fractal trees made with recursive functions.'
          }
        />
        <HeroCard
          title={'Pendulum'}
          text={
            'create your own masterpiece with the help of our double pendulum.'
          }
        />
        <HeroCard
          title={'Playground'}
          text={'currently under construction 🚧 ...'}
        />
      </ul>
    </div>
  )
}
