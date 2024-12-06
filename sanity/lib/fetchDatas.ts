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

// ABOUT SECTION CARDS
export const fetchAbout = async () => {
  const query = `*[_type == "about"][0]{
  values[]{
    title,
    description,
    listItems,
    button,
    images[]{asset->{_id, url}}
  }
}`;

  const section = await sanityClient.fetch(query);
  return section;
};

// CORE TEAMS
export const fetchCoreTeam = async () => {
  const query = `*[_type == "coreTeam"][0]{
    members[] {
      // photo {
      //   asset -> {
      //     url
      //   }
      // },
      "photo": photo.asset->url,
      name,
      title,
      url
    }
  }`;

  const result = await sanityClient.fetch(query);
  return result;
};

// INTERNS & INTERNS TESTIMONIALS
export const fetchInterns = async () => {
  const query = `*[_type == "mentee"]{
    name,
    alias,
    skill,
    tools,
    photo {
      asset -> {
        url
      }
    },
    comment,
    links {
      github,
      linkedin,
      email,
      portfolio
    }
  }`;

  const result = await sanityClient.fetch(query);
  return result;
};

// CASE STUDIES
export const fetchCaseStudies = async () => {
  const query = `*[_type == "caseStudy"]{
    id,
    title,
    isLunched,
    tags,
    image {
      asset -> {
        url
      }
    },
    slug,
    tools,
    client,
    url,
    description1,
    description2
  }`;

  const result = await sanityClient.fetch(query);
  return result;
};
