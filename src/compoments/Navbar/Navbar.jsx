import React from 'react'
// import DarkMode from "./DarkMode"
import Link from './Link'
import Logo from './Logo'
import OrderBtn from './OrderBtn'

function Navbar() {
  const listLink = [
    {key: 'Home', url: '/#'},
    {key: 'About', url: '/#about'},
    {key: 'Contact', url: '/#contact'}
  ]

  return (
    <>
      {/* <div className="shadow-md dark-config"> */}
      <div className="shadow-md dark-config bg-white text-gray-950 dark:text-white dark:bg-gray-950 duration-200;">
        <div className='container px-6 py-3 sm:py-0'>
          <div className="flex justify-between items-center">
            {/* LOGO PART */}
            <div>
              <Logo/>
            </div>

            {/* Links List */}
            <div>
              <ul className="hidden sm:flex gap-3">
                {
                  listLink.map((link) => (
                    <li>
                      <Link url = {link.url} text = {link.key} />
                    </li>
                  ))
                }
              </ul>
              
              {/* Button to display on small Screens */}
              <div className="flex items-center gap-3">
                {/* <DarkMode/> */}
                <OrderBtn/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar