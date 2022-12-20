import { getTypeTitles } from '../../lib/helpers'

export default {
  title: 'Content Grid',
  name: 'grid',
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
      title: 'Custom Class',
      name: 'customClass',
      type: 'string',
      group: 'settings',
      description:
        '*For developers* Add a custom class that can be targeted through CSS ',
    },
    {
      title: 'Grid Size',
      name: 'size',
      type: 'number',
      group: 'content',
      description:
        'Set the default number of column spaces available for this grid',
      options: {
        list: [
          { title: '1', value: 1 },
          { title: '2', value: 2 },
          { title: '3', value: 3 },
          { title: '4', value: 4 },
          { title: '5', value: 5 },
          { title: '6', value: 6 },
          { title: '7', value: 7 },
          { title: '8', value: 8 },
          { title: '9', value: 9 },
          { title: '10', value: 10 },
          { title: '11', value: 11 },
          { title: '12', value: 12 },
        ],
      },
      validation: (Rule) => Rule.required(),
      initialValue: 12,
    },
    {
      title: 'Columns',
      name: 'columns',
      type: 'array',
      of: [{ type: 'gridColumn' }],
      description: 'The columns that are part of this grid',
    },
  ],
  preview: {
    select: {
      columns: 'columns',
    },
    prepare({ columns }) {
      return {
        title: `Grid: ${columns.length} Column${columns.length > 1 ? 's' : ''}`,
      }
    },
  },
}
