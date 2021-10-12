import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import menu from '../../static/icons/menu.svg'
import close from '../../static/icons/close.svg'
import { useState } from 'react'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import Link from './Link'
import instagram from '../../static/icons/instagram.svg'
import whatsapp from '../../static/icons/whatsapp.svg'
import facebook from '../../static/icons/facebook.svg'

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: var(--main-color);
  color: #fff;
  width: 100%;
  position: fixed;
  z-index: 1000;

  .menu-open {
    display: grid;
    align-items: center;
    width: 100%;
    font-size: 20px;
    img {
      width: 28px;
    }
  }

  .menu-nav {
    background-color: var(--main-color);
    position: fixed;
    width: 100%;
    height: 100vh;
    top: ${({ isMenuOpen }) => (isMenuOpen ? '0' : '-100vh')};
    bottom: 0;
    right: 0;
    left: 0;
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 1fr;
    transition: .3s;
  }

  .menu-close {
    position: absolute;
    top: 10px;
    right: 5%;
    img {
      width: 28px;
    }
  }

  .menu {
    color: var(--secundary-color);
    display: grid;
    gap: 20px;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    a {
      font-weight: 600;
    }
  }

  .social-media-nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    margin-bottom: 10px;
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
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);

    .menu-open, .menu-close {
      display: none;
    }
    .menu-nav {
      top: 0;
      position: static;
      height: auto;
      background: none;
    }
    .menu {
      grid-auto-flow: column;
    }
    .social-media-nav {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    .menu a {
      font-size: 1em;
    }
  }
`

const Header = () => {
  const history = useHistory()
  const [state, setState] = useState(false)
  const handleMenuOpen = () => {
    setState(true)
  }
  const handleMenuClose = () => {
    setState(false)
  }

  history.listen((location) => {
    window.scrollTo(0, 0)
    if(location === history.location){
      if(!state)
        setState(false)
        window.scrollY = 0
    }
  })

  return (
    <HeaderStyled isMenuOpen={state}>
        <Logo/>

        <figure onClick={handleMenuOpen} className="menu-open">
          <img src={menu} alt="Menu Icon" />
        </figure>

        <nav className="menu-nav">
          <figure onClick={handleMenuClose} className="menu-close">
            <img src={close} alt="Menu Icon Close" />
          </figure>

          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
          </ul>

          <div className="social-media-nav">
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
          </div>
        </nav>

        <SocialMedia/>
    </HeaderStyled>
  )
}

export default Header
