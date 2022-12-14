export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
            },
            {
              name: 'text',
              type: 'blockContent',
              title: 'Text',
            },
          ],
        },
      ],
    },
  ],
}
//
