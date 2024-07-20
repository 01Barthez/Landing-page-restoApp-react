import React from 'react'
import imgPng from '../../assets/Service/frite.png'

const servicesData = [
    {
        id: "1",
        img: imgPng,
        name: 'biryani',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum quia obcaecati dignissimos'
    },

    {
        id: "2",
        img: imgPng,
        name: 'Chiken kari',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum quia obcaecati dignissimos'
    },

    {
        id: "3",
        img: imgPng,
        name: 'Cold cofee',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam rerum quia obcaecati dignissimos'
    }
]

function Services() {
  return (
    <>
        <div className="p-10">
            <div className="container">
                <div className="text-center flex flex-col gap-2 mb-20 max-w-screen-sm mx-auto">
                    <span className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                        Our Services
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold">
                        Services
                    </h2>

                    <p className='text-sm md:text-base'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eveniet ipsum eos quia culpa facere maiores error cupiditate ratione ut! Voluptas qui at molestiae alias amet consequuntur quam voluptatem dicta?
                    </p>
                </div>

                {/* Card Section */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 place-items-center">
                    {
                        servicesData.map(({id, img, name, description})=>(
                            (
                                <div 
                                    key={id}
                                    className='max-w-xs group rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white duration-300 shadow-xl'
                                >
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sed, dicta perferendis alias impedit recusandae odio ut, tempore at commodi repudiandae quasi facere harum inventore ratione magnam, consequatur fuga ipsa?
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Services
