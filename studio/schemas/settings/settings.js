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
  name: 'settings',
  title: 'Settings',
  type: 'object',
  groups: [
    { title: 'General', name: 'general', default: true },
    { title: 'Styling', name: 'styling' },
    { title: 'Seo', name: 'seo' },
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
  ],
}
