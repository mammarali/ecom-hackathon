import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90,
      },
    },
    defineField({
      name: "detail",
      title: "Product Details",
      type: "string",
    }),

    defineField({
      name: "care",
      title: "Product Care",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "price",
      title: "Product Price",
      type: "number",
    }),

    defineField({
      name: "image",
      title: "Product Image",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "tagline",
      title: "Product Tagline",
      type: "reference",
      to: [{ type: "tagline" }],
    }),

    defineField({
      name: "category",
      title: "Product Category",
      type: "reference",
      to: [
        {
          type: "category",
        },
      ],
    }),
  ],
});
