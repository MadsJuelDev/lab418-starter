import { getCompanyInfo } from '@/utils/sanityFetch/getCompanyInfo'
import { useState } from 'react'
import { useEffect } from 'react'

const CompanyInfo = ({ data }) => {
  const [info, setInfo] = useState()

  useEffect(() => {
    getCompanyInfo().then((data) => {
      setInfo(data)
    })
  }, [])

  return (
    <div className={data.customClass}>
      <ul>
        {data.companyName === true && <li>{info.companyName}</li>}
        {data.cvr && <li>{info.cvr}</li>}
        {data.address && <li>{info.address}</li>}
        {data.postal && <li>{info.postalCode}</li>}
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
        {data.facebook && <li>{info.facebook}</li>}
        {data.instagram && <li>{info.instagram}</li>}
      </ul>
    </div>
  )
}

export default CompanyInfo
