import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroType } from "./heroPage/hero";
import { aboutType } from "./heroPage/aboutType";
import { caseStudyType } from "./caseStudyType";
import { partnerType } from "./heroPage/partnerType";
import { internsType } from "./heroPage/internTypes";
import { teamType } from "./teamType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroType,
    aboutType,
    caseStudyType,
    partnerType,
    internsType,
    teamType
  ],
};
