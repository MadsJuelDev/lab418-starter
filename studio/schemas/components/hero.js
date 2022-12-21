// import React from 'react'
// import getYouTubeId from 'get-youtube-id'
// import YouTube from 'react-youtube'

// const Preview = ({ value }) => {
//   const id = getYouTubeId(value.url)
//   const url = `https://www.youtube.com/embed/${id}`

//   // if (!id) {
//   //   return <p>Missing Youtube URL</p>
//   // }
//   // return <YouTube videoId={url} />
//   return (
//     <iframe
//       title='Youtube Preview'
//       width='150'
//       height='150'
//       src={url}
//       frameBorder='0'
//     />
//   )
// }

export default {
  name: 'hero',
  title: 'Hero',
  type: 'object',
  groups: [
    {
      name: 'media',
      title: 'Media',
    },
    {
      name: 'settings',
      title: 'Settings',
    },
  ],
  fieldsets: [
    {
      title: '',
      name: 'options',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      fieldset: 'options',
      group: 'settings',
    },
    {
      title: 'Show title?',
      name: 'active',
      type: 'boolean',
      initialValue: true,

      fieldset: 'options',
      group: 'settings',
    },
    {
      title: 'Custom Class',
      name: 'customClass',
      type: 'string',
      group: 'settings',
      description:
        '*For developers* Add a custom class that can be targeted through CSS ',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
    {
      title: 'Background type',
      name: 'bgtype',
      type: 'string',
      group: 'media',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Video', value: 'video' },
        ],
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
      group: 'media',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      hidden: ({ parent }) => {
        return parent.bgtype !== 'photo'
      },
      fields: [
        {
          title: 'Alternative text',
          name: 'alt',
          type: 'string',
          description: 'Important for SEO and accessiblity.',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      title: 'Video Title',
      name: 'videomedia',
      type: 'file',
      description: 'upload a video file (.mp4)',
      options: {
        accept: 'video/*',
      },
      hidden: ({ parent }) => {
        return parent.bgtype !== 'video'
      },
    },
    // {
    //   title: 'YouTube Embed',
    //   name: 'youtube',
    //   type: 'object',
    //   group: 'media',
    //   fields: [
    //     {
    //       name: 'url',
    //       type: 'url',
    //       title: 'YouTube video URL',
    //       description: 'https://youtu.be/jjyDfLPKmNk',
    //     },
    //   ],
    //   hidden: ({ parent }) => {
    //     return parent.bgtype !== 'video'
    //   },
    // },
  ],

  preview: {
    select: {
      photo: 'photo',
      content: 'content.0.children',
      url: 'url',
      title: 'title',
    },
    prepare({ photo, content, title }) {
      return {
        title: 'Hero: ' + title,
        subtitle: content && content[0]?.text,
        media: photo,
      }
    },
  },
}
