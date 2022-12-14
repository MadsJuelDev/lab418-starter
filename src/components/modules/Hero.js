import PortableText from 'react-portable-text'
import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'
import getYouTubeId from 'get-youtube-id'
import Link from 'next/link'
import RichTextEditor from './RichTextEditor'

const Hero = ({ data }) => {
  console.log(data)

  // const id = getYouTubeId(data.bgtype == 'video' && data.youtube.url)
  // const yturl = `https://www.youtube.com/embed/${id}`
  // console.log(yturl)

  return (
    <div>
      {data.bgtype === 'video' && (
        <>
          {data.videomedia && (
            <div className='relative max-h-full'>
              <video
                className='w-[100%] max-h-fit'
                controls
                src={data.videomedia.url}
              >
                <source type='video/.mp4' />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <RichTextEditor data={data} />
        </>
      )}

      <div className='relative px-6 lg:px-8'>
        <div className='mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
          <div>
            {data.bgtype === 'photo' && (
              <>
                {data.photo.asset._ref && (
                  <Image
                    src={urlFor(data.photo).url()}
                    fill
                    className='hero--bg -z-10'
                    alt={data.photo.alt}
                  />
                )}
                <RichTextEditor data={data} />
                {data.active == true && (
                  <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
                    {data.title}
                  </h1>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
