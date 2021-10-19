import styled from 'styled-components'
import { theme } from '../../theme'

const ValueStyled = styled.div`
  box-shadow: 0px 0px 7px 1px ${theme.colors.stroke};
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 50px;
  text-align: center;
  transition: all .2s ease;
  cursor: pointer;
  &:hover {
    background-color: #000;
    color: #fff;
  }
  .value-icon {
    width: 50px;
    height: 50px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 15px;
  }
`
const Value = ({ icon, title, text }) => {
  return (
    <ValueStyled>
      <figure className="value-icon">
        <img src={icon} alt="" />
      </figure>
      <h3>{title}</h3>
      <div className="value-text">
        <p>{text}</p>
      </div>
    </ValueStyled>
  )
}

export default Value
