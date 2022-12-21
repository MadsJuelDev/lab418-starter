import { sanityClient } from './sanity'

export async function getCompanyInfo() {
  const query = `*[_type == "siteConfig"]`
  const data = await sanityClient.fetch(query)
  return data
}
