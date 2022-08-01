import styled from 'styled-components'

export const AlgButton = styled.button`
  padding-inline: 1rem;
  box-shadow: rgb(38, 57, 77) 0px 10px 30px -10px;
  border-radius: 1rem;
  border: 1px solid rgb(210, 115, 0);
  background-color: rgb(210, 115, 0);
  color: white;
  font-family: poppins;
  font-size: 0.9rem;
  height: 1.5rem;
  width: 8rem;
  margin-top: 1rem;
  margin-right: 1rem;
  opacity: 0.9;

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
