import { defineType, defineField } from "sanity";

export const content = defineType({
  name: "content",
  title: "Content",
  type: "document",
  fields: [
    defineField({
      name: "hero_main",
      title: "Hero Main Content",
      type: "string",
    }),
    defineField({
      name: "brands",
      title: "Brand Logos",
      type: "array",
      of: [{ type: "image" }],
    }),

    defineField({
      name: "hero_image",
      title: "Hero Image",
      type: "image",
    }),
    defineField({
      name: "hero_description",
      title: "Hero Description",
      type: "string",
    }),
    defineField({
      name: "sale_badge",
      title: "Sale Badge Info",
      type: "string",
    }),
    defineField({
      name: "promotion_info",
      title: "Promotion Info",
      type: "string",
    }),
    defineField({
      name: "promotion_desc",
      title: "Promotion Description",
      type: "string",
    }),
    defineField({
      name: "promo_info",
      title: "Promo Info",
      type: "string",
    }),
    defineField({
      name: "promo_code",
      title: "Promo Code",
      type: "string",
    }),
    defineField({
      name: "feature_heading",
      title: "Feature Heading",
      type: "string",
    }),
    defineField({
      name: "feature1_title",
      title: "Feature1 Title",
      type: "string",
    }),

    defineField({
      name: "feature1_desc",
      title: "Feature1 Description",
      type: "string",
    }),

    defineField({
      name: "feature2_title",
      title: "Feature2 Title",
      type: "string",
    }),

    defineField({
      name: "feature2_desc",
      title: "Feature2 Description",
      type: "string",
    }),
    defineField({
      name: "feature3_title",
      title: "Feature3 Title",
      type: "string",
    }),

    defineField({
      name: "feature3_desc",
      title: "Feature3 Description",
      type: "string",
    }),
    defineField({
      name: "feature4_title",
      title: "Feature4 Title",
      type: "string",
    }),

    defineField({
      name: "feature4_desc",
      title: "Feature4 Description",
      type: "string",
    }),

    defineField({
      name: "footer_desc",
      title: "Footer Description",
      type: "string",
    }),
  ],
});
