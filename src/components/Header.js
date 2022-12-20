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
    <header className='customHeader'>
      <nav>
        <div className='customHeaderDesktop'>
          <Link href='/'>
            <Image
              src='/logo-tea.png'
              alt='Lab-418 Logo'
              width={50}
              height={100}
            />
          </Link>
          <div className='customHeaderDesktopMenu'>
            <ul>
              {header.navigation
                ? header.navigation.map((navItem, index) => (
                    <li
                      key={index}
                    >
                      <Link href={navItem.slug.current}>{navItem.menuTitle}</Link>
                    </li>
                  ))
                : console.log('Error loading nav')}
            </ul>
          </div>
        </div>
        {/*---------------------Popover for mobile menu---------------*/}
        <Popover className='customHeaderMobile'>
          <div className='customHeaderMobileWrapper'>
            <Link href='/'>
              <Image
                src='/logo-tea.png'
                alt='Lab-418 Logo'
                width={50}
                height={50}
              />
            </Link>
            <Popover.Button>
              <svg
                className='customHeaderMobileMenuIcon'
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
          <Popover.Panel className='customHeaderMobileMenu'>
            <ul>
              {header.navigation
                ? header.navigation.map((navItem, index) => (
                    <li key={index}>
                      <Link href={navItem.slug.current}>{navItem.menuTitle}</Link>
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
