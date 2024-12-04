import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  type: "document",
  title: "Hero Section",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
