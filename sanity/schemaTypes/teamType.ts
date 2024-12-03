import { defineType, defineField, defineArrayMember } from "sanity";

export const teamType = defineType({
  name: "coreTeam",
  title: "Core Team",
  type: "document",
  fields: [
    defineField({
      name: "members",
      title: "Team Members",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true, // Enable image cropping and focus selection
              },
            }),
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "title",
              title: "Title",
              type: "string",
            }),
            defineField({
              name: "url",
              title: "URL",
              type: "url",
            }),
          ],
        }),
      ],
    }),
  ],
});
