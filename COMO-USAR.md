# Manual do site: Adriele Lima · Psicóloga

Este manual explica como cuidar do site sem precisar programar.

## Onde fica cada coisa

| O que você quer mudar | Onde mudar |
|---|---|
| Escrever, editar ou apagar um artigo do blog | Painel de edição → **Artigos do blog** |
| WhatsApp, CRP, cidade, sua foto | Painel de edição → **Dados de contato e do site** |
| Textos da página inicial (abertura, serviços, Sobre mim) | Arquivo `src/index.njk` (peça ajuda ao Claude) |
| Cores e fontes | Arquivo `src/css/style.css` (peça ajuda ao Claude) |

## O painel de edição

O painel é o **Pages CMS**, gratuito. Ele mostra formulários simples em vez de código.

1. Entre em **https://app.pagescms.org**
2. Clique em **Sign in with GitHub** e use a sua conta do GitHub.
3. Escolha o repositório **site-adriele**.
4. No menu da esquerda aparecem **Artigos do blog** e **Dados de contato e do site**.

## Publicar um artigo novo

1. No painel, clique em **Artigos do blog** e depois em **Add an entry** (adicionar).
2. Preencha:
   - **Título**
   - **Data de publicação**: os artigos aparecem do mais novo para o mais antigo
   - **Categoria**: por exemplo, "Um dia do seu cérebro" ou "Estresse e cognição"
   - **Resumo**: uma frase curta que aparece no cartão
   - **Ícone** e **Cor** do cartão
   - **Texto do artigo**: escreva normalmente, como num editor de texto
3. Clique em **Save** (Salvar).
4. Em cerca de 2 minutos o artigo aparece no site.

**Dicas para o texto:**
- Use "Heading 2" (Título 2) para os subtítulos.
- Para o quadro verde de destaque, use o botão de citação (**"**), chamado "Quote" ou "Blockquote".
- Marque **Rascunho** para salvar sem publicar. Desmarque quando estiver pronto.
- **Em breve** mostra o cartão com o título, mas sem o texto. É útil para anunciar o próximo artigo.

## Ética profissional (lembrete)

Ao escrever, lembre das regras do CFP para divulgação: nada de promessa de resultado, depoimento de paciente ou sensacionalismo. O CRP precisa aparecer no site, e ele já está no topo e no rodapé.

## Para quem for mexer no código

- O site é gerado com [Eleventy](https://www.11ty.dev/) a partir da pasta `src/`.
- Os artigos ficam em `src/blog/posts/` e são arquivos Markdown.
- Para testar no computador, rode `npm install` e depois `npm start`.
- A publicação é automática pelo GitHub Actions (`.github/workflows/publicar.yml`) a cada mudança na branch `main`.
