import React from 'react'
import './skill.css'
import { motion } from 'framer-motion'
import html from '../../../public/assets/skill/html.png'
import css from '../../../public/assets/skill/css.png'
import bootstrap from '../../../public/assets/skill/bootstrap.png'
import js from '../../../public/assets/skill/js.png'
import react from '../../../public/assets/skill/react.png'
import java from '../../../public/assets/skill/java.png'
import sql from '../../../public/assets/skill/sql server.png'
import github from '../../../public/assets/skill/github.png'
import powerbi from '../../../public/assets/skill/powerbi.png'
import csharp from '../../../public/assets/skill/csharp.png'
import ms from '../../../public/assets/skill/ms.png'
const skills = [
    {
        id: 0,
        icon: html,
        title: 'HTML',
        color: 'orange'
    },
    {
        id: 1,
        icon: css,
        title: 'CSS',
        color: 'skyblue'
    },
    {
        id: 3,
        icon: bootstrap,
        title: 'Bootstrap',
        color: '#7952b3'
    },
    {
        id: 4,
        icon: js,
        title: 'JavaScript',
        color: '#f0db4f'
    },
    {
        id: 5,
        icon: react,
        title: 'ReactJS',
        color: '#61dafb'
    },
    {
        id: 6,
        icon: java,
        title: 'Java',
        color: '#f89820'
    },
    {
        id: 7,
        icon: sql,
        title: 'Sql Server',
        color: 'crimson'
    },
    {
        id: 8,
        icon: github,
        title: 'Github',
        color: '#6e5494'
    },
    {
        id: 9,
        icon: csharp,
        title: 'Dot Net',
        color: 'purple'
    },
    {
        id: 10,
        icon: powerbi,
        title: 'Power BI',
        color: '#f2c811'
    },
    {
        id: 11,
        icon: ms,
        title: 'MS Office',
        color: '#ea3e23'
    }
]


const Single = ({ item }) => {
    return (
        <div
            className='card p-0 m-3 d-flex flex-column justify-content-center align-items-center'
            style={{ '--glow-color': item.color }}
        >
            <img src={item.icon} alt={item.title} width={60} />
            <p className='fw-bold txt mt-2'>{item.title}</p>
        </div>
    );
}

const Skill = () => {


    const motionvariants = {
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
    <motion.div variants={motionvariants} initial="initial" whileInView="animate"  className='h-100 skills  container text-center d-flex flex-column justify-content-center align-items-center pt-md-5 pt-lg-0 mt-lg-0 '>
       
        <motion.h1 variants={motionvariants}  className='display-5 fw-bold pt-lg-0 pb-3 pb-lg-0 pb-sm-5 pt-sm-5 title w-100'>SKILLS</motion.h1>
        <motion.div variants={motionvariants}  className=" p-md-3 d-flex box  p-sm-3 gap-md-2 gap-lg-2  p-lg-3 flex-wrap align-items-center justify-content-center">
            {skills.map((item) => {
                return(
                    <Single item={item}/>
                )
            })}
        </motion.div>
    </motion.div>
  )
}

export default Skill