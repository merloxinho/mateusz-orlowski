import React from 'react'
import {motion} from 'framer-motion'
import {Image} from '@nextui-org/react'
import {Card, CardHeader, CardBody, Button, Input} from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import {useRef} from 'react'


const Contact = () => {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_kplsa7a', 'template_vupegj4', form.current, {
              publicKey: 'CHQrDXnWMdnF5oc2s',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                document.getElementById("1").textContent = "";
                document.getElementById("2").textContent = "";
                document.getElementById("3").textContent = "";
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
  return (
    <section className='flex w-full p-12 md:p-0 md:h-screen bg-gray-100 select-none'>
    <div
    className='gap-12 md:gap-24 justify-between flex flex-col m-auto w-full' >
        <div className='mx-auto flex my-auto flex-col w-full md:w-1/2 select-none text-balance md:text-pretty gap-4 text-center'>
            <motion.h1 viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}} className='font-bold text-4xl md:text-6xl'>Contact Me 📧</motion.h1>
        </div>
        <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='mx-auto flex flex-col mx-auto justify-center gap-8 w-5/6 select-none z-10 '>
            <form ref={form} onSubmit={sendEmail} className='mx-auto flex flex-col justify-center gap-8 w-full'>     
            <Input
            variant='bordered'
            label="Email"
            name="from_name"
            id='1'
            className="max-w-xs mx-auto"
            />
            <Input
            variant='bordered'
            label="Message"
            name="message"
            id='3'
            className="max-w-xs mx-auto"
            />
            <input type="submit" value="Send" className='active:bg-blue-900 px-6 py-2 bg-[#006FEE] mx-auto rounded-lg font-bold text-white cursor-pointer'/>
            </form>
            <p className='semibold mx-auto text-gray-400 pt-8 md:pt-24 flex flex-col justify-center align-middle text-center md:text-md text-xs'>Or just send me an email at <a href="mailto: mateusz-orlowski@outlook.com" className='text-[#006FEE] font-bold text-center mx-auto md:text-md text-xs'>mateusz-orlowski@outlook.com</a></p>
        </motion.div>
    </div>
</section>
  )
}

export default Contact