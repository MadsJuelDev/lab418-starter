const SiteConfig = ({ data }) => {
  return (
    <div className={data.customClass}>
      <ul>
        <li>{data.companyName}</li>
        <li>{data.cvr}</li>
        <li>{data.address}</li>
        <li>{data.postalCode}</li>
        <li>
          <a
            className='emailLink'
            href={`mailto:${data.email}`}
          >
            {data.email}
          </a>
        </li>
        <li>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
        </li>
      </ul>
    </div>
  )
}

export default SiteConfig
