import { getSiteConfig } from '@/utils/sanityFetch/getSiteConfig'
import { useEffect, useState } from 'react'

const CompanyInfo = ({ data }) => {
  const [info, setInfo] = useState(0)

  useEffect(() => {
    getSiteConfig().then((data) => {
      setInfo(data)
    })
  }, [])
  return (
    <div className={data.customClass}>
      <ul>
        {data.companyName === true && <li>{info.companyName}</li>}
        {data.cvr && <li>{info.cvr}</li>}
        {data.address && <li>{info.address}</li>}
        {data.postalCode && <li>{info.postalCode}</li>}
        {data.email && (
          <li>
            <a
              className='emailLink'
              href={`mailto:${info.email}`}
            >
              {info.email}
            </a>
          </li>
        )}
        {data.phone && (
          <li>
            <a href={`tel:${info.phone}`}>{info.phone}</a>
          </li>
        )}
        {data.facebook && (
          <li>
            <a
              href={info.facebook}
              target='_blank'
              rel='noreferrer'
            >
              Facebook
            </a>
          </li>
        )}
        {data.instagram && (
          <li>
            <a
              href={info.instagram}
              target='_blank'
              rel='noreferrer'
            >
              Instagram
            </a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default CompanyInfo
