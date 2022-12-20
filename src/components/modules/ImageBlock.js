import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'

const ImageBlock = ({ data }) => {
  return (
    <div className={`imageBlock ${data.customClass}`}>
      {data.poster.asset._ref && (
        <Image
          src={urlFor(data.poster).url()}
          fill
          className='object-cover'
          alt={data.poster.alt}
        />
      )}
    </div>
  )
}

export default ImageBlock
