function Page(title, path) {
  this.title = title;
  this.path = path;
}

export const pages = [
  new Page({ en: "About", es: "¿Quién soy?" }, "/about"),
  new Page({ en: "Experience", es: "Experiencia" }, "/experience"),
  new Page({ en: "Portfolio", es: "Portfolio" }, "/portfolio"),
  new Page({ en: "Blog", es: "Blog" }, "/blog"),

];
