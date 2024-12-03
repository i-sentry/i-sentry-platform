import { defineType, defineField, defineArrayMember } from "sanity";

export const partnerType = defineType({
  name: "partners",
  title: "Partners Section",
  type: "document",
  fields: [
    defineField({
      name: "partner",
      title: "Partner",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          fields: [
            defineField({
              name: "images",
              title: "Images",
              type: "image",
            }),
          ],
        }),
      ],
    }),
  ],
});
