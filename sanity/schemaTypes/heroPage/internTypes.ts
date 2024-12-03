import { defineType, defineField, defineArrayMember } from "sanity";

export const internsType = defineType({
  name: "interns",
  title: "Interns",
  type: "document",

  fields: [
    defineField({
      name: "mentee",
      title: "Mentee",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "name",
              title: "Name",
              type: "string",
            }),
            defineField({
              name: "alias",
              title: "Alias",
              type: "string",
            }),
            defineField({
              name: "skill",
              title: "Skill",
              type: "string",
            }),
            defineField({
              name: "tools",
              title: "Tools",
              type: "string",
            }),
            defineField({
              name: "photo",
              title: "Photo",
              type: "image",
              options: {
                hotspot: true, // Enable image hotspot for cropping
              },
            }),
            defineField({
              name: "comment",
              title: "Comment",
              type: "text",
            }),
            defineField({
              name: "links",
              title: "Links",
              type: "object",
              fields: [
                defineField({
                  name: "github",
                  title: "GitHub",
                  type: "url",
                }),
                defineField({
                  name: "linkedin",
                  title: "LinkedIn",
                  type: "url",
                }),
                defineField({
                  name: "email",
                  title: "Email",
                  type: "email",
                }),
                defineField({
                  name: "portfolio",
                  title: "Portfolio",
                  type: "url",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
