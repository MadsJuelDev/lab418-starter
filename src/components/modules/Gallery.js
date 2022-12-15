import PortableText from 'react-portable-text'
import Image from 'next/image'
import * as React from 'react'
import Lightbox from 'yet-another-react-lightbox'
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import { urlFor } from '@/utils/sanityFetch/sanity'

const Gallery = ({ data }) => {
  const [index, setIndex] = React.useState(-1)
  return (
    <>
      <div className='gallery mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='pb-4'>{data.title}</h2>
        <div className='gallery__grid grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
          {data.gallery.map((item, index) => (
            <div
              className='gallery__item '
              key={index}
            >
              {/* href={urlFor(item.image).url()} */}
              <a
                type='button'
                className='group gallery__item__link cursor-pointer'
                data-lightbox='gallery'
                data-title={item.caption}
                onClick={() => setIndex(index)}
              >
                {/* onclick image open in lightbox*/}
                <Image
                  src={urlFor(item.image)
                    .width(500)
                    .height(500)
                    .fit('crop')
                    .url()}
                  alt={item.alt}
                  width={500}
                  height={500}
                  objectFit='cover'
                  className='duration-700 ease-in-out group-hover:opacity-75 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'
                />
              </a>
              {item.text && (
                <div className='gallery__item__text'>
                  <PortableText content={item.text} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={index > -1}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Thumbnails]}
        slides={data.gallery.map((item, index) => ({
          src: urlFor(item.image).url(),
          alt: item.image.alt,
          caption: item.caption,
        }))}
      />
    </>
  )
}

export default Gallery