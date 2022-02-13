import React, { useContext } from 'react'
import { Row, Col, Button } from "reactstrap";
// import background_hero from './assets/images/background_hero.png'
import pi__icon from './assets/images/pi__icon.png'
import github_icon from './assets/images/github_icon.png';
import facebook_icon from './assets/images/facebook_icon.png';
import facebook_black_icon from './assets/images/facebook_black_icon.png';
import icon_navigation from './assets/images/icon-navigation.png';
import icon_navigation__darkmode from './assets/images/icon-navigation__darkmode.png';
import hero__icon from './assets/images/hero__icon.png'
import { Link } from 'react-scroll'
import './css/header.css'
import { ThemeContext } from './ThemeContext';

export default function Header() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section className='hero_section'>
      <div style={darkMode ? { backgroundColor: 'black' } : null} className='hero_wrapper'>
        <div style={darkMode ? { backgroundColor: 'black' } : null} className='hero'>
          <div className='header__title__style'>
            <div className='header__title'>
              <div className='header__title_part'>
                <div className='shared'>Share</div>
                <div style={darkMode ? { color: '#fff' } : null} className='what'>what</div>
              </div>
              <div className='header__title_part'>
                <div style={darkMode ? { color: '#fff' } : null}>we</div>
                <div className='love'>love !</div>
              </div>
            </div>
            <div className='button_part'>
              <Button style={darkMode ? { backgroundColor: '#FF3A00' } : null} className='github_button'>
                <div>We are in</div>
                <img className='github_icon' alt="" src={github_icon} />
              </Button>
              <Button style={darkMode ? { backgroundColor: '#FFF' } : null} className='facebook_button'>
                <div style={darkMode ? { color: '#000' } : null}>We are in</div>
                {darkMode ?
                  <img className='facebook_icon' alt="" src={facebook_black_icon} /> :
                  <img className='facebook_icon' alt="" src={facebook_icon} />
                }
              </Button>
            </div>
          </div>
          <div>
            <img className='background_hero' src={hero__icon} alt="background" />
            <img className='pi__icon' src={pi__icon} alt="background" />
          </div>
        </div>
        <div className='navigate_button'>
          <Link to="home2" smooth={true} duration={700}>
            {darkMode ?
              <img className='navigate_img' src={icon_navigation__darkmode} />
              :
              <img className='navigate_img' src={icon_navigation} />
            }
          </Link>
        </div>
      </div>
    </section >
  )
}