import Layout from '@/components/Layout'
import getHomepage from '@/sanityFetch/homepage'
import { Module } from '@/components/modules'
import ErrorBlock from '@/components/ErrorBlock'
import { urlFor } from '@/utils/sanityFetch/sanity'
import { getCustomPage } from '@/utils/sanityFetch/customPages'

export default function Home({ data }) {
  const pageData = data
  const seoField = pageData?.seoField ? pageData.seoField : undefined
  const seoImageLink = seoField?.seoImage
    ? urlFor(seoField.seoImage).width(1200).height(630).url()
    : 'undefined'
  const renderResult = () => {
    if (pageData == undefined) {
      return <ErrorBlock data='Error when loading data' />
    }
    if (pageData) {
      return (
        <Layout data={{ seo: seoField, title: pageData.title, seoImageLink }}>
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

export async function getStaticProps() {
  const data = await getCustomPage('frontPage')
  return {
    props: {
      data,
    },
    revalidate: 20,
  }
}
