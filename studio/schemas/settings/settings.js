/*
Comments
Needs to be added. 
Site settings:
Firmanavn
adresse
cvr
email
mobil

socialemedier fb,insta
*/

export default {
  title: 'Settings',
  name: 'settings',
  type: 'object',
  groups: [
    { title: 'General', name: 'general', default: true },
    { title: 'Styling', name: 'styling' },
    { title: 'Seo', name: 'seo' },
  ],
  fieldsets: [
    {
      title: '',
      name: 'showCompany',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'showCVR',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'showAddress',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'showPostal',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'showEmail',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'showPhone',
      options: { columns: 2 },
    },
    {
      title: '',
      name: 'SoMe',
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      name: 'seoLocale',
      title: 'Seo Locale',
      type: 'string',
      options: {
        list: [
          { title: 'Danish', value: 'da-DK' },
          { title: 'English GB', value: 'en-GB' },
          { title: 'English US', value: 'en-US' },
        ],
      },
    },
    {
      title: 'Company name',
      name: 'companyName',
      type: 'string',
      fieldset: 'showCompany',
    },
    {
      title: 'Show Company name?',
      name: 'activeCompany',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showCompany',
    },
    {
      title: 'CVR',
      name: 'cvr',
      type: 'string',
      fieldset: 'showCVR',
      validation: (Rule) =>
        Rule.min(8)
          .max(8)
          .warning(`A CVR number cannot be more or less than 8 characters.`),
    },
    {
      title: 'Show CVR?',
      name: 'activeCVR',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showCVR',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      fieldset: 'showAddress',
    },
    {
      title: 'Show Address?',
      name: 'activeAdress',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showAddress',
    },
    {
      title: 'Postal Code',
      name: 'postalCode',
      type: 'string',
      fieldset: 'showPostal',
      validation: (Rule) =>
        Rule.min(4)
          .error('Postal codes must have a minimum of 4 characters')
          .max(4)
          .error('Postal codes have a maximum of 4 characters'),
    },
    {
      title: 'Show Postal?',
      name: 'activePostal',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showPostal',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'string',
      fieldset: 'showEmail',
      validation: (Rule) => Rule.email(),
    },
    {
      title: 'Show Email?',
      name: 'activeEmail',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showEmail',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      description: 'International phone number ex. +45 xx xx xx xx',
      fieldset: 'showPhone',
      validation: (Rule) =>
        Rule.custom((phone) => {
          if (typeof phone === 'undefined') {
            return true // Allow undefined values, remove if the field is required
          }
          const regex =
            /^\+\d{1,3}[\s-]?\d{1,3}[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/ // Regex pattern goes here
          if (regex.test(phone)) {
            return true
          } else {
            return 'Not a valid international phone number' // Error message goes here
          }
        }),
    },
    {
      title: 'Show phone number?',
      name: 'activePhone',
      type: 'boolean',
      initialValue: true,
      fieldset: 'showPhone',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'string',
      fieldset: 'SoMe',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'string',
      fieldset: 'SoMe',
    },
  ],
}
