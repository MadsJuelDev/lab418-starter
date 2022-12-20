export default {
  title: 'Image Block',
  name: 'imageBlock',
  type: 'object',
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
    },
    {
      title: 'Show title?',
      name: 'active',
      type: 'boolean',
      fieldset: 'options',
      initialValue: true,
    },
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
    },
    {
      title: 'Poster',
      name: 'poster',
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
      poster: 'poster',
    },
    prepare({ title, poster }) {
      return {
        title: "Image: "+title,
        media: poster,
      }
    },
  },
}
