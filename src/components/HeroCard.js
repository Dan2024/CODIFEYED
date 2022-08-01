import './HeroCard.css'
import { HeroButtonLink } from '../styledComponents/HeroButtonLinkStyledComp'

export default function HeroCard({ title, text, linkPathName }) {
  return (
    <>
      <div className='hero-styling-card'></div>
      <div className='hero-card'>
        <div className='hero-card__title'>{title}</div>
        <div className='hero-card__text'>{text}</div>
      </div>
      {linkPathName && (
        <HeroButtonLink to={linkPathName}>Take Me There</HeroButtonLink>
      )}
    </>
  )
}
