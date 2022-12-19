import Link from 'next/link'

const LinkList = ({ data }) => {
  return (
    <div>
      <ul className='flex font-medium'>
        {data.navigation
          ? data.navigation.map((navItem, index) => (
              <li
                key={index}
                className='hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800'
              >
                <Link href='/'>{navItem.title}</Link>
              </li>
            ))
          : console.log('Error loading list')}
      </ul>
    </div>
  )
}

export default LinkList
