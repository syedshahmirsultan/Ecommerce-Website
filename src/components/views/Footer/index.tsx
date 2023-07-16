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
      <p className="text-gray-500 text-sm text-center sm:text-left">© 2023 Syed Shahmir Sultan 
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
          </svg></Link>

        <Link href="https://github.com/syedshahmirsultan" className="w-5 h-5 ml-3 text-gray-500">
        <svg className="github-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.43 9.8 8.2 11.37.6.11.82-.26.82-.58v-2.03c-3.34.73-4.03-1.61-4.03-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.5 1 .1-.8.42-1.31.77-1.61-2.69-.3-5.52-1.34-5.52-5.97 0-1.32.47-2.4 1.23-3.24-.14-.3-.53-1.54.1-3.22 0 0 1.02-.33 3.34 1.25.97-.26 2-.39 3.02-.4 1.02.01 2.05.14 3.02.4 2.32-1.57 3.34-1.25 3.34-1.25.63 1.68.24 2.92.12 3.22.77.84 1.22 1.91 1.22 3.24 0 4.64-2.83 5.67-5.53 5.96.43.37.82 1.11.82 2.24v3.32c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                 </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer