import './HeroCard.css'

export default function HeroCard({ title, text }) {
  return (
    <li className='hero-card__styling-container'>
      <div className='hero-styling-card'></div>
      <div className='hero-card'>
        <div className='hero-card__title'>{title}</div>
        <div className='hero-card__text'>{text}</div>
      </div>
      <div className='hero-card__link'>Take Me There</div>
    </li>
  )
}
