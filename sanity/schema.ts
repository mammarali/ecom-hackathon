import { type SchemaTypeDefinition } from "sanity";
import { product } from "./product";
import { category } from "./category";
import { content } from "./content";
import { tagline } from "./tagline";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category, content, tagline],
};
