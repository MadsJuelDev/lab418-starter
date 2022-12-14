import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const sanityId = 'guc44bdp'

const config = {
  dataset: 'production',
  projectId: sanityId,
  apiVersion: '2022-11-17',
  useCdn: false,
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const sanityClient = createClient(config)
