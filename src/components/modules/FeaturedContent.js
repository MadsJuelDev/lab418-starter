import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'
import RichTextEditor from './RichTextEditor'

const FeaturedContent = ({ data }) => {
  return (
    <div className={`customFeatured ${data.cutsomclass}`}>
      <div className='customFeaturedWrapper'>
        <div className='customFeaturedGrid'>
          {data.bgtype === 'photo' && (
            <div className='customFeaturedPhoto'>
              {data.photo.asset._ref && (
                <Image
                  src={urlFor(data.photo).width(500).height(500).url()}
                  width='500'
                  height='500'
                  className='-z-10 object-contain'
                  alt={data.photo.alt}
                />
              )}
            </div>
          )}
          {data.bgtype === 'video' && (
            <div className='customFeaturedVideowrapper'>
              {data.videomedia.asset._ref && (
                <video
                  className='customFeaturedVideo'
                  height={500}
                  width={500}
                  autoPlay
                  muted
                  loop
                  src={data.videomedia.url}
                >
                  <source type='video/.mp4' />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
          <div
            className={`customFeaturedContent ${
              data.alternate === true ? 'sm:order-last' : 'sm:order-first'
            }`}
          >
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
  )
}

export default FeaturedContent
