import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'

const ValueStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 10px solid ${theme.colors.accent};
  box-shadow: 0px 2px 15px 0px #BFBABA;
  padding: 30px;
  .value-icon {
    display: grid;
    grid-template-columns: 50px max-content;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border: 2px solid ${theme.colors.accent};
      border-radius: 50%;
    }
  }
`
const Value = ({ icon, title, text }) => {
  return (
    <ValueStyled>
      <figure className="value-icon">
        <img src={icon} alt="" />
        <h3>{title}</h3>
      </figure>
      <div className="value-text">
        <p>{text}</p>
      </div>
    </ValueStyled>
  )
}

export default Value
