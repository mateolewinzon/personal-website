function Page(id, path) {
  this.id = id;
  this.path = path;
}

export const pages = [
  new Page("home", "/"),
  new Page("about", "/about"),
  new Page("blog", "/blog"),
];
