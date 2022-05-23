import React from 'react'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import Projects from '../Components/Projects'


const Container = () => {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default Container