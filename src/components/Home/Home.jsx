import { motion } from 'framer-motion'
import './home.css'
import React from 'react'
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import home from '../../../public/assets/home.png'
import mouse from '../../../public/assets/scroll.png'

const Home = () => {

  const [role] = useTypewriter({
    words:["Web Developer","Front-end Developer","React.js Developer"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:50
  })

  const textvariants = {
      initial:{
        opacity:0,
        x:-500
      },
      animate:{
        x:0,
        opacity:1,
        transition:{
          duration:2,
          staggerChildren:0.1
        }
      },
    scroll:{
      opacity:0,
      y:10,
      transition:{
        duration:2,
        repeat:Infinity
      }
    }
  }
  const imagevariants = {
      initial:{
        opacity:0,
        x:500
      },
      animate:{
        x:0,
        opacity:1,
        transition:{
          duration:2,
          staggerChildren:0.1
        }
      }
  }
  
  return (
    <div className='home container-lg justify-content-center d-flex align-items-center'>
      <div className="row d-flex justify-content-center w-100 align-items-center">
        <motion.div className="col-lg-6 d-flex flex-column text-container ps-lg-5 ps-md-0 gap-sm-2" variants={textvariants} initial="initial" animate="animate">
          <motion.h6 className='m-0 fw-bold ps-lg-4' variants={textvariants}>HI THERE  <span className='fs-4'>👋</span> , I'M</motion.h6>
          <motion.h1 className='m-0 fw-bold py-0 name ' variants={textvariants}>ABILASH</motion.h1>
          <motion.p className='fw-bold role fs-3' style={{color:"#3d6cb9"}} variants={textvariants}>{role}<span className='text-white'><Cursor/></span> </motion.p>
          <motion.div className="buttons m-0" variants={textvariants}>
            <button className='btn btn-sm px-4   fw-bold rounded-3  '><a href="#Contact">Contact Me</a></button>
          </motion.div>
          <motion.div className='d-flex align-items-center mouse ' variants={textvariants}>
            <motion.img src={mouse} animate="scroll" variants={textvariants}  className='scroll my-3 '  width={75} alt="scroll" />
            <motion.p style={{fontSize:'10px'}} className='pt-3 ' animate="scroll" variants={textvariants}>Scroll down</motion.p>
          </motion.div>
          </motion.div>

        {/* right */}
        <motion.div variants={imagevariants} initial="initial" animate="animate" className="col-lg-6 image-container d-flex justify-content-center align-items-center">
          <motion.img variants={imagevariants} src={home} className='img-fluid' width={500} alt="home" />
        </motion.div>
      </div>
    </div>
  )
}

export default Home