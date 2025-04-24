import React from 'react'
import './navbar.css'
import logo from '../../../public/assets/white-logo.png'
import linkedin from '../../../public/assets/linkedin.png'
import github from '../../../public/assets/github.png'
import gmail from '../../../public/assets/gmail.png'

const Navbar = () => {
  return (
    <>
    <nav className="navbar  py-sm-5 p-md-3 navbar-expand-lg">
        <div className="container-lg container-md px-sm-5 ">
            <a className="navbar-brand border-none" href="#"><img src={logo} alt="logo" width={50}/></a>
            <div className="social d-flex justify-content-center align-items-center gap-lg-4 gap-md-3 gap-sm-3">
                <a href="https://www.linkedin.com/in/abilash-m-8b5b751a3" target='_blank'><img src={linkedin} alt="linkedin"/></a>
                <a href="https://github.com/Abilash-7" target='_blank'><img src={github}  className='git' alt="github" /></a>
                <a href="mailto:abilashmanickam@gmail.com" target='_blank'><img src={gmail} alt="Gmail" /></a>
            </div>
        </div>
    </nav>

    </>

    
  )
}

export default Navbar