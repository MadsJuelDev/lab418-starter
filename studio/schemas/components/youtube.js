// youtube.js
import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const Preview = ({ value }) => {
  const id = getYouTubeId(value.url)
  const url = `https://www.youtube-nocookie.com/embed/${id}`

  if (!id) {
    return <p>Missing Youtube URL</p>
  }
  // return <YouTube videoId={url} />
  return (
    <iframe
      title='Youtube Preview'
      width='360'
      height='200'
      src={url}
      frameBorder='0'
    />
  )
}

export default {
  title: 'YouTube Embed',
  name: 'youtube',
  type: 'object',
  fields: [
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
    },
    {
      title: 'YouTube video URL',
      description: 'https://youtu.be/jjyDfLPKmNk',
      name: 'url',
      type: 'url',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: Preview,
  },
}
