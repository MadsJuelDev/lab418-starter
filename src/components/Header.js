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
      <nav className=' bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 '>
        <div className='hidden flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:flex'>
          <Link
            href='/'
            className='flex items-center'
          >
            <Image
              src='/logo-tea.png'
              className='mr-3 h-6 sm:h-9'
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
                      className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
                    >
                      <Link href={navItem.slug.current}>{navItem.title}</Link>
                    </li>
                  ))
                : console.log('Error loading nav')}
            </ul>
          </div>
        </div>
        {/*---------------------Popover for mobile menu---------------*/}
        <Popover className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl lg:hidden'>
          <Link
            href='/'
            className='flex items-center'
          >
            <Image
              src='/logo-tea.png'
              className='mr-3 h-6 sm:h-9'
              alt='Lab-418 Logo'
              width={50}
              height={100}
            />
          </Link>
          <Popover.Button>
            <svg
              className='w-6 h-6'
              fill='currentColor'
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
          <Popover.Panel className='w-screen items-center justify-between h-fit flex'>
            <ul className='flex flex-col mt-4 font-medium'>
              {header.navigation
                ? header.navigation.map((navItem, index) => (
                    <li
                      key={index}
                      className='text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
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
