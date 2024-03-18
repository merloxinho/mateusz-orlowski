import React from 'react'
import {motion} from 'framer-motion'
import {Progress} from "@nextui-org/react";

const About = () => {
  return (
    <section className='w-full p-12 md:p-0 md:h-screen flex bg-gray-100 select-none'>
        <div className="w-5/6 md:w-2/3 h-full gap-12 md:gap-24 flex flex-col md:flex-row-reverse m-auto">
          <motion.div className='my-auto mb-0 flex flex-col gap-4 w-full text-center md:w-1/2 md:m-auto md:text-right'>
              <motion.h1 viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}} className='font-bold text-4xl md:text-6xl'>My Tech Stack 💻</motion.h1>
              <motion.p viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}}  className='text-zinc-600 text-balance text-sm md:text-medium font-semibold'>Looking ahead, my future plans involve learning Git, Next.js, and subsequently venturing into backend development. 👀</motion.p>
          </motion.div>
          <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className="gap-8 justify-end text-center md:text-left mt-0 md:m-auto my-auto flex w-full md:w-1/2 flex-col">
            <div>
              <motion.p className='font-semibold text-zinc-600 m-0'>Adobe Photoshop, Adobe Illustrator</motion.p>
              <p className='font-light text-zinc-400 m-0 text-left'>8/10</p>
              <Progress size="lg" aria-label="Loading..." value={80} />
            </div>
            <div>
              <motion.p className='font-semibold text-zinc-600 m-0'>HTML, CSS</motion.p>
              <p className='font-light text-zinc-400 m-0 text-left'>8/10</p>
              <Progress size="lg" aria-label="Loading..." value={80} />
            </div>
            <div>
              <motion.p className='font-semibold text-zinc-600 m-0'>Javascript, React</motion.p>
              <p className='font-light text-zinc-400 m-0 text-left'>7/10</p>
              <Progress size="lg" aria-label="Loading..." value={70} />
            </div>
            <div>
              <motion.p className='font-semibold text-zinc-600 m-0'>Tailwind</motion.p>
              <p className='font-light text-zinc-400 m-0 text-left'>7/10</p>
              <Progress size="lg" aria-label="Loading..." value={70} />
            </div>
            <div>
              <motion.p className='font-semibold text-zinc-600 m-0'>Framer Motion</motion.p>
              <p className='font-light text-zinc-400 m-0 text-left'>3/10</p>
              <Progress size="lg" aria-label="Loading..." value={30} />
            </div>
          </motion.div>
        </div>
    </section>
  )
}

export default About
