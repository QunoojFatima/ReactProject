import React from 'react';
import "./Hero.css";
import CountUp from 'react-countup';
import {HiLocationMarker} from 'react-icons/hi';
import {animate, motion} from 'framer-motion'

export default function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className="flexColStart hero-left">
                <div className="hero-title">

                    <div className="orange-circle"></div>

                    <motion.h1 initial={{y:"2rem", opacity: 0}}
                    animate={{y:0, opacity: 1}}
                    transition={{duration: 2, type:'ease-in'}}>Discover Your <br/>Best Place to Call Home</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find Your Dream Residence: Where Comfort Meets Convenience</span>
                    <span className='secondaryText'>Your Ideal Home Away from Home</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type='text'/>
                    <button className="button">Search</button>               
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={550} end={650} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Properties for Sale</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={250} end={400} duration={4}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Satisfied Customers</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={12}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Franchise</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <motion.div 
                initial={{x: "9rem", opacity: 0}}
                animate={{x: 0, opacity:1}}
                transition={{duration: 2, type:'ease-in'}} 
                className="image-container">
                    <img src="./hero-image1.jpg" alt="" />                    
                </motion.div>
            </div>
        </div>
    </section>
  )
}
 