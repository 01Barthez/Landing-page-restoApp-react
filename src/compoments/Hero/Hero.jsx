import React from 'react'
import Food1 from '../../assets/Hero/burger.png'
import Food2 from '../../assets/Hero/frite.png'
import Food3 from '../../assets/Hero/pasta.png'
import Food4 from '../../assets/Hero/pizza.png'
import bgImg from '../../assets/Hero/bgImg.png'
import OrderBtn from './OrderBtn'

const imageList = [
    {
        id: 1,
        image: Food1
    },

    {
        id: 2,
        image: Food2,
    },

    {
        id: 3,
        image: Food3,
    },
]

const bgImageStyle = {
    backgroundImage: `url(${bgImg})`,
    backgroundSize: "cover",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    with: '100%',
    height: '100%',
}


function Hero() {
    // const [imageId, setImageId] = useState(burgerPng);
    return (
        <>
            <div style={bgImageStyle} className="min-h-[35rem] sm:min-h-[38rem] bg-gray-100 dark:bg-gray-900 dark:text-white duration-200 flex items-center justify-center">
                <div className="containeur px-8 sm:px-16 pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* text content section */}
                        <div className="max-w-screen-md flex flex-col justify-center items-center sm:items-start gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                                Welcome to <span className="text-primary dark:text-secondary">Special Food</span>
                            </h1>

                            <p className='text-sm sm:text-base'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse eius assumenda nesciunt laudantium laboriosam repellat aliquid voluptas, necessitatibus dignissimos nisi aspernatur et alias optio fugiat recusandae reprehenderit magnam dolor quod?
                            </p>

                            <div className="">
                                <OrderBtn/>
                            </div>
                        </div>

                        {/* Image section */}
                        <div className="relative max-w-screen-md order-1 sm:order-2 min-h-[450px] sm:min-h-[500px] flex justify-center items-center">
                            {/* main image section */}
                            <div className="">
                                <img src={imageList[0].image} alt={imageList[0].image} className='w-80 sm:w-96 mx-auto spin'/>
                            </div>
                            
                            {/* image list section */}
                            <div className="absolute bottom-0 lg:bottom-auto lg:-right-10 flex lg:flex-col lg:py-4 gap-2 bg-black/10 lg:bg-white/30 rounded-full overflow-hidden">
                                {
                                    imageList.map((item)=>(
                                        <img 
                                            key={item.id}
                                            src={item.image}
                                            alt={item.image}
                                            className='max-w-20 h-20 object-contain inline-block hover:scale-110 duration-200 cursor-pointer'
                                            onClick={() => {
                                                setImageId(
                                                    item.id === 1 ? Food1 : item.id === 2 ? Food2 : Food3
                                                );
                                            }}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </> 
    )
}

export default Hero
