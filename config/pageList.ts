function Page(id, path) {
  this.id = id;
  this.path = path;
}

export const pages = [
  new Page("home", "/"),
  new Page("blog", "/blog"),
  // new Page("portfolio", "/portfolio")
];
