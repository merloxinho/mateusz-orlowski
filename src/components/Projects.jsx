import React from 'react'
import {motion} from 'framer-motion'
import {Image} from '@nextui-org/react'
import {Card, CardHeader, CardBody, Button} from "@nextui-org/react";

const Projects = () => {
  return (
    <section className='flex w-full p-12 md:p-0 md:h-screen bg-gray-50 select-none'>
    <div
    className='gap-12 md:gap-24 justify-between flex flex-col m-auto w-full' >
        <div className='mx-auto flex my-auto flex-col w-full md:w-1/2 select-none text-balance md:text-pretty gap-4 text-center'>
            <motion.h1 viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}} className='font-bold text-4xl md:text-6xl'>My Projects ✨</motion.h1>
        </div>
        <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='mx-auto flex flex-col md:flex-row justify-center gap-24 w-5/6 select-none z-10 '>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <small className="text-default-500">React, Tailwind</small>
                    <h4 className="font-bold text-large">Weather App</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl drop-shadow-lg"
                    src="https://imgur.com/TMuPxqC.png"
                    width={300}
                    />
                    <a href="https://github.com/merloxinho/react-weather-app" className='pt-4 md:text-md text-sm m-auto font-semibold text-[#006FEE]'>View on Github <i className="fa-brands fa-github" /></a>
                </CardBody>
            </Card>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <small className="text-default-500">React, Tailwind</small>
                    <h4 className="font-bold text-large">Next project soon</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                    alt="Card background"
                    className="object-cover rounded-xl drop-shadow-lg"
                    src="https://via.placeholder.com/1920x1080"
                    width={300}
                    />
                    <a href="" className='md:text-md text-sm pt-4 m-auto font-semibold text-[#006FEE]'>View on Github <i className="fa-brands fa-github" /></a>
                </CardBody>
            </Card>
        </motion.div>
    </div>
</section>
  )
}

export default Projects