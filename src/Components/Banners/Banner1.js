import React, { useEffect  , useState} from 'react'

export default function Banner1() {
    const [state, SetState] = useState(null)

    useEffect(() => {

    }, [])


    return (
        <div>
            <div className='bannerOne lg:px-14 md:px-14 px-0' style={{ backgroundImage: 'linear-gradient(270deg, rgba(131, 58, 180, 0) 34%, rgba(6, 6, 6, 0.7318277652858018) 81%), url(https://info.ehl.edu/hubfs/Blog-EHL-Insights/Blog-Header-EHL-Insights/business-creativity.jpg)' }}>
                <div className="relative h-full">
                    <section className=' absolute lg:left-[5%] lg:w-[35%] md:w-[35%] w-[50%] md:left-[5%] left-[4%] lg:top-[35%] md:top-[35%] top-[35%]'>
                       <h2 className='text-white font-semibold lg:text-3xl md:text-2xl text-xl '><span className='font-bold text-yellow-500'>Elevate</span> <span className="lg:text-4xl font-bold md:text-3xl text-2xl">you</span> <span className='text-[#ff0303] font-bold'>productivity</span></h2>
                       <article>
                        <p className='text-white text-sm'>Get beautiful css snippet of various Components 
                        soon you 'll be able to find out here input box css , color plates , box shadow and Glassmorphism generator
                        so <span className='font-semibold'>Ctrl+D 🟡 </span>
                             </p>
                       </article>
                    </section>
                </div>
            </div>
        </div>
    )
}
