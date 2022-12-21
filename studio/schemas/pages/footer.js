export default {
  name: 'footer',
  type: 'object',
  title: 'Footer',
  fields: [
    {
      name: 'components',
      type: 'array',
      title: 'Components',
      of: [
        { type: 'hero' },
        { type: 'grid' },
        { type: 'richTextEditor' },
        { type: 'featuredContent' },
        { type: 'marquee' },
        { type: 'gallery' },
        { type: 'linkList' },
        { type: 'settings' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
    },
    prepare({ title = 'Untitled', slug = {} }) {
      const path = `/${slug.current}`
      return {
        title,
        subtitle: slug.current ? path : '(missing slug)',
      }
    },
  },
}
