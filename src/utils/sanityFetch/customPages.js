import { sanityClient } from './sanity'

export async function getAllSlugs() {
  const query = `*[_type == "pages"]{ "slug": slug.current }`
  const data = await sanityClient.fetch(query)
  return data
}

export async function getCustomPage(slug) {
  const componentQuery = `
    _type=="hero" => {
      ...,
      videomedia{...,defined(asset) => asset->},
      content[]{...,markDefs[]{...,defined(intLink) => intLink->{"href":slug.current}}}
    },
      _type=="richtexteditor" => {
      ...
    },
      _type=="featuredContent" => {
      ...
    },
    _type=="imageBlock" => {
      ...
    },
    _type=="marquee" => {
      ...,
      items[]{...,defined(pages) => pages->{"slug":slug.current}}
    },
    _type=="gallery" => {
      ...
    },
    _type=="youtube" => {
      ...
    },
    _type=="linkList" => {
        ...,
        items[]{...,defined(pages) => pages->{"slug":slug.current}}
     },
     _type=="cta" => {
      ...,
      buttons[]{
        ...,
        defined(intLink) => {
          intLink -> {"slug":slug.current}
        }
      }
     }
    `
  const query = `*[_type == "pages" && slug.current == "${slug}"][0]{...,components[]{
    _type=="grid" => {
      ...,
      columns[]{...,blocks[]{${componentQuery}}}
    },
    ${componentQuery}
  }}`
  const data = await sanityClient.fetch(query)
  return data
}
