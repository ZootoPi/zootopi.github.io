import React, { useContext } from 'react'
import { Row, Col } from "reactstrap";
import zootopiIcon from './assets/images/zootopi_icon.png'
import zootopi_icon_white from './assets/images/zootopi_icon_white.png'
import facebook_black_icon from './assets/images/facebook_black_icon.png'
import github_black_icon from './assets/images/github_black_icon.png'
import youtube_icon__white from './assets/images/youtube_icon__white.png'
import facebook_icon__white from './assets/images/facebook_icon__white.png'
import github_icon from './assets/images/github_icon.png'
import youtube_icon from './assets/images/youtube_icon.png'
import './css/footer.css'
import { ThemeContext } from './ThemeContext';

export default function Footer() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className='footer_wrapper'>
      <div className='footer_style'>
        <Row className='footer_part'>
          <Col md="3">
            {darkMode ?
              <img className='zootopi_icon__footer' alt="" src={zootopi_icon_white} />
              :
              <img className='zootopi_icon__footer' alt="" src={zootopiIcon} />
            }
            <div style={darkMode ? { color: '#fff' } : null} className='brand__name'>ZootoPi</div>
            <div style={darkMode ? { color: '#fff' } : null} className='coppyright'>Copyright © 2022 ZootoPi.</div>
          </Col>
          <Col className='navbar__footer_part' md="3">
            <div className='navbar__footer_leftmenu'>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>Home</a></li>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>About</a></li>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>Blog</a></li>
            </div>
            <div className='navbar__footer_rightmenu'>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>Tutorials</a></li>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>Project</a></li>
              <li><a style={darkMode ? { color: '#fff' } : null} href=''>Certificates</a></li>
            </div>
          </Col>
          <Col md="3">
            <div className='socialnetwork__part'>
              <li>
                <a className='social__network' href=''>
                  {darkMode ?
                    <img className='facebook__footer_icon' src={facebook_icon__white} />
                    :
                    <img className='facebook__footer_icon' src={facebook_black_icon} />
                  }
                  <div style={darkMode ? { color: '#fff' } : null} className='spcial__text'>Facebook</div>
                </a>
              </li>
              <li>
                <a className='social__network' href=''>
                  {darkMode ?
                    <img className='github__footer_icon' src={github_icon} />
                    :
                    <img className='github__footer_icon' src={github_black_icon} />

                  }
                  <div style={darkMode ? { color: '#fff' } : null} className='spcial__text'>GitHub</div>
                </a>
              </li>
              <li>
                <a className='social__network' href=''>
                  {darkMode ?
                    <img className='youtube__footer_icon' src={youtube_icon__white} />
                    :
                    <img className='youtube__footer_icon' src={youtube_icon} />
                  }
                  <div style={darkMode ? { color: '#fff' } : null} className='spcial__text'>Youtube</div>
                </a>
              </li>
            </div>
          </Col>
          <Col style={darkMode ? { color: '#fff' } : null} className='madeby' md="3">Made with ❤️ by <span style={darkMode ? { color: '#fff' } : null} className='zootopi__team'>ZootoPi team</span></Col>
        </Row>
      </div>
    </div >
  )
}