import { defineConfig } from "sanity";
import { markdownSchema } from "sanity-plugin-markdown";

export default defineConfig({
  projectId: "qndoziy1",
  dataset: "production",
  plugins: [markdownSchema()],
  schema: {
    types: [
      {
        name: "post",
        type: "document",
        title: "Post",
        fields: [
          { name: "title", title: "Title", type: "string" },
          {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title" },
          },
          { name: "content", title: "Content", type: "markdown" },
          { name: "teaser", title: "Teaser", type: "string" },
          { name: "image", title: "Image", type: "image" },
          { name: "date", title: "Date", type: "datetime" },
          { name: "isPublished", title: "Published", type: "boolean" },
          {
            name: "locale",
            title: "Locale",
            type: "reference",
            to: [{ type: "locale" }],
          },
          {
            name: "categories",
            title: "Categories",
            type: "array",
            of: [{ type: "reference", to: [{ type: "category" }] }],
          },
          {
            name: "enVersion",
            title: "English version",
            type: "reference",
            to: [{ type: "post" }],
            options: {
              filter: "locale->.id == $locale",
              filterParams: { locale: "en" },
            },
          },
          {
            name: "esVersion",
            title: "Spanish version",
            type: "reference",
            to: [{ type: "post" }],
            options: {
              filter: "locale->.id == $locale",
              filterParams: { locale: "es" },
            },
          },
        ],
      },
      {
        name: "locale",
        type: "document",
        title: "locale",
        fields: [{ name: "id", title: "id", type: "string" }],
      },
      {
        name: "category",
        type: "document",
        title: "Category",
        fields: [
          { name: "name", title: "Name", type: "string" },
          {
            name: "locale",
            title: "Locale",
            type: "reference",
            to: [{ type: "locale" }],
          },
        ],
      },
      {
        name: "project",
        type: "document",
        title: "Project",
        fields: [
          { name: "title", title: "Title", type: "string" },
          { name: "description", title: "Description", type: "string" },
          {
            name: "images",
            title: "Images",
            type: "array",
            of: [{ type: "image" }],
          },
          { name: "date", title: "Date", type: "datetime" },
          {
            name: "techs",
            title: "techs",
            type: "array",
            of: [{ type: "string" }],
          },
          {
            name: "locale",
            title: "Locale",
            type: "reference",
            to: [{ type: "locale" }],
          },
          { name: "url", title: "URL", type: "string" },
          { name: "repoUrl", title: "Repo URL", type: "string" },
          { name: "isPublished", title: "Published", type: "boolean" },
        ],
      },
    ],
  },
});
