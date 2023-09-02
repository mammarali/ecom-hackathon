import { defineType, defineField } from "sanity";

export const tagline = defineType({
  name: "tagline",
  title: "Tagline",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tagline Name",
      type: "string",
    }),
  ],
});
