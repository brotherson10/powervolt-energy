# Powervolt Energy · landing page (cliente)

> Projeto de cliente dentro do workspace `mazyos-AI`. As regras gerais vêm do
> plugin MazyOS e do `CLAUDE.md` da raiz. Este arquivo guarda o que é
> específico da Powervolt.

## O cliente

- **Empresa:** Powervolt Energy, de Portugal. Escritório e armazém em Azambuja
- **Zona de atuação (confirmada pelo Brotherson, 11/2026):** instala em todo o país (já fez obras em Lisboa, Margem Sul, Algarve, Leiria...). No site não aparece em texto (a faixa de confiança tem só 3 itens); fica no JSON-LD como `areaServed: Portugal` e na descrição para o Google. A morada e os contactos ficam só no final da página
- **O que faz:** energia solar para autoconsumo, baterias de armazenamento e backup, e carregamento de veículos elétricos, para residências e pequenos negócios
- **Contactos (fonte: ficha do Google Maps, 11/2026):**
  - Morada: `R. José Clemente Nº 4 R/C LJDT, 2050-260 Azambuja` (escrever sempre exatamente assim)
  - Telemóvel e WhatsApp: (+351) 930 646 567 · `tel:+351930646567` · `wa.me/351930646567`
  - Email: powervoltenergy.pt@gmail.com
  - Horário: segunda a sexta, 08:00 às 17:00; sábado e domingo encerrado
  - Instagram: @powervolt.pt
  - Ficha Google: https://maps.google.com/?cid=16781300282682607744 (link curto do cliente: https://share.google/KnP4vbGHlJ8d1FwBz)
  - Coordenadas: 39.0735905, -8.8639821 · Plus Code 34FP+CC Azambuja
- A morada antiga (Rua Canal do Tejo, G-66, Bobadela, Loures) **não deve aparecer** em lado nenhum

## Stack e deploy

- Site estático: `index.html`, `style.css`, `script.js`. Sem build e sem dependências
- Imagens usadas pelo site em `assets/img/web/` (WebP em 480 e 900 px de largura, OG 1200x630, logo recortado). Os JPEG originais em `assets/img/` ficam como fonte
- `favicon.png`, `apple-touch-icon.png`, `robots.txt`, `sitemap.xml` na raiz
- CSS e JS são chamados com `?v=N`. **Subir o número a cada alteração** desses ficheiros, para quem visita não ficar com a versão em cache
- Domínio principal: **https://powervoltenergy.pt/** (o Brotherson gere o domínio). `www` redireciona para lá. O `powervolt-energy.netlify.app` também responde; o `canonical` aponta para o domínio
- Deploy: Netlify, automático a partir do `main` do repositório `brotherson10/powervolt-energy`. **Push publica o site.** Commit e push são feitos aqui, nunca no workspace
- Para ver localmente: `python -m http.server 8123` nesta pasta

## Identidade visual (do CLIENTE)

**Não usar `../../identidade/design-guide.md`.** Aquela é a identidade do Brotherson e da ByTen. Este site segue a marca da Powervolt:

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
- Logo: `assets/img/web/logo-powervolt.webp` (original em `assets/img/logo-powervolt.png`)

## Idioma e escrita do site

- **O site é em português de Portugal** (`lang="pt-PT"`): "poupança", "fatura", "contacto", "telemóvel", "equipa". Não usar termos do português do Brasil
- O site fala em nome da Powervolt, não do Brotherson. Tom claro, próximo e sem jargão, com a voz da empresa
- Nunca usar travessão ("—") no texto do site
- Nunca inventar números, depoimentos, certificações ou obras
- As opiniões no site são reais, copiadas da ficha do Google (Alfonso Larrosa, Jose Carlos Simao, Carlos Ribeiro), com autorização dada em 11/2026. Não pôr `aggregateRating` no JSON-LD (o Google não aceita avaliações vindas de outra plataforma)

## Estrutura atual

`#inicio` (hero com a foto de uma obra como fundo, da metade para a direita, e degradê escuro atrás do texto; no telemóvel a foto fica por trás de tudo) → faixa âmbar de confiança → `#sobre` (foto de fundo) → `#solucoes` (3 cards com orçamento por WhatsApp) → `#processo` (4 passos, sem numeração) → `#obras` (galeria) → `#opinioes` (nota Google + 3 opiniões) → `#contacto` (contactos, horário, mapa) → rodapé

SEO local: `title` e `description` com Azambuja, `canonical`, Open Graph, JSON-LD `LocalBusiness` (morada, geo, horário, `hasMap`, `sameAs`), mapa incorporado.

## Pendências

- [ ] Confirmar com o cliente os textos da secção "Como trabalhamos" (foram escritos a partir do texto do "Sobre")
- [ ] Fotos de mais obras e a foto da loja nova em Azambuja (a ficha do Google tem uma)
- [ ] Rever a nota e as opiniões de vez em quando, se entrarem novas no Google
- [ ] Google Meu Negócio: confirmar quem gere a ficha, pôr categorias, serviços, fotos e descrição
- [ ] Depois, avaliar Google Ads

## Histórico

- Landing page criada pelo Brotherson e entregue
- 11/11/2026: morada nova (Azambuja), dados da ficha do Google (horário, opiniões, mapa), refatoração visual completa, WhatsApp, SEO local (canonical, Open Graph, JSON-LD, sitemap) e imagens otimizadas (de ~1,1 MB para ~0,55 MB de imagens na página inteira, com a galeria em lazy load)
- 11/11/2026 (2ª ronda): fundos alternados entre secções (claro, âmbar, foto, grafite), fotos com cantos retos na proporção original, cards com cantos menores, numeração tirada de "Como trabalhamos"
