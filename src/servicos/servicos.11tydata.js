// Configuração comum às páginas de serviço.
export default {
  layout: "servico.njk",
  tags: "servicos",
  permalink: (data) => `/servicos/${data.page.fileSlug}/`,
};
