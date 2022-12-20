export default {
  name: 'linkList',
  title: 'Link List',
  type: 'object',
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
    },
    {
      name: 'items',
      title: 'Links',
      type: 'array',
      of: [
        {
          name: 'link',
          title: 'Link',
          type: 'object',
          fields: [
            {
              name: 'linkName',
              title: 'Link Name',
              type: 'string',
            },
            {
              title: 'Link Type',
              name: 'linkType',
              type: 'string',
              options: {
                isHighlighted: true, // <-- make this field easily accessible

                list: [
                  { title: 'Internal Page', value: 'internal' },
                  { title: 'External URL', value: 'external' },
                ],
              },
              initialValue: 'internal',
              validation: (Rule) => Rule.required(),
            },
            {
              title: 'Internal Page',
              name: 'pages',
              type: 'reference',
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
              to: [
                { type: 'pages' },
                // { type: "product" },
              ],
              hidden: ({ parent }) => parent.linkType !== 'internal',
            },
            {
              title: 'External URL',
              name: 'url',
              type: 'url',
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel'],
                }),
              hidden: ({ parent }) => parent.linkType !== 'external',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      items: "items",
      title: "title"
    },
    prepare({ items, title }) {
      return {
        title: "Link list: " + title,
        subtitle: items.length + " links",
      };
    },
  },
}
