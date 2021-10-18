import styled from 'styled-components'
import { theme } from '../../theme'

const ValueStyled = styled.div`
  .value-title {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;

    .value-icon {
      width: 25px;
    }
  }

  .value-text {
    border: none;
    border-top: 1px solid ${theme.colors.stroke};
    padding-top: 10px;
  }
`
const Value = ({ icon, title, text }) => {
  return (
    <ValueStyled>
      <div className="value-title">
        <figure className="value-icon">
          <img src={icon} alt="" />
        </figure>
        <h3>{title}</h3>
      </div>
      <div className="value-text">
        <p>{text}</p>
      </div>
    </ValueStyled>
  )
}

export default Value
