const SiteSettings = ({ data }) => {
  return (
    <div className={data.customClass}>
      <ul>
        {data.activeCompany && <li>{data.companyName}</li>}
        {data.activeCVR && <li>{data.cvr}</li>}
        {data.activeAddress && <li>{data.address}</li>}
        {data.activePostal && <li>{data.postalCode}</li>}
        {data.activeEmail && (
          <li>
            <a
              className='emailLink'
              href={`mailto:${data.email}`}
            >
              {data.email}
            </a>
          </li>
        )}
        {data.activePhone && (
          <li>
            <a href={`tel:${data.phone}`}>{data.phone}</a>
          </li>
        )}
      </ul>
    </div>
  )
}

export default SiteSettings
