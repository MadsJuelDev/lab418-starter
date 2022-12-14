import Link from 'next/link'

const CTA = ({ data }) => {
  return (
    <div>
      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
          <div>
            <div className='grid grid-cols-2'>
              <div className='mx-auto my-auto'>
                {data.active > 0 && (
                  <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
                    {data.title}
                  </h1>
                )}
                <p>{data.textarea}</p>

                <div className='flex'>
                  {data.buttons.map((button, key) => {
                    switch (button._type) {
                      case 'internalLink':
                         if (button.intLink) {
                          return (
                            <Link
                              key={key}
                              href={button.intLink.slug}
                              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            >
                             {button.name}
                            </Link>
                          )
                        }
                      case 'link':
                         if (button.href) {
                          return (
                            <Link
                              key={key}
                              href={button.href}
                              target='_blank'
                              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            >
                             {button.extname}
                            </Link>
                          )
                        }
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
