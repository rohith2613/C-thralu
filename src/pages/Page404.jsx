import React, { useEffect } from 'react'
import Error from '../assets/error.avif'
import { Link } from 'react-router-dom'
const Page404 = () => {

useEffect(()=>{
document.title = `Page Not Found / C-thralu`;
});

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
      <div>
      <img src={Error} className='object-cover h-full w-full rounded' alt="" />

      </div>
      <div className='flex justify-center my-4'>
        <Link to="/">
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Back to Home
                </span>
</button>

          </Link>      
      </div>
      
      

      </section>
    </main>
  )
}

export default Page404
