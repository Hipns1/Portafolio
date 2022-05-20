import React from 'react'
import About from '../Components/About'
import Home from '../Components/Home'
import NavBar from '../Components/NavBar'


const Container = () => {
    return (
        <div>
            <NavBar/>
            <Home/>
            <About/>
        </div>
    )
}

export default Container