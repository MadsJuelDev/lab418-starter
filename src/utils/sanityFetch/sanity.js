import { createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

const sanityId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID //'guc44bdp'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: sanityId,
  apiVersion: '2022-11-17',
  useCdn: false,
}
export const urlFor = (source) => createImageUrlBuilder(config).image(source)
export const sanityClient = createClient(config)
