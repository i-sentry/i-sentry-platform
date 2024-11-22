import { defineType, defineField, defineArrayMember } from "sanity";

export const caseStudyType = defineType({
  name: "caseStudies",
  title: "Case Studies",
  type: "document",
  fields: [
    defineField({
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "id",
              title: "ID",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "isLaunched",
              title: "Is Launched",
              type: "boolean",
            }),
            defineField({
              name: "services",
              title: "Services",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "image",
              title: "Image",
              type: "array",
              of: [
                {
                  type: "image",
                  options: {
                    hotspot: true, // Enable image cropping
                  },
                },
              ],
            }),
            defineField({
              name: "slug",
              title: "Slug",
              type: "slug",
              options: {
                source: "title",
                maxLength: 96,
              },
            }),
            defineField({
              name: "tools",
              title: "Tools",
              type: "array",
              of: [{ type: "string" }],
            }),
            defineField({
              name: "client",
              title: "Client",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
            defineField({
              name: "descriptions",
              title: "Description",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        }),
      ],
    }),
  ],
});
