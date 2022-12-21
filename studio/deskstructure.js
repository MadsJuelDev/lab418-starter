import S from '@sanity/desk-tool/structure-builder'
import T from '@sanity/base/initial-value-template-builder'
import React from 'react'

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Front page')
        .child(S.document().schemaType('pages').documentId('frontPage'))
        .icon(() => '📰'),
      S.listItem()
        .title('Pages')
        .child((pageId) =>
          S.documentList()
            .title('Pages')
            .filter('_type == "pages" && slug.current!= "frontPage"')
            .params({ pageId })
        ),
      S.divider(),
      S.listItem()
        .title('Settings')
        .child(S.document().schemaType('settings').documentId('settings'))
        .icon(() => '📐'),
      S.listItem()
        .title('Header')
        .child(S.document().schemaType('header').documentId('header'))
        .icon(() => '😀'),
      S.listItem()
        .title('Footer')
        .child(S.document().schemaType('footer').documentId('footer'))
        .icon(() => '🦶'),
      ...S.documentTypeListItems().filter(
        (listItem) => !['pages', 'homepage'].includes(listItem.getId())
      ),
    ])
