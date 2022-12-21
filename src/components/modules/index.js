import React from 'react'
import Hero from './Hero'
import Grid from './Grid'
import Gallery from './Gallery'
import FeaturedContent from './FeaturedContent'
import Marquee from './Marquee'
import YoutubeBlock from './YoutubeBlock'
import LinkList from './LinkList'
import ImageBlock from './ImageBlock'
import ErrorBlock from '../ErrorBlock'
import SiteSettings from './SiteSettings'
import SiteConfig from './SiteConfig'
import RichTextEditor from './RichTextEditor'

export const Module = ({ index, data }) => {
  const ModuleType = {
    hero: Hero,
    grid: Grid,
    featuredContent: FeaturedContent,
    marquee: Marquee,
    gallery: Gallery,
    youtube: YoutubeBlock,
    linkList: LinkList,
    imageBlock: ImageBlock,
    settings: SiteSettings,
    siteConfig: SiteConfig,
    richTextEditor: RichTextEditor,
  }[data?._type] ?? <ErrorBlock errorData='Error loading module' />
  return (
    <ModuleType
      index={index}
      data={data}
    />
  )
}
