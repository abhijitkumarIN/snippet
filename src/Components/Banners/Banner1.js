import React from 'react'
export default function Banner1( props) {

    return (
        <div>
            <div className='bannerOne lg:px-14 md:px-14 px-0' style={{ backgroundImage: `linear-gradient(270deg, rgba(131, 58, 180, 0) 34%, rgba(6, 6, 6, 0.7318277652858018) 81%), url(${props?.img})` }}>
                <div className="relative h-full">
                    <section className=' absolute lg:left-[5%] lg:w-[35%] md:w-[35%] w-[50%] md:left-[5%] left-[4%] lg:top-[35%] md:top-[35%] top-[35%]'>
                        <h2 className='text-white font-semibold lg:text-3xl md:text-2xl text-xl '><span className='font-bold text-yellow-500'>{props?.titleOne}</span> <span className="lg:text-4xl font-bold md:text-3xl text-2xl">{props?.titleTwo}</span> <span className='text-[#ff0303] font-bold'>{props?.titleThird}</span></h2>
                        <article>
                            <p className='text-white text-sm'>{props?.articles} <span className='font-semibold'> {props?.suggestion} </span>
                            </p>
                        </article>
                    </section>
                </div>
            </div>
        </div>
    )
}
