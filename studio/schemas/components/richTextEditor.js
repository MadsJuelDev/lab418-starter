export default {
  name: 'richtexteditor',
  title: 'Rich Text Editor',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name:'title',
      type:'string'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'title',
      content: 'content.0.children'
    },
    prepare({ title, content }) {
      return {
        title: 'Text: ' + title,
        subtitle: content && content[0]?.text
      }
    },
  },
}
