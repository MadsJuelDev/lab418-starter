export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'object',
  groups: [
    {
      title: 'content',
      name: 'content',
    },
    {
      title: 'Settings',
      name: 'settings',
    },
  ],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      group: "settings"
    },
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
      group: "settings"
    },
    {
      name: 'gallery',
      type: 'array',
      title: 'Gallery',
      group: "content",
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
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
      gallery: "gallery"
    },
    prepare({ title, gallery }) {
      return {
        title: "Gallery: "+title,
        subtitle: gallery.length + " images in gallery",
      };
    },
  },
}

