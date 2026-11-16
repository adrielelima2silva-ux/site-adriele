// Configuração comum a todos os artigos do blog.
// Artigos marcados "em_breve" aparecem como cartão, mas sem página própria.
export default {
  layout: "artigo.njk",
  eleventyComputed: {
    permalink: (data) => (data.em_breve ? false : `/blog/${data.page.fileSlug}/`),
  },
};
