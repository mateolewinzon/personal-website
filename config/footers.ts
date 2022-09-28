const { pages } = require("./pageList");

type Footer = {
  id: string,
  href: string,
  isExternal?: boolean
}

const footers: Footer[][] = [
  pages.map((page) => {
    return { id: page.id, href: page.path };
  }),
  [
    {
      id: "github",
      href: "https://github.com/mateolewinzon",
      isExternal: true,
    },
    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/mateolewinzon/",
      isExternal: true,
    },
  ],
  [{ id: "cv", href: "/cv.pdf" }],
];

export default footers;
