import React from 'react'
import Heading from '../common/header/Heading'
import {homeAbout} from "../../dummydata"
import Awrapper from './Awrapper'
import "./about.css"

const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className="container flexSB">
            <div className='left row'>
                <img src='./images/about1.jpg' alt=''/>
            </div>
            <div className="right row">
                <Heading  subtitle='EXPLORE LEARNING' title='The truth will set you fire'/>
                <div className='items'>
                    {homeAbout.map((val)=>(
                    <div className='item flexSB'>
                        <div className='img'>
                            <img src={val.cover} alt=''/>
                        </div>
                        <div className='text'>
                            <h2>{val.title}</h2>
                            <p>{val.desc}</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>

        </div>
      </section>
      <Awrapper/>
    </>
  )
}

export default AboutCard
