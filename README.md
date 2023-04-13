# lewinzon.vercel.app

Personal website and blog built with NextJs, next-mdx-remote and Tailwind.

Available at https://lewinzon.com

Suggestions and comments will be appreciated.

## Stack

- **Framework**: Typescript NextJs React
- **Styling**: Tailwind CSS
- **Blog**: Static generated pages out of compiled Markdown (MDX) fetched from Sanity CMS using next-mdx-remote
- **Database**: MongoDb w/ Prisma
- **Localization**: next-localization

## Project remarks

- `/components/*` : Contains all of the components used in the App. They're exported from `components/index.tsx`
- `/lib/*`: External libraries utilized in the server side of the App. (page functions or `/api/**`)
- `/locales/*` : `en.json` and `es.json` contain the UI texts in their corresponding languages. This is managed by `next-localization`. Each page has to get `lngDict` to the page props (using `getServerSideProps` or `getStaticProps`) so that it gets passed to the provider (see `pages/_app.tsx`). It works along with Next's built-in locale option in routing and links. 
- `/api/**/*` : Hosts the routes for the view-count and now-playing. 

## Running locally

Use `env.example` as a guide to which environment variables are needed in the project.
