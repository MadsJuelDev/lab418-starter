import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'
const Layout = ({ children, data }) => {
  const [isMounted, setIsMounted] = useState(false)
  const seo = data?.seo
  const title = data?.title 
  const seoImageLink = data?.seoImageLink
  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <>
      {isMounted && (
        <>
          {seo && (
            <Head>
              <title>{title}</title>
              <meta
                name='keywords'
                content={seo.seoKeywords}
              />
              <meta
                name='description'
                content={seo.seoDescription}
              />
              <meta
                name='title'
                content={seo.seoTitle}
              />
              <meta
                property='og:keywords'
                content={seo.seoKeywords}
              />
              <meta
                property='og:description'
                content={seo.seoDescription}
              />
              <meta
                property='og:title'
                content={seo.seoTitle}
              />
              <meta
                property='og:image'
                content={seoImageLink}
              />
              <meta
                property='og:type'
                content='website'
              />
              <meta
                property='og:locale'
                content={seo.seoLocale}
              />
            </Head>
          )}
          <Header
            onSetup={({ height }) => setHeaderHeight(height)}
          />{' '}
          <main
            className=''
            id='content'
          >
            {children}
          </main>
          <Footer />
        </>
      )}
    </>
  )
}



export default Layout
