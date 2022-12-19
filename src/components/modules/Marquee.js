import { Marqy } from 'marqy'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/utils/sanityFetch/sanity'

const Marquee = ({ data }) => {
  const { items, speed, reverse, pausable } = data
  if (!items?.length) return null

  return (
    <div className='customMarquee marquee-section'>
      <Marqy
        speed={speed}
        direction={reverse ? 'right' : 'left'}
        pauseOnHover={pausable}
      >
        <div className='customMarqueeContent'>
          {items.map((item, key) => {
            switch (item._type) {
              case 'simple':
                return (
                  <span key={key}>
                    {item.text}
                  </span>
                )
              case 'photo':
                if (item.linkType == 'external') {
                  return (
                    <Link key={key} href={item.url}>
                      <Image
                        className='customMarqueeImage'
                        src={urlFor(item.asset._ref).url()}
                        width='250'
                        height='250'
                        alt={item.alt}
                      />
                    </Link>
                  )
                } else if (item.linkType == 'internal') {
                  return (
                    <Link key={key} href={item.slug}>
                      <Image
                        className='customMarqueeImage'
                        src={urlFor(item.asset._ref).url()}
                        width='250'
                        height='250'
                        alt={item.alt}
                      />
                    </Link>
                  )
                }
            }
          })}
        </div>
      </Marqy>
    </div>
  )
}

export default Marquee
