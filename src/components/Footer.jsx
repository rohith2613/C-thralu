import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/clapperboard.png';

const Footer = () => {
  return (
    <>
    

<footer className="bg-white border-t-2  shadow dark:bg-gray-900  ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <Link to="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src={Logo} className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">C-thralu</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="https://www.instagram.com/sriramularohith/" target='_blank' rel='noreferer' className="hover:underline me-4 md:me-6">Instagram</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sriramula-rohith-568915276/" target='_blank' rel='noreferer' className="hover:underline me-4 md:me-6">Linkedin</a>
                </li>
                <li>
                    <a href="#" target='_blank' rel='noreferer' className="hover:underline me-4 md:me-6">Youtube</a>
                </li>
                <li>
                    <a href="#" target='_blank' rel='noreferer' className="hover:underline">Contact</a>
                </li>
            </ul>
            <h3 className='text-xl dark:text-white'>Gmail: rohiths2613@gmail.com</h3>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">Cthralu™</Link>. All Rights Reserved.</span>
    </div>
</footer>


    </>
    



  )
}

export default Footer
