import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { theme } from '../../theme'
import styled from 'styled-components'
import SocialMedia from './SocialMedia'
import Logo from './Logo'
import Link from './Link'
import Icon from './Icon'

const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: repeat(2, min-content);
  justify-content: space-between;
  align-items: center;
  padding: 10px 5%;
  background-color: ${theme.colors.primary};
  color: #fff;
  width: 100%;
  position: fixed;
  z-index: 1000;

  .menu-nav {
    background-color: ${theme.colors.primary};
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
    width: min-content;
    height: min-content;
  }

  .menu {
    color: ${theme.colors.textWithBackground};
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

        <button onClick={handleMenuOpen} className="menu-open">
          <Icon icon="menu" width="25" height="25" color="white"/>
        </button>

        <nav className="menu-nav">
          <button onClick={handleMenuClose} className="menu-close">
            <Icon icon="menuClose" width="25" height="25" color="white"/>
          </button>

          <ul className="menu">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/nosotros">Nosotros</Link></li>
            <li><Link to="/productos">Productos</Link></li>
          </ul>

          <div className="social-media-nav">
            <figure>
              <Link to="">
                <Icon icon="facebook" width="20" height="20" color="white"/>
              </Link>
            </figure>
            <figure>
              <Link to="">
                <Icon icon="instagram" width="20" height="20" color="white"/>
              </Link>
            </figure>
            <figure>
              <Link to="">
                <Icon icon="whatsapp" width="20" height="20" color="white"/>
              </Link>
            </figure>
          </div>
        </nav>

        <SocialMedia/>
    </HeaderStyled>
  )
}

export default Header
