/* eslint-disable import/no-anonymous-default-export */
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
import React from "react";
const LeftStyle = (props) => (
  <div style={{ textAlign: "left" }}>{props.children}</div>
);
const RightStyle = (props) => (
  <div style={{ textAlign: "right" }}>{props.children}</div>
);
const CenterStyle = (props) => (
  <div style={{ textAlign: "center" }}>{props.children}</div>
);

export default {
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    {
      title: "Block",
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
        // {
        //   title: 'Title',
        //   value: 'title',
        //   blockEditor: {
        //     render: TitleStyle
        //   }
        // },
      ],
      lists: [{ title: "Bullet", value: "bullet" }],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Underline", value: "underline" },
          { title: "Emphasis", value: "em" },
          {
            title: "Left",
            value: "left",
            blockEditor: {
              render: LeftStyle,
            },
          },
          {
            title: "Center",
            value: "center",
            blockEditor: {
              render: CenterStyle,
            },
          },
          {
            title: "Right",
            value: "right",
            blockEditor: {
              render: RightStyle,
            },
          },
        ],
        annotations: [
          {
            title: "External link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ["http", "https", "mailto", "tel"],
                  }),
              },
              {
                title: "Open in new tab",
                name: "blank",
                type: "boolean",
              },
            ],
          },
          {
            title: "Internal Link",
            name: "link",
            type: "object",
            fields: [
              {
                title: "Reference",
                name: "reference",
                type: "reference",
                to: [
                  { type: "pages" },
                  // other types you may want to link to
                ],
              },
            ],
          },
        ],
      },
    },

    // You can add additional types here.
    // Note that you can't use primitive types such as strings and numbers in the same array.
    {
      type: "image",
      /// FIX THIS ///
      fields: [
        {
          type: "text",
          name: "alt",
          title: "Alternative text",
          description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what\'s on your page.`,
          options: {
            isHighlighted: true,
            hotspot: true,
          },
        },
      ],
    },
  ],
};









        annotations: [
          {
            title: 'Link',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'Link Type',
                name: 'linkType',
                type: 'string',
                options: {
                  list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'External URL', value: 'external' },
                  ],
                },
                initialValue: 'internal',
                validation: (Rule) => Rule.required(),
              },
              {
                title: 'Internal Page',
                name: 'intLink',
                type: 'reference',
                to: [{ type: 'pages' }],
                hidden: ({ parent }) => parent.linkType !== 'internal',
              },
              {
                title: 'External URL',
                name: 'url',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    scheme: ['http', 'https', 'mailto', 'tel'],
                  }),
                hidden: ({ parent }) => parent.linkType !== 'external',
              },
            ],
          },
        ],
      },
    },

   