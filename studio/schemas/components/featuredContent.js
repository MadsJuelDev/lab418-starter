/* eslint-disable import/no-anonymous-default-export */
export default {
  title: "Featured content",
  name: "featuredContent",
  type: "object",
  groups: [
    {
      name: "media",
      title: "Media",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fieldsets: [
    {
      title: "",
      name: "options",
      options: { columns: 2 },
    },
  ],
  fields: [
    
    {
      title: "Title",
      name: "title",
      type: "string",
      fieldset: "options",
      group: "settings",
    },
    {
      title: "Show title?",
      name: "active",
      type: "boolean",
      initialValue: true,
      fieldset: "options",
      group: "settings",
    },
    {
      title: "Custom Class",
      name: "customClass",
      type: "string",
      group: "settings"
    },
    {
      title: "Content",
      name: "content",
      type: "blockContent",
    },
    {
      // setting - should be in a tab
      title: "Align content left or right",
      name: "alternate",
      type: "boolean",
      initialValue: false,
      group: "settings",
    },
    {
      title: "Background type",
      name: "bgtype",
      type: "string",
      group: "media",
      options: {
        list: [
          { title: "Photo", value: "photo" },
          { title: "Video", value: "video" },
        ],
        layout: "checkbox",
        direction: "horizontal",
      },
      // validation: (Rule) => Rule.required(),
    },
    {
      title: "Poster",
      name: "photo",
      type: "image",
      group: "media",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
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
      hidden: ({ parent }) => {
        return parent.bgtype !== "photo";
      },
    },
    {
      name: "video",
      type: "object",
      group: "media",
      fields: [
        {
          title: "Background Video",
          name: "id",
          type: "string",
          description:
            "Alternatively, enter a vimeo ID to show a looping video instead",
        },
        {
          title: "Background Video Title",
          name: "title",
          type: "string",
          description: "Short title/description of the video",
        },
      ],
      hidden: ({ parent }) => {
        return parent.bgtype !== "video";
      },
    },
  ],
};
