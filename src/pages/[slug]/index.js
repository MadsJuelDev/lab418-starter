import { getCustomPage, getAllSlugs } from '@/sanityFetch/customPages'
import Layout from '@/components/Layout'
import { Module } from '@/components/modules'
import ErrorBlock from '@/components/ErrorBlock'
import Head from 'next/head'
import { urlFor } from '@/utils/sanityFetch/sanity'
import { Router } from 'next/router'

export default function customPage({ data }) {
  const pageData = data
  const seoField = pageData?.seoField ? pageData.seoField : undefined
  const seoImageLink = seoField?.seoImage ? urlFor(seoField.seoImage).width(1200).height(630).url() : 'undefined'
  const renderResult = () => {
    if (pageData == undefined) {
      return <ErrorBlock data="Error when loading data"/>
    }
    if (pageData) {
      return (
        <Layout data={{seo: seoField, title: pageData.title, seoImageLink}}>
          <div>
            {pageData?.components?.map((component, index) => (
              <Module
                key={index}
                index={index}
                data={component}
              />
            ))}
          </div>
        </Layout>
      )
    }
  }
  return <div>{renderResult()}</div>
}

export async function getStaticProps({ params }) {
  console.log(params)
  if(params.slug == '404'){
    const route = new Router()
    route.go('404')
  }
  const data = await getCustomPage(params.slug)
  return {
    props: {
      data,
    },
  }
}

export async function getStaticPaths() {
  const pageSlugs = await getAllSlugs()
  // const pageSlugs = [{ slug: 'hello' }, { slug: 'griddy' }]
  return {
    paths:
      pageSlugs?.map((page) => {
        const slugs = page.slug
        if(!slugs) return {
          params: {
            slug: '404',
          },
        }
        return {
          params: {
            slug: slugs,
          },
        }
      }) || [],
    fallback: false,
  }
}
