import React, { useState } from 'react'

const NavBar = () => {

    const [batteryP, setBatteryP] = useState(0)

    //obtener bateria
    const battery = navigator.getBattery();

    //temporizador para disparar useEffect
    window.setInterval(() => {
        battery.then(battery => {
            setBatteryP(battery.level * 100)
        })
    }, 1000);


    console.log(batteryP)

    return (
        <div>

        </div>
    )
}

export default NavBar