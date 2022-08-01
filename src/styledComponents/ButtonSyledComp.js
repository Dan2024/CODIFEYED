import styled from 'styled-components'

export const Button = styled.button`
  padding-inline: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
  border-radius: 1rem;
  border: 1px solid #183446;
  background-color: #183446;
  color: white;
  font-family: poppins;
  font-weight: bold;
  font-size: 0.9rem;
  height: 3rem;
  width: 100%;
  margin-top: 1.5rem;

  &:hover {
    background-color: transparent;
    color: #183446;
    border: #183446 1px solid;
    transition: 0.5s;
    cursor: pointer;
  }

  @media only screen and (max-width: 530px) {
    margin-top: 0.2rem;
  }
`
