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
        <div className='flex justify-between w-full'>
        <div className=''><img src={Cover} alt="" /></div>

        <div>
          
<div class="  w-[511px] relative mt-[42px]">
    
    <input id="npm-install" type="text" class="py-4 pl-4 pr-[307px] bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="Enter your email address" disabled readonly/>
    <button data-copy-to-clipboard-target="npm-install" class=" absolute right-0 top-0   text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full sm:w-auto py-4 px-8 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
        Subscribe
        
    </button>
</div>

        <div className='flex  mt-[144px] '>
        
        <div >
          <h3 className='font-semibold text-base text-black'>Partnership</h3>
          <div className='font-normal text-base text-black'>
          <ul>
            <li>Websites</li>
            <li>Social Media</li>
            <li>Branding</li>
          </ul>
          </div>
          
        </div>
        <div className='ml-[112px]'>
        <h3 className='font-semibold text-base text-black'>About</h3>
        <div className='font-normal text-base text-black'>
        <ul>
            <li>Our Projects</li>
            <li>Careers</li>
            
          </ul>
        </div>

          
        </div>
        <div className='ml-[112px]'>
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
      <div className='flex justify-end items-center  gap-6 mt-10'>
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
