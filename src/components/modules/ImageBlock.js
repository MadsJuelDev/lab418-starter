import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'

const ImageBlock = ({ data }) => {
  console.log(data)

  return (
    <div>
      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
          <div>
            <div className='grid grid-cols-1'>
              <div className='mx-auto my-auto'>
                {data.active > 0 && (
                  <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
                    {data.title}
                  </h1>
                )}
              </div>
              <>
                {data.poster.asset._ref && (
                  <Image
                    src={urlFor(data.poster).url()}
                    fill
                    sizes='100vw'
                    className='hero--bg -z-10'
                    alt={data.poster.alt}
                  />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageBlock
