import React from 'react'
import Hero from './Hero'
import Grid from './Grid'
import Gallery from './Gallery'
import RichTextEditor from './RichTextEditor'
import FeaturedContent from './FeaturedContent'
import Marquee from './Marquee'
import YoutubeBlock from './YoutubeBlock'
import LinkList from './LinkList'
import ImageBlock from './ImageBlock'
import ErrorBlock from '../ErrorBlock'
import SiteSettings from './SiteSettings'
import SiteConfig from './SiteConfig'

export const Module = ({ index, data }) => {
  const ModuleType = {
    hero: Hero,
    RichTextEditor: RichTextEditor,
    grid: Grid,
    featuredContent: FeaturedContent,
    marquee: Marquee,
    gallery: Gallery,
    youtube: YoutubeBlock,
    linkList: LinkList,
    imageBlock: ImageBlock,
    settings: SiteSettings,
    siteConfig: SiteConfig,
  }[data?._type] ?? <ErrorBlock errorData='Error loading module' />
  return (
    <ModuleType
      index={index}
      data={data}
    />
  )
}
