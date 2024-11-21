import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroType } from "./heroPage/hero";
import { aboutType } from "./heroPage/aboutType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroType,
    aboutType,
  ],
};
