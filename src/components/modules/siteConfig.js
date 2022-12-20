const siteConfig = ({ data }) => {
  console.log(data.settings)
  return (
    <div className={data.customClass}>
      <div className='relative px-6 lg:px-8 mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40'>
        <div>
          <div className='grid grid-cols-2'>
            <div className='mx-auto my-auto'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default siteConfig
