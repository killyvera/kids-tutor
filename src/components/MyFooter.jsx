import React from 'react'
import SocialMediaIcons from './SocialMediaIcons'

export default function MyFooter() {
 return (
    
<footer style={{backgroundColor: '#de6868'}}>
    <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src="/logoFull.png" className="h-12 mr-3" alt="Flowbite Logo" />
                <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kids Tutor</span>
            </a>
            <ul>
                <SocialMediaIcons />
            </ul>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-100 sm:mb-0">
                <li>
                    <a href="#500" className="mr-4 hover:underline md:mr-6 ">Home</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Productos</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Recursos Gratis</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contacto</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 sm:mx-auto  lg:my-8" />
        <span className="block text-sm  sm:text-center text-gray-100">© 2023 <a href="https://kidstutor.co/" className="hover:underline">Kids Tutor™</a>. All Rights Reserved.</span>
    </div>
</footer>
  )
}

