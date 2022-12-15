export default {
  title: "Marquee",
  name: "marquee",
  type: "object",
  fieldsets: [
    {
      title: "",
      name: "options",
      options: { columns: 2 },
    },
  ],
  fields: [
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
    },
    {
      title: "Items",
      name: "items",
      type: "array",
      of: [
        {
          title: "Text",
          name: "simple",
          type: "object",
          fields: [
            {
              title: "Text",
              name: "text",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              text: "text",
            },
            prepare({ text }) {
              return {
                title: text,
              };
            },
          },
        },
        {
          title: "Image",
          name: "photo",
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              title: "Link Type",
              name: "linkType",
              type: "string",
              options: {
                isHighlighted: true, // <-- make this field easily accessible

                list: [
                  { title: "Internal Page", value: "internal" },
                  { title: "External URL", value: "external" },
                ],
              },
              initialValue: "internal",
              validation: (Rule) => Rule.required(),
            },
            {
              title: "Internal Page",
              name: "pages",
              type: "reference",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
              to: [
                { type: "pages" },
                // { type: "product" },
              ],
              hidden: ({ parent }) => parent.linkType !== "internal",
            },
            {
              title: "External URL",
              name: "url",
              type: "url",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
              validation: (Rule) =>
                Rule.uri({
                  scheme: ["http", "https", "mailto", "tel"],
                }),
              hidden: ({ parent }) => parent.linkType !== "external",
            },
            {
              title: "Alternative text",
              name: "alt",
              type: "string",
              description: "Important for SEO and accessiblity.",
              options: {
                isHighlighted: true, // <-- make this field easily accessible
              },
            },
          ],
        },
      ],
      // ********* TO BE ADDED WITH SHOPIFY API *********
      // {
      //   title: "Existing Product",
      //   name: "product",
      //   type: "reference",
      //   to: [{ type: "product" }],
      // },
    },

    // settings below, add as needed. - To be changed into tabs
    {
      title: "Speed",
      name: "speed",
      type: "number",
      description: "Pick a number between 0-1 (0.5 is the default)",
      initialValue: 0.5,
      validation: (Rule) => Rule.min(0).max(1).precision(1),
    },
    {
      title: "Reverse direction?",
      name: "reverse",
      type: "boolean",
      initialValue: false,
      fieldset: "options",
    },
    {
      title: "Pause on hover?",
      name: "pausable",
      type: "boolean",
      initialValue: false,
      fieldset: "options",
    },
  ],
  preview: {
    select: {
      text: "items.0.text",
    },
    prepare({ text }) {
      return {
        title: "Marquee",
        subtitle: text,
      };
    },
  },
};
