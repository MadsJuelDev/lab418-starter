import settings from '../settings/settings'
import axios from 'axios'

export default {
  title: 'Site settings',
  name: 'siteConfig',
  type: 'object',
  fields: [
    {
      title: 'Custom Site Settings',
      name: 'settings',
      type: 'settings',
      initialValue: async () => {
        const response = await axios.get(
          'guc44bdp.api.sanity.io/v2022-11-17/data/query/production?query=*[_type == "settings"]'
        )
        return { companyName: settings.companyName.value }
      },
    },
  ],
  // fieldsets: [
  //   {
  //     title: '',
  //     name: 'contact',
  //     options: { columns: 2 },
  //   },
  //   {
  //     title: '',
  //     name: 'SoMe',
  //     options: { columns: 2 },
  //   },
  // ],
  // fields: [
  //   {
  //     title: 'Company name',
  //     name: 'companyName',
  //     type: 'string',
  //     fieldset: 'contact',
  //   },
  //   {
  //     title: 'CVR',
  //     name: 'cvr',
  //     type: 'string',
  //     fieldset: 'contact',
  //     validation: (Rule) =>
  //       Rule.min(8)
  //         .max(8)
  //         .warning(`A CVR number cannot be more or less than 8 characters.`),
  //   },
  //   {
  //     title: 'Address',
  //     name: 'address',
  //     type: 'string',
  //     fieldset: 'contact',
  //   },
  //   {
  //     title: 'Postal Code',
  //     name: 'postalCode',
  //     type: 'string',
  //     fieldset: 'contact',
  //     validation: (Rule) =>
  //       Rule.min(4)
  //         .error('Postal codes must have a minimum of 4 characters')
  //         .max(4)
  //         .error('Postal codes have a maximum of 4 characters'),
  //   },
  //   {
  //     title: 'Email',
  //     name: 'email',
  //     type: 'string',
  //     fieldset: 'contact',
  //     validation: (Rule) => Rule.email(),
  //   },
  //   {
  //     title: 'Phone',
  //     name: 'phone',
  //     type: 'string',
  //     description: 'International phone number ex. +45 xx xx xx xx',
  //     fieldset: 'contact',
  //     validation: (Rule) =>
  //       Rule.custom((phone) => {
  //         if (typeof phone === 'undefined') {
  //           return true // Allow undefined values, remove if the field is required
  //         }
  //         const regex =
  //           /^\+\d{1,3}[\s-]?\d{1,3}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/ // Regex pattern goes here
  //         if (regex.test(phone)) {
  //           return true
  //         } else {
  //           return 'Not a valid international phone number' // Error message goes here
  //         }
  //       }),
  //   },
  //   {
  //     title: 'Instagram',
  //     name: 'instagram',
  //     type: 'string',
  //     fieldset: 'SoMe',
  //   },
  //   {
  //     title: 'Facebook',
  //     name: 'facebook',
  //     type: 'string',
  //     fieldset: 'SoMe',
  //   },
  // ],
}
