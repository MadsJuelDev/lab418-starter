export default {
  title: 'Buttons Block',
  name: 'buttonLinks',
  type: 'array',
  of: [
    {
      title: 'Internal link',
      name: 'internalLink',
      type: 'object',
      fields: [
        {
          title: 'Button',
          name: 'name',
          type: 'string',
          description: 'set the buttons name',
        },
        {
          title: 'Internal Page',
          name: 'intLink',
          type: 'reference',
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
          to: [{ type: 'pages' }],
        },
      ],
    },
    {
      title: 'External link',
      name: 'link',
      type: 'object',
      fields: [
        {
          title: 'Button',
          name: 'extname',
          type: 'string',
          description: 'set the buttons name',
        },
        {
          title: 'URL',
          name: 'href',
          type: 'url',
          validation: (Rule) =>
            Rule.uri({
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content.0.children',
    },
    prepare({ title, photo, content }) {
      return {
        title: title,
        subtitle: content && content[0]?.text,
        media: photo,
      }
    },
  },
}
