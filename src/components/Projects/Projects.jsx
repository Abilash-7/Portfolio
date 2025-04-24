import React, { useRef } from 'react'
import './project.css'
import { motion, useScroll, useSpring} from 'framer-motion';
import mobile from '../../../public/assets/mobile.png'
import todo from '../../../public/assets/todo.png'
import weather from '../../../public/assets/weather.png'

const projects = [
    {
        id:1,
        title:"E-Commerce MobileShop",
        img:mobile,
        tech:"ReactJs, Bootstrap",
        desc:"It is a mobile e-commerce web application that allows users to browse and purchase mobile phones. The app provides a user-friendly interface with features such as product listing, product details, a shopping cart, and a checkout process."
       ,live:"https://cute-tiramisu-0d884a.netlify.app/",
        code:"https://github.com/Abilash-7/E-Commerce_Mobiles" 
    },
    {
        id:2,
        title:"To-Do List App",
        img:todo,
        tech:"ReactJs, Bootstrap",
        desc:"SimpleToDo is a straightforward web application designed to help users manage their tasks effectively. The application provides a clean and user-friendly interface for creating, updating, and deleting tasks." ,
        live:"https://regal-trifle-b6b31a.netlify.app/",
        code:"https://github.com/Abilash-7/ToDo-List-App"
    },
    {
        id:3,
        title:"Weather App",
        img:weather,
        tech:"HTML, CSS, JavaScript",
        desc:"It is a basic web application that fetches and displays weather information using the OpenWeatherMap API. Users can enter a city name, and the application will provide current weather conditions along with additional details." ,
        live:"https://creative-maamoul-344ea9.netlify.app/",
        code:"https://github.com/Abilash-7/WeatherApp"
    }
];


const Single = ({item}) => {

    const motionvariants = {
        initial:{
            opacity:0,
            y:500
        },
        animate:{
            opacity:1,
            y:0
        },
        transition:{
            duration:1
        }
    }

    return  <section> 
                     <div className="container box d-flex justify-content-center w-100 h-100 align-items-center">
                        <motion.div variants={motionvariants} initial="initial" whileInView="animate" className="row h-100  d-flex justify-content-center m-lg-auto">    
                            <motion.div variants={motionvariants} className="image-container m-lg-0 mt-md-5 align-items-center col-lg-6 d-flex justify-content-center">
                                <img src={item.img} alt="image" className='image img-fluid  rounded-5 m-auto shadow' width={500} height={350}  />
                            </motion.div>

                            <motion.div variants={motionvariants} className="text p-md-0  col-lg-6 d-flex flex-column align-items-center  gap-3 ">
                                <h2 className='fw-bold'>{item.title}</h2>
                                <p className='text-center desc m-0'>{item.desc}</p>
                                <p style={{color:"gold"}}>Technology Used : <span style={{color:"#ccc"}}>{item.tech}</span></p>
                                <div className="buttons d-flex gap-3">
                                    <a href={item.live} target='_blank' className='btn btn-sm px-4 rounded-3 fw-bold'> <i className="fa-solid fa-link fw-bold pe-1"></i> Live Link</a>
                                    <a href={item.code} className='btn btn-sm rounded-3 fw-bold' target='_blank'><i className="fa-solid fa-code fw-bold pe-1"></i> Source Code</a>
                                </div>
                            </motion.div>

                        </motion.div>
                    </div>
            </section>
     
}


const Projects = () => {

    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end","start start"]
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30
    })


  return (
    <div className='container' ref={ref}>
           
         <div className="progress-container text-center">
            <h1 className='fw-bold pb-2 display-5 title' >PROJECTS</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
        </div>
        {
            projects.map(item => {
                return(
                    <Single item={item} key={item.id}/>
                )
            })
        }
    </div>
  )
}

export default Projects