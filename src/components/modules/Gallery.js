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
  const [swipe] = React.useState(0)

  return (
    <>
      <div className='gallery'>
        <h2 className='galleryTitle'>{data.title}</h2>
        <div className='galleryGrid'>
          {data.gallery.map((item, index) => (
            <div className='galleryItem' key={index}>
              {/* href={urlFor(item.image).url()} */}
              <a
                type='button'
                className='group'
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
                  className='galleryImage'
                />
              </a>
              {item.text && (
                <div className='galleryItemText'>
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
        animation={{ swipe }}
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
