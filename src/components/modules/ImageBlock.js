import Image from 'next/image'
import { urlFor } from '@/utils/sanityFetch/sanity'

const ImageBlock = ({ data }) => {
  return (
    <div className={`imageBlock ${data.customClass}`}>
      {data.photo.asset._ref && (
        <Image
          src={urlFor(data.photo).url()}
          fill
          alt={data.photo.alt}
        />
      )}
    </div>
  )
}

export default ImageBlock
