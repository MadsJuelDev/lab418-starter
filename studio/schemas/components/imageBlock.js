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
      content: 'content.0.children',
      url: 'url',
    },
    prepare({ title, poster, content }) {
      return {
        title: title,
        subtitle: content && content[0]?.text,
        media: poster,
      }
    },
  },
}
