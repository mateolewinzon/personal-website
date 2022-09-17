const { pages } = require("./pageList");

const footers = [
  pages.map((page) => {
    return { id: page.id, href: page.path };
  }),
  [
    { id: "github", href: "https://github.com/mateolewinzon" },
    { id: "linkedin", href: "https://www.linkedin.com/in/mateolewinzon/" },
  ],
  [{ id: "cv", href: "/cv.pdf" }],
];

export default footers;
