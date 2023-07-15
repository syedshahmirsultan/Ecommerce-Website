import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
   <footer className="text-gray-500 body-font">
  <div className="container px-5 py-24 mx-auto flex md:items-start text-start lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="flex-1 justify-between space-y-6 w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-start text-gray-900">
<Image src='/images/Logo.webp' alt="Logo" width={150} height={150}/>
      </Link>
      <p className="mt-2">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-start">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font tracking-widest mb-3 text-xl font-semibold">Company</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">About</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Terms of Use</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">How it Works</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Contact Us</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font tracking-widest mb-3 text-xl font-semibold">Support</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Support Carrer</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">24h Service</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Quick Chat</a>
          </li>
          
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font tracking-widest text-xl mb-3 font-semibold">Contact</h2>
        <nav className="list-none mb-10 space-y-4">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Whatsapp</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Support 24h </a>
          </li> 
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-gray-100">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2020 Syed Shahmir Sultan 
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link href="https://twitter.com/SyedShahmi66816" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
      
        <Link href="https://www.linkedin.com/in/syed-shahmir-sultan-578730252/" className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer