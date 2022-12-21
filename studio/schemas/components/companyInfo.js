export default {
  title: 'Company Info',
  name: 'companyInfo',
  type: 'object',
  fieldsets: [
    {
      title: '',
      name: 'contact',
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
      title: 'Company name',
      name: 'companyName',
      type: 'boolean',
      fieldset: 'contact',
    },
    {
      title: 'CVR',
      name: 'cvr',
      type: 'boolean',
      fieldset: 'contact',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'boolean',
      fieldset: 'contact',
    },
    {
      title: 'Postal Code',
      name: 'postalCode',
      type: 'boolean',
      fieldset: 'contact',
    },
    {
      title: 'Email',
      name: 'email',
      type: 'boolean',
      fieldset: 'contact',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'boolean',
      description: 'International phone number ex. +45 xx xx xx xx',
      fieldset: 'contact',
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'boolean',
      fieldset: 'SoMe',
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'boolean',
      fieldset: 'SoMe',
    },
  ],
}
