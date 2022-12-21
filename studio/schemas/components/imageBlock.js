export default {
  title: 'Image Block',
  name: 'imageBlock',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Custom Class',
      name: 'customClass',
      type: 'string',
      description:
        '*For developers* Add a custom class that can be targeted through CSS ',
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'image',
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
    },
  ],
  preview: {
    select: {
      title: 'title',
      photo: 'photo',
    },
    prepare({ title, photo }) {
      return {
        title: 'Image: ' + title,
        media: photo,
      }
    },
  },
}
