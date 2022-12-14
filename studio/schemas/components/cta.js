export default {
  title: 'Call to Action',
  name: 'cta',
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
      group: 'settings',
    },
    {
      title: 'Show title?',
      name: 'active',
      type: 'boolean',
      initialValue: true,

      fieldset: 'options',
      group: 'settings',
    },
    {
      title: 'Text Area',
      name: 'textarea',
      type: 'text',
      rows: 4,
    },
    {
      title: 'Buttons',
      name: 'buttons',
      type: 'buttonLinks',
    },
  ],

  preview: {
    select: {
      content: 'content.0.children',
    },
    prepare({ content }) {
      return {
        title: 'CTA Block',
        subtitle: content && content[0]?.text,
      }
    },
  },
}
