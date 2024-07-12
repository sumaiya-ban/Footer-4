import React from 'react'
import Container from './Container'
import Cover from '../assets/Photo rectangle.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <section className='font-inter'>
      <Container>
        <div className='lg:flex flex-row justify-between lg:w-full'>
        <div ><img src={Cover} alt="" class="lg:rounded-none rounded " /></div>

        <div>
          
<div class=" mt-8 lg:w-[511px]  relative lg:mt-[42px]">
    
    <input id="npm-install" type="text" class="py-4 pl-4 lg:pr-[307px] pr-[109px]  bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" lg:placeholder="Enter your email address"
    placeholder=" Email address" />
    <button  class=" absolute lg:right-0 top-0 right-0   text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium lg:rounded text-sm  py-4 px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
        Subscribe
        
    </button>
</div>

        <div className='lg:flex flex-row   lg:mt-[144px] '>
        
        <div className='lg:ml-0 lg:text-left text-center lg:mt-0 mt-8' >
          <h3 className='font-semibold text-base text-black'>Partnership</h3>
          <div className='font-normal text-base text-black'>
          <ul>
            <li>Websites</li>
            <li>Social Media</li>
            <li>Branding</li>
          </ul>
          </div>
          
        </div>
        <div className='lg:ml-[112px] lg:mt-0 mt-8 lg:text-left text-center '>
        <h3 className='font-semibold text-base text-black'>About</h3>
        <div className='font-normal text-base text-black '>
        <ul>
            <li>Our Projects</li>
            <li>Careers</li>
            
          </ul>
        </div>

          
        </div>
        <div className='lg:ml-[112px] lg:text-left text-center lg:mt-0 mt-8'>
        <h3 className='font-semibold text-base text-black'>Support</h3>
        <div className='font-normal text-base text-black'>
        <ul>
            <li>Support Request</li>
            <li>Contact</li>
            
          </ul>
        </div>
          
        </div>
<div>

</div>
      </div>
      <div className='flex lg:justify-end lg:text-right ml-[90px] lg:ml-0    gap-6 mt-10'>
        <div className='text-green bg-white '><FaFacebookF /></div>
        <div className='text-green bg-white'><FaTwitter /></div>
        <div className='text-green bg-white'><FaLinkedin /></div>
        <div className='text-green bg-white'><FaYoutube /></div>

      
      
      
      
      </div>
      
        </div>
        
        </div>
        
      </Container>
    </section>
  )
}

export default Footer
