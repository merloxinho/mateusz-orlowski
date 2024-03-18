import React from 'react'
import {motion} from 'framer-motion'
import {Image} from '@nextui-org/react'
import {Card, CardHeader, CardBody, Button, Input} from "@nextui-org/react";
import emailjs from '@emailjs/browser';
import {useRef, useState, useEffect} from 'react'


const Contact = () => {

        const emailRef = useRef();
        const messageRef = useRef();
        const buttonRef = useRef();
        const form = useRef();

        const [messageSent, setMessageSent] = useState(false);
        const [emailValue, setEmailValue] = useState('');
        const [messageValue, setMessageValue] = useState('');

        const [isValid, setIsValid] = useState(false);

        const handleEmailChange = (e) => {
          setEmailValue(e.target.value);
        }
        const handleMessageChange = (e) => {
          setMessageValue(e.target.value);
        }

        useEffect(() => {
          setIsValid(emailValue !== '' && messageValue !== '');
        }, [emailValue, messageValue]);
  return (
    <section className='flex w-full p-12 md:p-0 md:h-screen bg-gray-100 select-none'>
    <div
    className='gap-12 md:gap-24 justify-between flex flex-col m-auto w-full' >
        <div className='mx-auto flex my-auto flex-col w-full md:w-1/2 select-none text-balance md:text-pretty gap-4 text-center'>
            <motion.h1 viewport={{once:true}} initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.5}} className='font-bold text-4xl md:text-6xl'>Contact Me 📧</motion.h1>
        </div>
        <motion.div viewport={{once:true}} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.5}} className='mx-auto flex flex-col mx-auto justify-center gap-8 w-5/6 select-none z-10 '>
            {/* <form ref={form} id='form1' onSubmit={(e) => sendEmail(e)} className='mx-auto flex flex-col justify-center gap-8 w-full'>     
            <Input
            variant='bordered'
            label="Email"
            value={emailValue}
            onChange={handleEmailChange}
            name="from_name"
            isDisabled={messageSent}
            ref={emailRef}
            id='1'
            className="max-w-xs mx-auto"
            />
            <Input
            variant='bordered'
            label="Message"
            name="message"
            value={messageValue}
            onChange={handleMessageChange}
            isDisabled={messageSent}
            ref={messageRef}
            id='2'
            className="max-w-xs mx-auto"
            />
            <Button disabled={messageSent} onClick={handleButton} ref={buttonRef} id type="submit" value="Send" className='m-auto font-bold text-white' isLoading={messageSent} color='primary'>{messageSent ? "Sending Message" : "Send Message"}</Button>
            </form> */}
            <p className='semibold mx-auto text-gray-400 pt-8 md:pt-24 flex flex-col justify-center align-middle text-center md:text-md text-xs'>Send me an email<a href="mailto: mateusz-orlowski@outlook.com" className='text-[#006FEE] font-bold text-center mx-auto md:text-md text-xs'>mateusz-orlowski@outlook.com</a></p>
        </motion.div>
    </div>
</section>
  )
}

export default Contact
