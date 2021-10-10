import styled from 'styled-components'
import Link from './Link'
import instagram from '../../static/icons/instagram.svg'
import whatsapp from '../../static/icons/whatsapp.svg'
import facebook from '../../static/icons/facebook.svg'

const SocialMediaStyled = styled.div`
  width: 100%;
  display: none;
  justify-content: flex-end;
  align-self: center;
  gap: 5px;
  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    a {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`

const SocialMedia = () => {
  return (
    <SocialMediaStyled>
      <figure>
        <Link to="">
          <img src={facebook} alt="" />
        </Link>
      </figure>
      <figure>
        <Link to="">
          <img src={instagram} alt="" />
        </Link>
      </figure>
      <figure>
        <Link to="">
          <img src={whatsapp} alt="" />
        </Link>
      </figure>
    </SocialMediaStyled>
  )
}

export default SocialMedia
