import React from 'react'
import './about.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const textvariants = {
        initial:{
            opacity:0,
            y:500
        },
        animate:{
            opacity:1,
            y:0,
            transition:{
                duration:.5,
                staggerChildren:0.1
            }
        }
    }
    
  return (
    <motion.div variants={textvariants} initial="initial" whileInView="animate" className='about container  d-flex flex-column justify-content-center align-items-center  h-100 mt-md-5 mt-lg-5 p-sm-0'>
  
    {/* about */}
        <motion.div variants={textvariants} className="text-container text-center py-lg-5 pb-md-5 p-md-0">
            <h1 className='display-5 fw-bold  pb-3 title' >ABOUT</h1>
            <p className='px-5'>  
                Hello! My name is Abilash, and I have completed my studies in B.Tech (Information Technology) in 2023. I developed an interest in web development during my college years. I experimented with basic HTML programs, including forms, buttons, and especially CSS, which added a more attractive look and feel to the HTML. 
                I thoroughly enjoyed the output that appeared in the web browser; 
                it truly impressed me.
                <br /><br />
                Then I watched some YouTube tutorial videos to learn HTML, CSS, JavaScript, and React.js, and I started creating basic web designs. After that, to enhance my skills, 
                I joined online courses, interned, and completed various tasks
                <br /><br />
                After that, I plan to learn backend development and aspire to become a full-stack developer.
            </p>
            <div className="icons gap-3 gap-sm-4 d-flex justify-content-center mt-4 mt-sm-5 mt-md-5 gap-md-3">
                <a href="https://www.linkedin.com/in/abilash-m-8b5b751a3" target='_blank' className='text-black fs-3'>      <FontAwesomeIcon icon={faLinkedin} className=" fs-3" /></a>
                <a href="https://github.com/Abilash-7" target='_blank' className='text-black fs-3'>      <FontAwesomeIcon icon={faGithub} className="fs-3" /></a>
            </div>
        </motion.div>

        {/* resume */}
        <motion.div variants={textvariants} className="resume  text-center py-md-5  py-lg-0 py-sm-5">    
            <h1 className='fw-bold pb-sm-3'>Resume</h1>
            <div className="buttons d-flex justify-content-center gap-5 p-3">
                <a href="../../../public/assets/Abilash M_Resume.pdf" download className='btn text-black linkbtn'><i class="fa-solid fa-download pe-3 "></i>Get Resume</a>
                <Link to="/resume" className='btn linkbtn text-black'><i class="fa-solid fa-eye pe-3"></i>View Resume</Link>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default About