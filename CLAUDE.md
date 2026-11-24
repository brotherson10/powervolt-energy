# Solarnex (ex-Powervolt Energy) · landing page (cliente)

> Projeto de cliente dentro do workspace `mazyos-AI`. As regras gerais vêm do
> plugin MazyOS e do `CLAUDE.md` da raiz. Este arquivo guarda o que é
> específico da Solarnex. A pasta e o repositório continuam com o nome antigo (`powervolt-landing`, `brotherson10/powervolt-energy`).

## O cliente

- **Empresa:** Solarnex (nome fantasia) · razão social **Solarnex Unipessoal LDA**. De Portugal, escritório e armazém em Azambuja. Slogan: "Energia que move o futuro"
- **Mudança de marca (11/2026):** a empresa chamava-se Powervolt Energy e teve de mudar porque o nome já estava registado por outra empresa. Mesma empresa, mesmos contactos e morada. **O nome Powervolt não deve aparecer no site** (nem como nome antigo, para não criar problema com quem tem o registo)
- **Zona de atuação (confirmada pelo Brotherson, 11/2026):** instala em todo o país (já fez obras em Lisboa, Margem Sul, Algarve, Leiria...). No site não aparece em texto (a faixa de confiança tem só 3 itens); fica no JSON-LD como `areaServed: Portugal` e na descrição para o Google. A morada e os contactos ficam só no final da página
- **O que faz:** energia solar para autoconsumo, baterias de armazenamento e backup, e carregamento de veículos elétricos, para residências e pequenos negócios
- **Contactos (fonte: ficha do Google Maps, 11/2026):**
  - Morada: `R. José Clemente Nº 4 R/C LJDT, 2050-260 Azambuja` (escrever sempre exatamente assim)
  - Telemóvel e WhatsApp: (+351) 930 646 567 · `tel:+351930646567` · `wa.me/351930646567`
  - Email: solarnex.pt@gmail.com
  - Horário: segunda a sexta, 08:00 às 17:00; sábado e domingo encerrado
  - Instagram: @solarnex.pt (atenção: o @solarnex é de outra empresa, russa). O WhatsApp da bio usa o link curto w.app/orcamentosolarnex, mesmo número
  - Ficha Google: https://maps.google.com/?cid=16781300282682607744 (em 21/11/2026 já aparece no mapa como "Solarnex Energy") (link curto do cliente: https://share.google/KnP4vbGHlJ8d1FwBz)
  - Coordenadas: 39.0735905, -8.8639821 · Plus Code 34FP+CC Azambuja
- A morada antiga (Rua Canal do Tejo, G-66, Bobadela, Loures) **não deve aparecer** em lado nenhum

## Stack e deploy

- **Tudo o que está no repositório fica público no site.** O `_redirects` devolve 404 para `CLAUDE.md` e `README.txt`; qualquer ficheiro interno novo tem de entrar lá ou ficar fora do repositório

- Site estático: `index.html`, `style.css`, `script.js`. Sem build e sem dependências
- Imagens usadas pelo site em `assets/img/web/` (WebP em 480 e 900 px de largura, OG 1200x630, logo recortado). Os JPEG originais em `assets/img/` ficam como fonte
- `favicon.png`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml` na raiz
- CSS e JS são chamados com `?v=N`. **Subir o número a cada alteração** desses ficheiros, para quem visita não ficar com a versão em cache
- Domínio principal: **https://solarnex.pt/** (comprado em 11/2026, o Brotherson gere). `canonical`, Open Graph, JSON-LD, `sitemap.xml` e `robots.txt` apontam para lá
- Domínio antigo `powervoltenergy.pt`: fica como alias no Netlify enquanto estiver pago e redireciona (301) para o novo, pelo ficheiro `_redirects`. O `www.solarnex.pt` e o `powervolt-energy.netlify.app` também redirecionam
- Mapa e "Como chegar" usam as coordenadas da ficha (não o nome), para não quebrar quando o nome da ficha muda
- Deploy: Netlify, automático a partir do `main` do repositório `brotherson10/powervolt-energy`. **Push publica o site.** Commit e push são feitos aqui, nunca no workspace
- Para ver localmente: `python -m http.server 8123` nesta pasta

## Identidade visual (do CLIENTE)

**Não usar `../../identidade/design-guide.md`.** Aquela é a identidade do Brotherson e da ByTen. Este site segue a marca da Solarnex (as cores do logo novo, amarelo `#fdc003` a laranja `#ff6e05` sobre preto, batem com a paleta que já existia, por isso a paleta ficou igual):

- Fundo: `#07090d` · fundo secundário: `#10141c` · superfície elevada `#141925`
- Destaque solar: `#ffad14` (variação clara `#ffd166`, texto sobre âmbar `#161000`)
- Texto: `#f8fafc` · secundário: `#a7b0bd` · terciário: `#6f7a89`
- Bordas: branco a 8% e 14%
- **Secções claras:** fundo `#f6f3ec` (branco quente), cards `#ffffff`, texto `#07090d` / `#4b5361`. Em fundo claro o âmbar `#ffad14` não serve para texto: usar `#9a5700` em etiquetas e links, e o âmbar só em ícones e detalhes
- Fonte: Inter (400, 500, 600, 700, 800)
- **Cantos:** fotos sempre com cantos retos (0) e na proporção original 3:4 (`aspect-ratio`, nunca altura fixa). Cards e balões de informação com 14px (10px nos menores, 8px em etiquetas). Botões continuam em cápsula
- **Ritmo de fundos (inspirado em Soty Solar, iPower e Solfácil):** hero escuro → faixa âmbar → foto em ecrã inteiro com camada escura (Quem somos) → claro (Soluções) → grafite (Como trabalhamos) → claro (Obras) → escuro (Opiniões) → âmbar (Contacto) → preto (rodapé). Nunca duas secções seguidas com o mesmo fundo
- Ícones: SVG de traço (1.8), definidos num sprite no topo do `index.html`
- Botão flutuante de WhatsApp em verde `#25d366` (cor reconhecível do WhatsApp, única exceção à paleta)
- **Kit de marca** em `assets/img/marca/` (gerado no GPT a partir do JPG do cliente, conferido com o original): 01 horizontal para fundo escuro, 02 horizontal para fundo claro, 03 e 04 empilhado com slogan (escuro/claro), 05 símbolo, 06 ícone sobre preto, 07 perfil do Instagram, 08 e 09 monocromático branco/preto, 10 capa 1200x630. Todos PNG, os sem fundo com transparência real. Não há vetor
- Logo do site: `assets/img/web/logo-solarnex.webp` (tirado do 01, 900x111). No topo a largura é fluida (`clamp(210px, 21vw, 290px)`); entre 901 e 1080 px o botão "Pedir orçamento" fica só com o ícone para o menu caber numa linha. `logo-solarnex-completo.png` vem do 03. Favicon com o símbolo (05), `apple-touch-icon` e `icone-512` do 06, `og-solarnex.jpg` = foto de obra + empilhado. JSON-LD `logo` = 07. O JPG original do cliente fica em `assets/img/logo-solarnex.jpg`
- No rodapé o slogan aparece por baixo do logo, em maiúsculas espaçadas, como no logo original

## Idioma e escrita do site

- **O site é em português de Portugal** (`lang="pt-PT"`): "poupança", "fatura", "contacto", "telemóvel", "equipa". Não usar termos do português do Brasil
- O site fala em nome da Solarnex, não do Brotherson. Tom claro, próximo e sem jargão, com a voz da empresa
- Nunca usar travessão ("—") no texto do site
- Nunca inventar números, depoimentos, certificações ou obras
- As opiniões no site são reais, copiadas da ficha do Google (Alfonso Larrosa, Jose Carlos Simao, Carlos Ribeiro), com autorização dada em 11/2026. Não pôr `aggregateRating` no JSON-LD (o Google não aceita avaliações vindas de outra plataforma)

## Estrutura atual

`#inicio` (hero com a foto de uma obra como fundo, da metade para a direita, e degradê escuro atrás do texto; no telemóvel a foto fica por trás de tudo) → faixa âmbar de confiança → `#sobre` (foto de fundo) → `#solucoes` (3 cards com orçamento por WhatsApp) → `#processo` (4 passos, sem numeração) → `#obras` (galeria) → `#opinioes` (nota Google + 3 opiniões) → `#contacto` (contactos, horário, mapa) → rodapé

SEO local: `title` e `description` com Azambuja, `canonical`, Open Graph, JSON-LD `LocalBusiness` (morada, geo, horário, `hasMap`, `sameAs`), mapa incorporado.

## Pendências

- [x] Domínio solarnex.pt no ar (24/11/2026): DNS na dominios.pt (A `@` 75.2.60.5, CNAME `www` powervolt-energy.netlify.app), Netlify com solarnex.pt principal e powervoltenergy.pt + www como alias, certificado cobre os 4. Todos redirecionam (301) para https://solarnex.pt/
- [ ] Trocar o link "Site" da bio do Instagram (ainda aponta para powervoltenergy.pt) e o site da ficha do Google
- [ ] Google Search Console: adicionar solarnex.pt e usar "Alteração de endereço" a partir de powervoltenergy.pt
- [ ] Confirmar com o cliente se o nome no site é "Solarnex" ou "Solarnex Energy" (a ficha do Google aparece como "Solarnex Energy")
- [ ] Se o designer tiver o logo em vetor (SVG/PDF), guardar em `assets/img/marca/`
- [ ] Confirmar com o cliente os textos da secção "Como trabalhamos" (foram escritos a partir do texto do "Sobre")
- [ ] Fotos de mais obras e a foto da loja nova em Azambuja (a ficha do Google tem uma)
- [ ] Rever a nota e as opiniões de vez em quando, se entrarem novas no Google
- [ ] Google Meu Negócio: confirmar quem gere a ficha, pôr categorias, serviços, fotos e descrição
- [ ] Depois, avaliar Google Ads

## Histórico

- Landing page criada pelo Brotherson e entregue
- 11/11/2026: morada nova (Azambuja), dados da ficha do Google (horário, opiniões, mapa), refatoração visual completa, WhatsApp, SEO local (canonical, Open Graph, JSON-LD, sitemap) e imagens otimizadas (de ~1,1 MB para ~0,55 MB de imagens na página inteira, com a galeria em lazy load)
- 11/11/2026 (2ª ronda): fundos alternados entre secções (claro, âmbar, foto, grafite), fotos com cantos retos na proporção original, cards com cantos menores, numeração tirada de "Como trabalhamos"
- 21/11/2026: mudança de marca para Solarnex (Solarnex Unipessoal LDA). Logo novo (horizontal no topo e rodapé, com fundo removido do JPG do cliente), favicon e ícones, imagem de partilha nova, email e Instagram novos, domínio solarnex.pt (canonical, OG, JSON-LD com `legalName` e `slogan`, sitemap, robots), `_redirects` do domínio antigo, mapa por coordenadas
- 21/11/2026 (2ª ronda): kit de marca do GPT em `assets/img/marca/`; logo, ícones e imagem de partilha refeitos a partir dele; topo ajustado para o logo novo entre 901 e 1180 px
- 21/11/2026 (3ª ronda): hero e faixa âmbar com "residências e negócios" / "Autonomia solar para casas e negócios"; fundo do Quem somos com recorte novo da mesma foto (`faixa-paineis-foco-*`), mais painéis e menos telhado. A `faixa-paineis-1200.webp` fica só como base da imagem de partilha
