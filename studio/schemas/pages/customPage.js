export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  groups: [
    { title: 'Content', name: 'content' },
    { title: 'Settings', name: 'settings' },
    { title: 'Seo Settings', name: 'seoSettings' },
  ],
  
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
      group: 'settings',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      group: 'settings',
      options: {
        source: 'title',
      },
      hidden: ({document}) => document?.slug?.current == "frontPage"
    },
    {
      name: 'menuTitle',
      type: 'string',
      title: 'Menu title',
      group: 'settings',
    },
    {
      name: 'components',
      type: 'array',
      title: 'Components',
      of: [
        { type: 'hero' },
        { type: 'grid' },
        { type: 'richTextEditor' },
        { type: 'featuredContent' },
        { type: 'imageBlock' },
        { type: 'marquee' },
        { type: 'gallery' },
        { type: 'youtube' },
        { type: 'linkList' },
        { type: 'siteConfig' },
        { type: 'settings' },
        // {
        //   title: 'Reusable Section',
        //   type: 'reference',
        //   to: [{ type: 'section' }],
        // },
      ],
      group: 'content',
    },
    {
      name: 'seoField',
      type: 'seoField',
      group: 'seoSettings',
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
