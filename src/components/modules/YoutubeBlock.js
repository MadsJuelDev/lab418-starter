import getYouTubeId from 'get-youtube-id'

const YoutubeBlock = ({ data }) => {
  console.log(data)

  const id = getYouTubeId(data.url)
  const yturl = `https://www.youtube-nocookie.com/embed/${id}`

  return (
    <div>
      {/* The pt-[****] sets the height, use it for aspect ratio, or find a better solution. */}
      <div className='relative pt-[56.25%] m-x-auto overflow-hidden w-[100%]'>
        <iframe
          className='absolute top-0 bottom-0 left-0 right-0 w-[100%] h-[100%]'
          title='Youtube Preview'
          src={yturl}
        />
      </div>
    </div>
  )
}

export default YoutubeBlock
