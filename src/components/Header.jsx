import React from 'react'
import {Button} from "@nextui-org/react";
import { motion, useScroll, useSpring } from "framer-motion";


const Header = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 150,
        damping: 20,
        restDelta: 0.001
      });
  return (
    <header className='text-4xl fixed top-0 w-screen z-[14]'>
        <motion.div
            className="progress-bar w-full h-2 fixed z-100 bg-[#006FEE]"
            style={{ scaleX }}
        />
        <motion.div animate={{ opacity: 100 }} transition={{ delay: 0.75 }} className='opacity-0 w-5/6 md:w-2/3 flex mx-auto mt-4 md:mt-8 justify-between'>
            <div className='my-auto flex gap-2 '>
                <a href="https://www.github.com/merloxinho/"><Button isIconOnly color="primary" aria-label="Like" className='shadow-lg'>
                    <i className="fa-brands fa-github"></i>
                </Button></a>
                <a href="https://www.instagram.com/merloxio"><Button isIconOnly color="primary" aria-label="Like">
                    <i className="fa-brands fa-instagram"></i>
                </Button></a>
            </div>
            <Button className='my-auto font-bold text-white' color='primary'>CV</Button>
        </motion.div>
    </header>
  )
}

export default Header