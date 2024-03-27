import React from 'react'
import {Image} from "@nextui-org/react";
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <section className='flex w-full h-screen bg-gray-50 select-none'>
            <motion.div animate={{ opacity: 100 }} transition={{ delay: 0.75 }}
            className='gap-12 md:gap-24 justify-between opacity-0 flex flex-col-reverse md:flex-row m-auto md:w-2/3 w-5/6' >
                <div className='flex my-auto flex-col w-full md:w-1/2 select-none text-balance md:text-pretty gap-4 text-center md:text-left'>
                    <h1 className='font-bold text-4xl md:text-6xl'>Hi, I'm Mateusz 👋</h1>
                    <p className='text-zinc-600 text-sm md:text-medium font-semibold'>I'm 18-year-old aspiring frontend developer from Poland, with six months of learning under my belt. Specializing in React, but I'm open to mastering new tools. My current objective is to get my first job. 🚀</p>
                </div>
                <div className='flex w-full md:w-1/2 select-none z-10 '>
                    <Image
                    isBlurred
                    src="https://imgur.com/iQgd8zf.png"
                    />
                </div>
            </motion.div>
    </section>
  )
}

export default Hero
