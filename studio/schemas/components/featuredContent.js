/* eslint-disable import/no-anonymous-default-export */
export default {
  title: 'Featured content',
  name: 'featuredContent',
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
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
    {
      // setting - should be in a tab
      title: 'Align content left or right',
      name: 'alternate',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
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
        layout: 'checkbox',
        direction: 'horizontal',
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
      hidden: ({ parent }) => {
        return parent.bgtype !== 'photo'
      },
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
  ],
  preview: {
    select: {
      photo: 'photo',
      content: 'content.0.children',
      title: 'title',
    },
    prepare({ photo, content, title }) {
      return {
        title: 'Featured: ' + title,
        subtitle: content && content[0]?.text,
        media: photo,
      }
    },
  },
}
