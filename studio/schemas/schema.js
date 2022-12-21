// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// pages
import customPage from './pages/customPage.js'
import header from './pages/header'
import footer from './pages/footer'

//components
import hero from './components/hero'
import gallery from './components/gallery.js'
import blockContent from './components/blockContent.js'
import richTextEditor from './components/richTextEditor.js'
import grid from './components/grid'
import featuredContent from './components/featuredContent.js'
import marquee from './components/marquee.js'
import linkList from './components/linkList.js'
import youtube from './components/youtube.js'
import companyInfo from './components/companyInfo.js'

// Objects
import gridColumn from './components/objects/grid-column'
import gridSize from './components/objects/grid-size'

//helpers
import seoFields from './helpers/seoFields'

//Settings
import imageBlock from './components/imageBlock.js'
import buttonLinks from './components/buttonLinks.js'
import siteConfig from './settings/siteConfig'

// Then we give our schema to the builder and provide the result to Sanity

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // pages
    customPage,
    header,
    footer,

    // helpers
    seoFields,

    //components
    hero,
    blockContent,
    featuredContent,
    imageBlock,
    richTextEditor,
    grid,
    gallery,
    marquee,
    youtube,
    linkList,
    buttonLinks,
    companyInfo,
    // Objects
    gridColumn,
    gridSize,

    // Settings
    siteConfig,
  ]),
})
