import { getFooter } from '@/utils/sanityFetch/navigation'
import Image from 'next/image'
import React from 'react'
import { useEffect,useState } from 'react'
import { Module } from './modules'

const Footer = () => {
  const [footer, setFooter] = useState(0)
  useEffect(() => {
    getFooter().then((data) => {
      setFooter(data)
    })
  }, [])
  return (
    <div className='border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 text-white'>
    {footer?.components?.map((component, index) => (
      <Module
        key={index}
        index={index}
        data={component}
      />
    ))}
    </div>
    
  )
}

export default Footer
