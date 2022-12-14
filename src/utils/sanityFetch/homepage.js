import { sanityClient } from './sanity'

const getHomepage = async () => {
  const query = `*[_id=="frontPage"][0]
  { ..., components[]
  {...,videomedia
   {...,defined(asset) => asset ->},items[]
  {...,defined(pages) => pages->
  {"slug":slug.current}},content[]{...,markDefs[]{...,defined(intLink) => intLink->
  {"slug":slug.current}
      }}}}

  `
  const data = await sanityClient.fetch(query)
  return data
}

export default getHomepage
// *[_id == 'frontPage'][0]{ ..., components[]{...,videomedia{...,defined(asset) => asset->{"assetUrl": videomedia.asset->url}}}}
