import React from 'react'
import LogoPng from "../../assets/Logo.png"

function Logo() {
    return (
        <a href="#" className='flex gap-2 items-center text-2xl sm:text-3xl font-bold'>
            <img src={LogoPng} alt="Logo Resto" className='w-12 h-12'/>
            <span>SpecialFood </span>
        </a>
    )
}

export default Logo
