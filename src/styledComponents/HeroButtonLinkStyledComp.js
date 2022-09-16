import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeroButtonLink = styled(Link)`
  display: grid;
  place-items: center;
  color: white;
  font-size: 1rem;
  font-weight: normal;
  background: #183446;
  box-shadow: rgba(25, 25, 26, 0.3) 0px 8px 24px;
  border-radius: 2rem;
  margin: 3rem;
  grid-area: 1/1;
  height: 17%;
  width: 10rem;
  align-self: end;
  justify-self: right;
  z-index: 2;
  text-decoration: none;

  &:hover {
    background-color: transparent;
    color: #183446;
    border: #183446 1px solid;
    transition: 0.5s;
    cursor: pointer;
  }

  @media only screen and (max-width: 670px) {
    font-size: 1rem;
    width: 50%;
    margin: 1rem;
  }
`
