import styled from 'styled-components'

const ValueStyled = styled.div`
  .value-title {
    display: flex;
    gap: 5px;
    margin-bottom: 5px;

    .value-icon {
      width: 25px;
    }
  }

  .value-text {
    border: none;
    border-top: 1px solid gray;
    padding-top: 5px;
  }
`
const Value = ({ icon, title, text }) => {
  return (
    <ValueStyled>
      <div className="value-title">
        <figure className="value-icon">
          <img src={icon} alt="" />
        </figure>
        <h4>{title}</h4>
      </div>
      <div className="value-text">
        <p>{text}</p>
      </div>   
    </ValueStyled>
  )
}

export default Value
