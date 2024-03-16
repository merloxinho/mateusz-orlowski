import React from 'react'

const Footer = () => {
  return (
    <section className='bg-[#006FEE] p-4 flex w-full text-white align-middle justify-center md:flex-row flex-col md:gap-8 text-xs select-none'>
        <a className='my-auto'>&copy; Mateusz Orłowski 2024</a>
        <a href="https://github.com/merloxinho" className='my-auto '><i className="my-auto fa-brands fa-github"></i> Github</a>
        <a href="https://instagram.com/merloxio" className='my-auto '><i className="my-auto fa-brands fa-instagram"></i> Instagram</a>
        <a href="mailto: mateusz-orlowski@outlook.com" className='my-auto '>mateusz-orlowski@outlook.com</a>
    </section>
  )
}

export default Footer