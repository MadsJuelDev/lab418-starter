import { sanityClient } from './sanity'

export async function getHeader() {
  const query = `*[_type == "header"][0]{...,navigation[]->{slug, title}}`
  const data = await sanityClient.fetch(query)
  return data
}

export async function getFooter() {
  const query = `*[_id == "footer"][0]{ ..., components[]{...,items[]{...,defined(pages) => pages->{"slug":slug.current}}}}`
  const data = await sanityClient.fetch(query)
  return data
}
