import React, { useState, useEffect, useCallback, useContext } from 'react'
import zootopi_icon from '../newDesign/assets/images/zootopi_icon.png'
import zootopi_icon_white from '../newDesign/assets/images/zootopi_icon_white.png'
import github_direct from './assets/images/github_direct.png'
import github_direction_white from './assets/images/github_direction_white.png'
import dark_mode from './assets/images/dark_mode.png'
import light_mode from './assets/images/light_mode.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import Switch from 'react-switch'
import './css/navbar.css'
import { ThemeContext } from './ThemeContext'

export default function Navbar() {

  const [navbarColor, setNavbarColor] = useState("navbar-transparent");
  const [navbarColor__dark, setNavbarColor__dark] = useState("dark_navbar");
  const [switchChange, setSwitchChange] = useState(false)
  const [toggleMenu, setToggleMenu] = useState(false);
  const { darkMode, setDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 100 ||
        document.body.scrollTop > 100
      ) {
        setNavbarColor("navbar-transparent");
        setNavbarColor__dark("dark_navbar");
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        setNavbarColor("");
        setNavbarColor__dark("")
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  }, [navbarColor, navbarColor__dark]);

  const handleChange = useCallback(() => {
    setSwitchChange(!switchChange)
    setDarkMode(!darkMode)
    localStorage.setItem('darkMode', !darkMode)
  }, [switchChange, darkMode])

  return (
    <nav style={darkMode ? { background: '#000' } : null} className={`app__navbar ${darkMode ? navbarColor__dark : navbarColor}`}>
      <div className='app__navbar-logo'>
        <ul className={darkMode ? "app__navbar-home" : "app__navbar-home__darkmode"}>
          <li>
            {darkMode ?
              <img src={zootopi_icon_white} alt="app logo" />
              :
              <img src={zootopi_icon} alt="app logo" />
            }
          </li>
          <li><a style={darkMode ? { color: '#fff' } : { color: '#000' }} href='#home'>ZootoPi</a></li>
        </ul>
      </div>
      <ul className={darkMode ? 'app__navbar-links__darkmode' : 'app__navbar-links'}>
        <li className='p__opensans'><a href='#tutorials'>Tutorials</a></li>
        <li className='p__opensans'><a href='#projects'>Projects</a></li>
        <li className='p__opensans'><a href='#certificates'>Certificates</a></li>
      </ul>
      <ul className={darkMode ? 'app__navbar-login__darkmode' : 'app__navbar-login'}>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#blog'>Blog</a></li>
        <li className='p__opensans github__menu_part'>
          <a href='#gitHub'>GitHub</a>
          {darkMode ? <img src={github_direction_white} /> : <img src={github_direct} />}
        </li>
        <Switch
          className="react-switch switch__style"
          onChange={handleChange}
          checked={switchChange}
          checkedIcon={<img className='dark_mode__icon' src={light_mode} />}
          uncheckedIcon={<img className='dark_mode__icon' src={dark_mode} />}
          required
        />
      </ul>
      <div className='app__navbar-smallscreen'>
        {
          darkMode ?
            <GiHamburgerMenu color='#FFF' fontSize={27} onClick={() => setToggleMenu(true)} />
            :
            <GiHamburgerMenu color='#000' fontSize={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu &&
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
            <MdOutlineRestaurantMenu color='#000' fontSize={27} onClick={() => setToggleMenu(false)} className="overlay__close" />
            <ul className='app__navbar-smallscreen_links'>
              <li className='p__opensans'><a href='#tutorials'>Tutorials</a></li>
              <li className='p__opensans'><a href='#projects'>Projects</a></li>
              <li className='p__opensans'><a href='#certificates'>Certificates</a></li>
              <li className='p__opensans'><a href='#about'>About</a></li>
              <li className='p__opensans'><a href='#blog'>Blog</a></li>
              <li className='p__opensans'><a href='#gitHub'>GitHub</a></li>
              <li className='p__opensans'>
                <Switch
                  className="react-switch"
                  onChange={handleChange}
                  checked={switchChange}
                  uncheckedIcon={<img className='dark_mode__icon' src={dark_mode} />}
                  checkedIcon={<img className='dark_mode__icon' src={light_mode} />}
                  required
                />
              </li>
            </ul>
          </div>
        }
      </div>
    </nav >
  )
}