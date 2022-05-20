import React from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'
import Projects from '../Components/Projects'


const Container = () => {
    return (
        <div>
            <NavBar/>
            <Home/>
            <About/>
            <Projects/>
        </div>
    )
}

export default Container