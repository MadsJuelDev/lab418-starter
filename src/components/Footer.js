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
    <div className='customFooter'>
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
