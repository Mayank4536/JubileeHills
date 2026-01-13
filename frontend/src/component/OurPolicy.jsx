import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const OurPolicy = () => {
  return (
    <motion.div className=' flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'
        style={{background: "rgb(196, 152, 22)"}}
        initial={{opacity:0.2, y:100}}
        transition={{duration:1}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
     >

      <div>
        <img src={assets.exchange_icon} className=' w-20 m-auto mb-5' alt="" />
        <p className=' font-semibold text-2xl'>1000+ Happy Client's</p>
        <p className=' text-white text-xl '>We Provide high profile call girls in Jubilee Hills.</p>
      </div>

      <div>
        <img src={assets.quality_icon} className=' w-20 m-auto mb-5' alt="" />
        <p className=' font-semibold text-2xl '>Genuine Profile</p>
        <p className=' text-white text-xl'>We Provide 100% Genuine Profile to the client's who book our services.</p>
      </div>

      <div>
        <img src={assets.support_img} className=' w-18 m-auto' alt="" />
        <p className=' font-semibold text-2xl'>Best Client's Support</p>
        <p className=' text-white text-xl'>We provide 24/7 Client's support until they meet the right girls.</p>
      </div>
      
    </motion.div>
  )
}

export default OurPolicy
