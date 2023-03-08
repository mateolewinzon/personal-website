const postFields = `
  _id,
  title,
  date,
  teaser,
  image,
  "categories": categories[]->.name,
  "locale": locale->.id,
  "slug": slug.current,
  "esVersion": esVersion->.slug.current,
  "enVersion": enVersion->.slug.current
`;

const projectFields = `
  _id,
  title,
  date,
  description,
  images,
  techs,
  "locale": locale->.id,
`;

const posts = `_type == "post"`
const categories = `_type == "category"`
const projects = `_type == "project"`

const isPublished = `isPublished == true`;
const descOrder = `order(date desc, _updatedAt desc)`

export const GET_POSTS = `*[${posts} && locale->.id == $locale && ${isPublished} ] | ${descOrder} {${postFields}}`;

export const GET_POST = `*[${posts} && slug.current == $slug  && ${isPublished} ] [0] {
        content,
        ${postFields}
      }
`;

export const GET_RELATED = `*[${posts} && category->.name == $category && _id != $currentId  && ${isPublished} ]  | ${descOrder} {
  ${postFields}
}
`;

export const GET_SLUGS = `*[${posts} && ${isPublished} ] {"slug": slug.current}`;

export const GET_CATEGORIES = `*[${categories}]`;

export const GET_PROJECTS = `*[${projects} && ${isPublished} ] {
  ${projectFields}
}`;
