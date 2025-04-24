import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skill from './components/Skill/Skill'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'


function App() {

const [isLoading,setIsLoading] = useState(true);

useEffect(()=> {
  setTimeout(() => {
      setIsLoading(false)
  }, 500);
},[])

  return (

    <div>
      {isLoading ? (<Loading/>) : (
        <>
          <section id='Home'>
            <Navbar/>     
            <Home/>
          </section>
          <section id='About' className=''><About/></section>
          <section id='Skill' className=''><Skill/></section>
          <Projects/>
          <section id='Contact' className=''><Contact/></section>
   
        </>
        
      )}
      
    </div>

  )
}

export default App
