import { sanityClient } from './sanity'

export async function getSiteConfig() {
  console.log("SITE INFO: ")

  const query = `*[_type == "siteConfig"][0]`
  const data = await sanityClient.fetch(query)
  return data
}
