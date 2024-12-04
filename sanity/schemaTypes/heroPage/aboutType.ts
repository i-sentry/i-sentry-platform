import { defineType, defineField, defineArrayMember } from "sanity";

export const aboutType = defineType({
  name: "about",
  title: "About Section",
  type: "document",
  fields: [
    // defineField({
    //   name: "title",
    //   title: "Section Title",
    //   type: "string",
    //   validation: (Rule) => Rule.required(),
    // }),
    defineField({
      name: "values",
      title: "Key values",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Title",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              validation: (Rule) => Rule.required().max(200),
            }),
            defineField({
              name: "url",
              title: "Url",
              type: "string",
              hidden: ({ parent }) => parent?.type === "imageBox",
            }),
            defineField({
              name: "listItems",
              title: "List Items",
              type: "array",
              of: [{ type: "string" }],
              hidden: ({ parent }) => parent?.type === "imageBox",
            }),
            defineField({
              name: "button",
              title: "Button Text",
              type: "string",
              hidden: ({ parent }) => parent?.type === "imageBox",
            }),

            defineField({
              name: "images",
              title: "Images",
              type: "array",
              of: [{ type: "image" }],
              // hidden: ({ parent }) => parent?.type !== "imageBox",
            }),
          ],
          preview: {
            select: {
              title: "title",
              description: "description",
              listItems: "listItems",
              images: "images",
              url: "url",
            },
            prepare({ title, description, listItems, images, url }) {
              const subtitle = description
                ? description.substring(0, 50) + "..."
                : "No description";
              const hasImages = images ? `(${images.length} images)` : "";
              return {
                title,
                url,
                subtitle: `${subtitle} ${listItems ? "(List Items)" : ""} ${hasImages}`,
              };
            },
          },
        }),
      ],
      validation: (Rule) =>
        Rule.length(4).error("There must be exactly 4 boxes."),
    }),
  ],
});
