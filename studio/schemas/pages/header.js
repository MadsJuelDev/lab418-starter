export default {
  name: 'header',
  title: 'Header',
  type: 'object',
  fields: [
    {
      name: 'navigation',
      title: 'Navigation',
      type: 'array',
      of: [
        {
          type: 'reference',
          title: 'Pages',
          name: 'pages',
          to: { type: 'pages' },
        },
      ],
    },
  ],
}
