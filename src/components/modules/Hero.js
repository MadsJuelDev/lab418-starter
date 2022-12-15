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
    <div className='h-[100vh]'>
      {data.bgtype === 'video' && (
        <>
          {data.videomedia && (
            <div className='relative max-h-full'>
              <video
                className='-z-10 w-[100%] h-auto'
                autoPlay
                muted
                loop
                src={data.videomedia.url}
              >
                <source type='video/.mp4'/>
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </>
      )}
      {data.bgtype === 'photo' && (
        <>
          {data.photo.asset._ref && (
            <Image
              src={urlFor(data.photo).url()}
              fill
              className='-z-10 w-[100%] h-auto'
              alt={data.photo.alt}
            />
          )}
        </>
      )}
      {data.active == true && (
        <h1 className='mb-5 text-4xl font-bold tracking-tight sm:text-6xl'>
          {data.title}
        </h1>
      )}
      <RichTextEditor data={data} />
    </div>
  )
}

export default Hero
