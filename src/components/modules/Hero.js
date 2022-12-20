import PortableText from 'react-portable-text'
import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'
import getYouTubeId from 'get-youtube-id'
import Link from 'next/link'
import RichTextEditor from './RichTextEditor'

const Hero = ({ data }) => {
  return (
    <div className={`hero ${data.customClass}`}>
      {data.bgtype === 'video' && (
        <>
          {data.videomedia && (
            <div className='relative max-h-full'>
              <video
                className='heroVideo'
                autoPlay
                muted
                loop
                src={data.videomedia.url}
              >
                <source type='video/.mp4' />
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
              className='heroImage'
              alt={data.photo.alt}
            />
          )}
        </>
      )}
      <div className="heroContentWrapper">
        {data.active == true && <h1 className='heroTitle'>{data.title}</h1>}
        <RichTextEditor data={data} />
      </div>
    </div>
  )
}

export default Hero
