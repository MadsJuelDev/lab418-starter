import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'
import RichTextEditor from './RichTextEditor'

const FeaturedContent = ({ data }) => {
  return (
    <div className={data.cutsomclass}>
      {/* image left */}
      {data.alternate == false && (
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl py-40 sm:py-20'>
            <div className='grid grid-cols-2'>
              {data.bgtype === 'photo' && (
                <>
                  {data.photo.asset._ref && (
                    <Image
                      src={urlFor(data.photo).width(500).height(500).url()}
                      width='500'
                      height='500'
                      className='hero--bg -z-10'
                      alt={data.photo.alt}
                    />
                  )}
                </>
              )}
              <div className='mx-auto my-auto'>
                {data.active > 0 && (
                  <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
                    {data.title}
                  </h1>
                )}
                <RichTextEditor data={data} />
              </div>
            </div>
          </div>
        </div>
      )}
      {/* image right */}
      {data.alternate == true && (
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-3xl py-40 sm:py-20'>
            <div className='grid grid-cols-2'>
              <div className='mx-auto my-auto'>
                {data.active > 0 && (
                  <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
                    {data.title}
                  </h1>
                )}
                <RichTextEditor data={data} />
              </div>
              <div>
                {data.bgtype === 'photo' && (
                  <>
                    {data.photo.asset._ref && (
                      <Image
                        src={urlFor(data.photo).url()}
                        width='500'
                        height='500'
                        className='hero--bg -z-10'
                        alt={data.photo.alt}
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FeaturedContent
