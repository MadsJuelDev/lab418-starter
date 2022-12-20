const SiteSettings = ({ data }) => {
  return (
    <div className={data.customClass}>
      <div className='relative'>
        <div>
          <div className='grid'>
            <div className='mx-auto my-auto'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteSettings
