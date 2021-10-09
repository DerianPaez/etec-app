/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'
import menu from '../../static/icons/menu.svg'
import close from '../../static/icons/close.svg'
import { useState } from 'react'
import SocialMedia from './SocialMedia'
import Logo from './Logo'

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
    img {
      width: 28px;
    }
  }

  .menu-nav{
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
    display: flex;
    gap: 10px;
    justify-content: center;
    align-self: flex-end;
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

const facebook = (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M39.6098 20.03C39.6098 9.52002 31.0898 1 20.5798 1C10.0699 1 1.5498 9.52002 1.5498 20.03C1.5498 30.54 10.0699 39.06 20.5798 39.06C31.0898 39.06 39.6098 30.54 39.6098 20.03Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10"/>
  <path d="M17.6803 31.54H22.3103V19.94H25.5403L25.8803 16.06H22.3203V13.84C22.3203 12.93 22.5003 12.57 23.3903 12.57H25.8903V8.57001H22.6803C19.2303 8.57001 17.6803 10.09 17.6803 13V16.1H15.2803V20.03H17.6803V31.54Z" fill="#ffffff"/>
  </svg>
)

const instagram = (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20.3203 39.07C15.2812 39.07 10.4485 37.0682 6.88528 33.505C3.32209 29.9418 1.32031 25.1091 1.32031 20.07V20.07C1.32031 15.0309 3.32209 10.1982 6.88528 6.63498C10.4485 3.07179 15.2812 1.07001 20.3203 1.07001V1.07001C25.3594 1.07001 30.1921 3.07179 33.7553 6.63498C37.3185 10.1982 39.3203 15.0309 39.3203 20.07C39.3203 25.1091 37.3185 29.9418 33.7553 33.505C30.1921 37.0682 25.3594 39.07 20.3203 39.07V39.07Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10"/>
  <path d="M20.3199 11.48C23.1099 11.48 23.4399 11.48 24.5399 11.54C25.1988 11.551 25.8513 11.6727 26.4699 11.9C26.923 12.0673 27.333 12.3338 27.6699 12.68C28.0151 13.0177 28.2814 13.4274 28.4499 13.88C28.6869 14.4994 28.8089 15.1568 28.8099 15.82C28.8599 16.92 28.8699 17.25 28.8699 20.04C28.8699 22.83 28.8699 23.15 28.8099 24.25C28.8089 24.9132 28.6869 25.5706 28.4499 26.19C28.2768 26.6457 28.009 27.0596 27.6643 27.4044C27.3195 27.7491 26.9056 28.0168 26.4499 28.19C25.8313 28.4173 25.1788 28.539 24.5199 28.55C23.4199 28.55 23.0899 28.61 20.2999 28.61C17.5099 28.61 17.1799 28.61 16.0799 28.55C15.4209 28.539 14.7685 28.4173 14.1499 28.19C13.6949 28.0265 13.284 27.7594 12.9499 27.41C12.5969 27.0788 12.3293 26.667 12.1699 26.21C11.9329 25.5906 11.8109 24.9332 11.8099 24.27C11.7599 23.17 11.7499 22.84 11.7499 20.06C11.7499 17.28 11.7499 16.94 11.8099 15.84C11.8109 15.1768 11.9329 14.5194 12.1699 13.9C12.3347 13.4456 12.6015 13.0351 12.9499 12.7C13.2867 12.3538 13.6967 12.0873 14.1499 11.92C14.7685 11.6927 15.4209 11.571 16.0799 11.56C17.1799 11.56 17.5099 11.5 20.2999 11.5L20.3199 11.48ZM20.2999 9.61998C17.4699 9.61998 17.1099 9.61998 15.9999 9.68998C15.1322 9.70551 14.2734 9.8678 13.4599 10.17C12.7909 10.4351 12.1846 10.837 11.6799 11.35C11.1291 11.8842 10.7024 12.5328 10.4299 13.25C10.1275 14.06 9.9652 14.9155 9.94989 15.78C9.89989 16.9 9.87988 17.25 9.87988 20.09C9.87988 22.93 9.87989 23.28 9.94989 24.39C9.96422 25.2545 10.1266 26.1102 10.4299 26.92C10.7126 27.6027 11.1389 28.2166 11.6799 28.72C12.1967 29.2514 12.8252 29.6613 13.5199 29.92C14.3326 30.2261 15.1916 30.3918 16.0599 30.41C17.1699 30.46 17.5299 30.47 20.3599 30.47C23.1899 30.47 23.5499 30.47 24.6599 30.41C25.5251 30.393 26.3809 30.2273 27.1899 29.92C27.8882 29.6626 28.5202 29.2527 29.0399 28.72C29.5724 28.1982 29.9852 27.567 30.2499 26.87C30.5484 26.0589 30.7106 25.204 30.7299 24.34C30.7799 23.23 30.7899 22.87 30.7899 20.04C30.7899 17.21 30.7899 16.85 30.7299 15.73C30.7095 14.866 30.5474 14.0113 30.2499 13.2C29.9827 12.5043 29.5702 11.8736 29.0399 11.35C28.5177 10.8204 27.8864 10.4109 27.1899 10.15C26.3802 9.84666 25.5244 9.68431 24.6599 9.66998C23.5499 9.60998 23.1899 9.59998 20.3599 9.59998" fill="#ffffff"/>
  <path d="M20.32 14.68C19.2599 14.68 18.2235 14.9944 17.3421 15.5833C16.4607 16.1723 15.7736 17.0094 15.368 17.9888C14.9623 18.9682 14.8561 20.0459 15.063 21.0857C15.2698 22.1254 15.7803 23.0805 16.5299 23.8301C17.2795 24.5797 18.2345 25.0902 19.2743 25.297C20.314 25.5038 21.3917 25.3977 22.3711 24.992C23.3505 24.5863 24.1877 23.8993 24.7766 23.0178C25.3656 22.1364 25.68 21.1001 25.68 20.04C25.68 18.6184 25.1153 17.2551 24.1101 16.2499C23.1049 15.2447 21.7415 14.68 20.32 14.68ZM20.32 23.52C19.6317 23.52 18.9589 23.3159 18.3866 22.9335C17.8143 22.5511 17.3682 22.0076 17.1049 21.3717C16.8415 20.7358 16.7726 20.0361 16.9068 19.3611C17.0411 18.686 17.3725 18.0659 17.8592 17.5793C18.3459 17.0926 18.966 16.7611 19.6411 16.6269C20.3161 16.4926 21.0158 16.5615 21.6517 16.8249C22.2876 17.0883 22.8311 17.5343 23.2135 18.1066C23.5959 18.6789 23.8 19.3517 23.8 20.04C23.8 20.9629 23.4333 21.8481 22.7807 22.5007C22.1281 23.1534 21.2429 23.52 20.32 23.52Z" fill="#ffffff"/>
  <path d="M27.1403 14.47C27.1462 14.7184 27.078 14.963 26.9443 15.1724C26.8107 15.3819 26.6176 15.5468 26.3898 15.646C26.162 15.7452 25.9097 15.7743 25.6653 15.7295C25.4209 15.6847 25.1954 15.5681 25.0175 15.3946C24.8397 15.221 24.7176 14.9984 24.6669 14.7551C24.6162 14.5118 24.6392 14.259 24.7328 14.0288C24.8265 13.7987 24.9866 13.6017 25.1928 13.4629C25.399 13.3242 25.6418 13.2501 25.8903 13.25C26.0553 13.25 26.2186 13.2827 26.3709 13.3461C26.5233 13.4095 26.6615 13.5025 26.7777 13.6196C26.8939 13.7368 26.9858 13.8758 27.048 14.0286C27.1102 14.1814 27.1416 14.345 27.1403 14.51" fill="#ffffff"/>
  </svg>
)

const whatsapp = (
  <svg width="41" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M20 39.06C14.9609 39.06 10.1282 37.0582 6.56497 33.495C3.00178 29.9318 1 25.0991 1 20.06V20.06C1 15.0209 3.00178 10.1882 6.56497 6.62497C10.1282 3.06178 14.9609 1.06 20 1.06V1.06C25.0391 1.06 29.8718 3.06178 33.435 6.62497C36.9982 10.1882 39 15.0209 39 20.06V20.06C39 25.0991 36.9982 29.9318 33.435 33.495C29.8718 37.0582 25.0391 39.06 20 39.06Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M30.4303 19.5C30.3407 16.8597 29.2352 14.3559 27.3442 12.511C25.4533 10.666 22.923 9.62248 20.2813 9.59798C17.6396 9.57347 15.0904 10.5699 13.1655 12.3794C11.2407 14.1889 10.0889 16.6718 9.95031 19.31C9.95031 19.46 9.95031 19.61 9.95031 19.76C9.94929 21.6117 10.4579 23.428 11.4203 25.01L9.57031 30.47L15.2503 28.66C16.8058 29.5146 18.5563 29.951 20.3309 29.9268C22.1054 29.9026 23.8434 29.4184 25.3749 28.5217C26.9064 27.6249 28.1792 26.3462 29.0688 24.8105C29.9583 23.2748 30.4344 21.5347 30.4503 19.76C30.4489 19.673 30.4422 19.5862 30.4303 19.5V19.5ZM20.1903 28.31C18.505 28.3136 16.8561 27.8196 15.4503 26.89L12.1403 27.95L13.2103 24.77C12.146 23.32 11.5716 21.5686 11.5703 19.77C11.5551 19.4935 11.5551 19.2164 11.5703 18.94C11.7955 16.8086 12.8065 14.8375 14.4063 13.4113C16.0061 11.985 18.0798 11.2059 20.223 11.2259C22.3661 11.2459 24.425 12.0635 25.9979 13.5194C27.5708 14.9752 28.5449 16.9648 28.7303 19.1C28.7303 19.32 28.7303 19.54 28.7303 19.77C28.7146 22.0301 27.8098 24.1931 26.2116 25.7913C24.6135 27.3895 22.4504 28.2943 20.1903 28.31V28.31Z" fill="#ffffff"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M24.8904 21.81C24.6304 21.69 23.4004 21.08 23.1704 21C22.9404 20.92 22.7704 20.88 22.6004 21.12C22.4304 21.36 21.9504 21.94 21.8104 22.12C21.6704 22.3 21.5204 22.31 21.2604 22.18C20.5245 21.8904 19.847 21.4704 19.2604 20.94C18.7074 20.4487 18.229 19.8794 17.8404 19.25C17.7004 19 17.8404 18.87 17.9604 18.74C18.0804 18.61 18.2004 18.45 18.3304 18.31L18.4304 18.19C18.4304 18.09 18.5304 18.01 18.5804 17.89C18.62 17.8235 18.6409 17.7475 18.6409 17.67C18.6409 17.5926 18.62 17.5166 18.5804 17.45C18.5204 17.33 18.0204 16.1 17.8104 15.6C17.6004 15.1 17.3904 15.19 17.2404 15.19C17.0904 15.19 16.9304 15.19 16.7604 15.19C16.5057 15.2041 16.266 15.315 16.0904 15.5C15.8065 15.7681 15.5817 16.0925 15.4302 16.4523C15.2787 16.8122 15.2038 17.1996 15.2104 17.59C15.2144 17.878 15.2581 18.164 15.3404 18.44C15.5389 19.061 15.8434 19.6429 16.2404 20.16C17.2835 21.7985 18.7715 23.1061 20.5304 23.93C23.0804 24.93 23.0804 24.59 23.5304 24.55C23.8902 24.4707 24.2282 24.3131 24.5203 24.0884C24.8123 23.8637 25.0514 23.5775 25.2204 23.25C25.3836 22.8795 25.4357 22.4696 25.3704 22.07C25.3104 22 25.1404 21.94 24.8904 21.81Z" fill="#ffffff"/>
  </svg>
)

const Header = () => {
  const [state, setState] = useState(false)
  const handleMenuOpen = () => {
    setState(true)
  }
  const handleMenuClose = () => {
    setState(false)
  }

  const history = useHistory()
  history.listen((location) => {
    if(location === history.location){
      if(!state)
        setState(false)
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
            <li><Link to="/contacto">Contácto</Link></li>
          </ul>

          <div className="social-media-nav">
            <figure>
              <a href="" target="_blank">{facebook}</a>
            </figure>
            <figure>
              <a href="" target="_blank">{instagram}</a>
            </figure>
            <figure>
              <a href="" target="_blank">{whatsapp}</a>
            </figure>
          </div>
        </nav>

        <SocialMedia/>
    </HeaderStyled>
  )
}

export default Header
