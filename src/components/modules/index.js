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
import CompanyInfo from './CompanyInfo'

export const Module = ({ index, data }) => {
  const ModuleType = {
    hero: Hero,
    richtexteditor: RichTextEditor,
    grid: Grid,
    featuredContent: FeaturedContent,
    marquee: Marquee,
    gallery: Gallery,
    youtube: YoutubeBlock,
    linkList: LinkList,
    imageBlock: ImageBlock,
    companyInfo: CompanyInfo,
  }[data?._type] ?? { data: null, index: null }

  if (ModuleType.data === null)
    return <ErrorBlock errorData='Error loading module' />
  return (  
    <ModuleType
      index={index}
      data={data}
    />
  )
}
