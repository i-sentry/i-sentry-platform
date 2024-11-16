import { sanityClient } from "@/sanity";

export const fetchHero = async () => {
  const query = `*[_type == "section"] | order(order asc) {
  _id,
  title,
  description
  }`;

  const section = await sanityClient.fetch(query);
  return section;
};
