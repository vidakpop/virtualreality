import React from 'react'
import { resourcesLinks,platformLinks,communityLinks } from '../constants'

const Footer = () => {
  return (
    <footer className='mt-20 bordwer-t py-10 border-neutral-700 '>
        <div className='grid gtrid-cols-2 lg:grid-cols-3 gap-4'>
            <div>
                <h3 className='text-md font-semibold mb-4'>Resources</h3>
                <ul className='space-y-2'>
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                          <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>  
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>Platform</h3>
                <ul className='space-y-2'>
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                          <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>  
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='text-md font-semibold mb-4'>Community</h3>
                <ul className='space-y-2'>
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                          <a className='text-neutral-300 hover:text-white' href={link.href}>{link.text}</a>  
                        </li>
                    ))}
                </ul>
            </div>
            
        </div>
        <div className='bg-gray-900 py-4 mt-8'>
    <div className='container mx-auto flex justify-between items-center'>
        <span className='text-neutral-400'>&copy; 2024 CyberJiutsu</span>
        <nav>
            <ul className='flex space-x-4'>
                <li>
                    <a className='text-neutral-300 hover:text-white' href='https://github.com/vidakpop'>Meet the Developer</a>
                </li>
            </ul>
        </nav>
    </div>
</div>
    </footer>
  )
}

export default Footer