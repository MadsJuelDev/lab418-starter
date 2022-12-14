export default {
  name: 'seoField',
  title: 'Seo Field',
  type: 'object',
  fields: [
    {
      name: 'seoTitle',
      title: 'Seo title',
      type: 'string',
      validation: (Rule) => Rule.required().min(10).max(60),
    },
    {
      name: 'seoDescription',
      title: 'Seo description',
      type: 'text',
      rows: '4',
      validation: (Rule) => Rule.required().min(10).max(155),
    },
    {
      name: 'seoKeywords',
      title: 'Seo keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'seoImage',
      title: 'Seo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
