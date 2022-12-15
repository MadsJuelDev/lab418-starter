import { getHeader } from '@/utils/sanityFetch/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'

function Header() {
  const [header, setHeader] = useState(0)
  useEffect(() => {
    getHeader().then((data) => {
      setHeader(data)
    })
  }, [])
  return (
    <header>
      <nav className='border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800 '>
        <div className='hidden flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:flex'>
          <Link href='/'>
            <Image
              src='/logo-tea.png'
              className='mr-3 h-9'
              alt='Lab-418 Logo'
              width={50}
              height={100}
            />
          </Link>
          <div className='items-center justify-between flex'>
            <ul className='flex font-medium'>
              {header.navigation
                ? header.navigation.map((navItem, index) => (
                    <li
                      key={index}
                      className=' text-white focus:ring-4 font-medium rounded-lg px-5 py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800'
                    >
                      <Link href={navItem.slug.current}>{navItem.title}</Link>
                    </li>
                  ))
                : console.log('Error loading nav')}
            </ul>
          </div>
        </div>
        {/*---------------------Popover for mobile menu---------------*/}
        <Popover className='flex flex-col lg:hidden'>
          <div className='flex justify-between w-[100%] items-center mx-auto '>
            <Link
              href='/'
              className='flex items-center'
            >
              <Image
                src='/logo-tea.png'
                className='mr-3 w-auto h-9'
                alt='Lab-418 Logo'
                width={50}
                height={50}
              />
            </Link>
            <Popover.Button>
              <svg
                className='w-9 h-9'
                fill='#ff867a'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </Popover.Button>
          </div>
          <Popover.Panel className='w-[100%] items-center h-fit flex flex-row-reverse'>
            <ul className='flex flex-col mt-4 font-medium'>
              {header.navigation
                ? header.navigation.map((navItem, index) => (
                    <li
                      key={index}
                      className='text-white text-right focus:ring-4 font-medium rounded-lg px-4 py-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800'
                    >
                      <Link href={navItem.slug.current}>{navItem.title}</Link>
                    </li>
                  ))
                : console.log('Error loading nav')}
            </ul>
          </Popover.Panel>
        </Popover>
      </nav>
    </header>
  )
}

export default Header
