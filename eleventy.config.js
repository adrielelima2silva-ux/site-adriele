import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  // Corrige os endereços quando o site está numa subpasta (ex.: github.io/site-adriele)
  eleventyConfig.addPlugin(HtmlBasePlugin);

  // Copia CSS e imagens sem alterar
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/googleb8dff7edd177bd92.html"); // verificação do Google Search Console

  // Todos os artigos do blog, do mais novo para o mais antigo
  eleventyConfig.addCollection("artigos", (api) =>
    api
      .getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.rascunho)
      .sort((a, b) => b.date - a.date)
  );

  // Data em português: "16 de novembro de 2026"
  eleventyConfig.addFilter("dataBR", (d) =>
    new Date(d).toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC",
    })
  );

  // Tempo de leitura estimado (200 palavras por minuto)
  eleventyConfig.addFilter("tempoLeitura", (html) => {
    const palavras = String(html).replace(/<[^>]+>/g, " ").split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(palavras / 200));
  });

  // Link do WhatsApp com mensagem pronta
  eleventyConfig.addFilter("whatsapp", (site) =>
    `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.mensagem_whatsapp || "")}`
  );

  // Endereço completo (para Google e redes sociais)
  eleventyConfig.addFilter("absoluta", (caminho, site) => (site.url || "").replace(/\/$/, "") + caminho);

  // Data no formato AAAA-MM-DD (mapa do site e dados estruturados)
  eleventyConfig.addFilter("dataISO", (d) => new Date(d).toISOString().slice(0, 10));

  eleventyConfig.addFilter("primeiros", (arr, n) => (arr || []).slice(0, n));

  return {
    dir: { input: "src", output: "_site" },
    pathPrefix: process.env.PATH_PREFIX || "/",
    markdownTemplateEngine: false,
    htmlTemplateEngine: "njk",
  };
}
