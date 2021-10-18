import { useState } from 'react'
import { theme } from '../../theme'
import styled from 'styled-components'
import Link from '../../components/Common/Link'
import Icon from './Icon'

const MenuCategoryStyled = styled.div`
  width: min-content;
  .menu-category-open {
    display: grid;
    justify-content: center;
    align-items: center;
    width: min-content;
    cursor: pointer;
    img {
      width: 22px;
      height: 22px;
    }
  }
  .menu-category {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    background: ${theme.colors.primary};
    position: fixed;
    width: 280px;
    top: 52px;
    left: 0;
    bottom: 0;
    padding: 15px;
    color: ${theme.colors.textWithBackground};
    .menu-category-header {
      display: grid;
      grid-template-columns: repeat(2, min-content);
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
      .menu-category-title {
        font-size: 1.2em;
      }
      .menu-category-close {
        display: grid;
        justify-content: center;
        align-items: center;
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
    hr {
      margin-bottom: 15px;
    }
    ul {
      display: grid;
      grid-gap: 5px;
    }
  }

  @media (min-width: 800px) {
    .menu-category-open {
      display: none;
    }
    .menu-category {
      display: block;
      border: 1px solid ${theme.colors.stroke};
      position: sticky;
      top: 72px;
      bottom: 0;
      background: ${theme.colors.primary};
      color: ${theme.colors.textWithBackground};
    }
  }
`
const MenuCategory = ({ className }) => {
  const [isOpen, setIsOpen] = useState()
  const handleMenuOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleMenuClose = () => {
    setIsOpen(false)
  }
  return (
    <MenuCategoryStyled isOpen={isOpen} className={className}>
      <figure onClick={handleMenuOpen} className="menu-category-open">
        <Icon icon="menuPoint" width="25" height="25" color="white"/>
      </figure>
      <div className="menu-category">
        <div className="menu-category-header">
          <p className="menu-category-title">Categorias</p>
          <figure onClick={handleMenuClose} className="menu-category-close">
            <Icon icon="menuClose" width="25" height="25" color="white"/>
          </figure>
        </div>
        <hr />
        <ul>
          <li>
            <Link to="">Electrodomesticos</Link>
          </li>
          <li>
            <Link to="">Juguetes</Link>
          </li>
          <li>
            <Link to="">Construcción</Link>
          </li>
          <li>
            <Link to="">Tecnología</Link>
          </li>
          <li>
            <Link to="">Automotriz</Link>
          </li>
          <li>
            <Link to="">Herramientas</Link>
          </li>
        </ul>
      </div>
    </MenuCategoryStyled>
  )
}

export default MenuCategory
