import getYouTubeId from 'get-youtube-id'

const YoutubeBlock = ({ data }) => {

  const id = getYouTubeId(data.url)
  const yturl = `https://www.youtube-nocookie.com/embed/${id}`

  return (
    <div className={`youtubeBlock ${data.customClass}`}>
      <div className='youtubeBlockWrapper'>
        <iframe title='Youtube Preview' src={yturl} />
      </div>
    </div>
  )
}

export default YoutubeBlock
