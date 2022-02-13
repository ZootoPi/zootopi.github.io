import React, { useContext } from 'react'
import { Row, Col } from "reactstrap";
import background_part2 from './assets/images/background_part2.png'
import port_1 from './assets/images/port_1.png'
import port_2 from './assets/images/port_2.png'
import port_3 from './assets/images/port_3.png'
import port1_icon from './assets/images/port1_icon.png'
import port2_icon from './assets/images/port2_icon.png'
import port3_icon from './assets/images/port3_icon.png'
import learn_more from './assets/images/learn_more.png'
import Footer from './Footer'
import { ThemeContext } from './ThemeContext';
import './css/header.css'
import './css/content.css'

export default function Content() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <section id='home2' className='content_section'>
      <div style={darkMode ? { backgroundColor: 'black' } : null} className='content_wrapper'>
        <img className='background_content' src={background_part2} alt="background" />
        <div className='content_style'>
          <div style={darkMode ? { color: '#fff' } : null} className='content_title'>What we do and what we share</div>
          <Row className='port__part'>
            <Col md="4" xs="4" lg="4">
              <div className='style__port'>
                <img className='port__image' src={port_1} />
                <div className='port_content' >
                  <img className='port_icon__1' src={port1_icon} />
                  <div className='port_text'>
                    <div className='tutorials__text'>Tutorials</div>
                    <div className='middle__text'>Hands-on asignments in all levels.</div>
                    <div>
                      <a className='learn_more' href=''>
                        <div className='learn_more__text'>Learn more</div>
                        <img className='learn_more__icon' src={learn_more} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4" xs="4" lg="4">
              <div className='style__port'>
                <img className='port__image' src={port_2} />
                <div className='port_content'>
                  <img className='port_icon__2' src={port2_icon} />
                  <div className='port_text'>
                    <div className='tutorials__text'>Tutorials</div>
                    <div className='middle__text'>Hands-on asignments in all levels.</div>
                    <div>
                      <a className='learn_more' href=''>
                        <div className='learn_more__text'>Learn more</div>
                        <img className='learn_more__icon' src={learn_more} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="4" xs="4" lg="4">
              <div className='style__port'>
                <img className='port__image' src={port_3} />
                <div className='port_content'>
                  <img className='port_icon__3' src={port3_icon} />
                  <div className='port_text'>
                    <div className='tutorials__text'>Tutorials</div>
                    <div className='middle__text'>Hands-on asignments in all levels.</div>
                    <div>
                      <a className='learn_more' href=''>
                        <div className='learn_more__text'>Learn more</div>
                        <img className='learn_more__icon' src={learn_more} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </section>
  )
}