# Dra. Jaqueline Calisse — Site institucional

Prévia de site institucional para a Dra. Jaqueline Calisse (Biomédica Esteta, CRBM | SP 27988), harmonização facial em Itu/SP. Construído a partir da análise estratégica do perfil [@dra.jaquelinecalisse](https://www.instagram.com/dra.jaquelinecalisse/) — copy e estrutura seguem a voz e o posicionamento reais dela, não um template genérico de estética.

**Correção importante (2026-08-25):** o termo "Harmonização Orofacial" foi removido de todos os lugares onde funcionava como título/especialidade/denominação profissional (title da página, meta description, Open Graph, JSON-LD, identificação no Hero) e do nome do procedimento na seção Procedimentos. Motivo: "Harmonização Orofacial" é a denominação de uma especialidade reconhecida pelo Conselho Federal de Odontologia — não há confirmação de que a Dra. Jaqueline (Biomédica, CRBM) esteja formalmente autorizada a usar essa denominação específica, e as atribuições da Biomedicina Estética não devem ser presumidas equivalentes às da especialidade odontológica. O termo genérico "harmonização facial" (não regulamentado como especialidade específica) substituiu os usos anteriores. Ver pendência correspondente abaixo.

**Conceito central da página:** *"Harmonização que devolve ao rosto o descanso que a pessoa já sente por dentro — sem apagar quem ela é."*

## Estrutura do projeto

```
dra-jaqueline-calisse/
├── index.html               # página única (single-page)
├── css/style.css             # paleta, tipografia e layout
├── js/main.js                 # reservado para interações futuras
├── assets/images/
│   ├── retrato-03.png           # foto pessoal — em uso no Hero
│   ├── retrato-04.png           # foto pessoal — em uso em "Sobre"
│   ├── retrato-05.png           # foto pessoal — em uso no CTA final
│   ├── retrato-01.jpg           # foto pessoal — sobra, não usada no momento
│   ├── retrato-02.png           # foto pessoal — sobra, não usada no momento
│   ├── antes-depois-01.png      # em uso em "Resultados"
│   ├── antes-depois-02.png      # em uso em "Resultados"
│   └── antes-depois-03.png      # em uso em "Resultados"
└── README.md
```

Todas as fotos vieram da pasta `Imagens/` fornecida diretamente pelo usuário (fora do controle de versão, listada no `.gitignore`) e foram copiadas para `assets/images/` com nomes descritivos. Há 5 retratos pessoais no total — 3 estão em uso (Hero, Sobre, CTA final) e 2 ficam disponíveis como sobra para uma futura seção ou substituição. Procedimentos ainda não tem fotos próprias (segue com cards só de texto).

## Rodar localmente

Não há build step — é HTML/CSS/JS puro. Abra `index.html` direto no navegador, ou sirva com qualquer servidor estático:

```bash
npx serve .
```

## Identidade visual (v2 — redesign premium/editorial, 2026-08-25)

| Token | Valor |
|---|---|
| Fundo | `#FAF8F5` |
| Fundo alternativo | `#F1EAE1` |
| Tinta (texto principal) | `#211D1A` |
| Tinta suave | `#5C5650` |
| Taupe | `#8A6F5C` |
| Destaque (uso moderado) | `#A9785C` |
| Linhas finas | `#E4DBCE` |
| Título | Fraunces (serifada editorial) |
| Corpo | Jost (sans-serif humanista) |

Paleta neutra (off-white/bege/taupe), sem rosa genérico — ainda é **sugestão de trabalho**, não confirmada por inspeção visual real do feed.

## Redesign v2 (2026-08-25)

Reformulação completa a pedido do usuário: elevar percepção de autoridade, sofisticação e conversão, sem descaracterizar o conceito original. Principais mudanças:

- **Header fixo** com navegação por âncora (Sobre, Filosofia, Procedimentos, Resultados, Avaliações, Localização) + menu mobile em hambúrguer
- **Hero reestruturado** com identificação (nome + CRBM + cidade), headline, CTA primário/secundário e marcas de confiança discretas
- **Nova seção "Posicionamento"** (statement) substituindo a antiga "Abertura emocional" — evita repetição com a seção de Filosofia
- **Filosofia** reformulada em 3 princípios (Preservar/Equilibrar/Valorizar) sobre fundo escuro, tipografia grande, sem cards
- **Procedimentos** viraram lista editorial (linhas finas) em vez de grid de cards
- **Resultados** com fundo escuro, galeria maior, legendas discretas
- **WhatsApp com mensagem pré-preenchida** em todos os CTAs (header, hero, método, procedimentos, resultados, CTA final) + **barra fixa no rodapé mobile**
- **SEO**: Open Graph, Twitter Card, canonical, dados estruturados (JSON-LD `MedicalBusiness`, usando só dados já confirmados — endereço, telefone, avaliação do Google)
- **Micro-interações**: fade-in discreto ao rolar (`.reveal`), com **progressive enhancement real** — o conteúdo só fica invisível por padrão quando a classe `.js` é aplicada no `<html>` (script inline no `<head>`); sem JavaScript, ou se o `IntersectionObserver` falhar por qualquer motivo, existe um `setTimeout` de segurança de 2s que força tudo a ficar visível. Conteúdo nunca fica travado invisível.
- Seção "Sobre" não expõe lacunas de informação (formação, anos de experiência) publicamente — a decisão de design e o motivo estão documentados em comentário HTML no próprio `index.html`, e as pendências reais continuam listadas abaixo.

## Localização e avaliações

- **Endereço:** R. José Bruni, 578, Itu - SP, 13304-080 (confirmado via Google Maps, telefone da ficha bate com o WhatsApp já usado no site). Exibido no rodapé e na seção "Localização", com mapa incorporado (embed público do Google Maps, sem chave de API).
- **Avaliações:** nota 5,0 com apenas **2 avaliações no Google** — amostra ainda pequena para ser uma prova social forte (nota interna; a página pública não faz essa ressalva ao visitante). Exibidas as duas: Talita Lima (texto parcial, o Google só libera o trecho completo com login) e Sirlei Rossi (5 estrelas, sem comentário escrito). Nada foi inventado ou completado além do que a ficha pública mostra.
- **Categoria no Google:** a ficha lista o negócio como "Esteticista". Por instrução do usuário, o site trata a profissional como **Biomédica Esteta** — título já aplicado em "Sobre" e no rodapé.

## Revisão v3 (2026-08-25) — refinamento de conteúdo e limpeza de placeholders

Segunda passada de revisão sobre o redesign v2, focada em dois pontos: remover qualquer texto provisório visível ao visitante, e revisar pontuação/naturalidade de todos os textos.

**Placeholders removidos da interface pública** (ficam só como comentário `TODO` no código ou registrados aqui):
- Card "Lábios": removida a linha "Detalhes a confirmar com a profissional." — o card agora mostra só nome, descrição curta e CTA, sem expor a lacuna ao visitante. `TODO` correspondente adicionado no `index.html`.
- Seção "Resultados": removida a nota "publicação sujeita a confirmação de autorização por escrito..." — a autorização já foi confirmada pelo usuário (2026-08-25), e o registro ficou em comentário HTML na própria seção em vez de aparecer para o visitante.
- Seção "Avaliações": removido o texto "amostra ainda pequena" — é uma ressalva interna nossa, não algo que uma página premium deveria admitir ao visitante.

**Pontuação e naturalidade:** revisão de travessões (`—`) usados para conectar ideias dentro de frases, trocados por vírgula ou ponto quando ficava mais natural (ex.: bio, filosofia, seção "Sobre"). Travessões mantidos apenas em usos tipográficos legítimos (separador de título/label, como "Itu — SP" em rótulos curtos). Removidas aspas duplas redundantes em trechos que já usavam itálico para destaque (seção "Sobre").

**Renomeação:** nav "Abordagem" → "Filosofia" (id da seção também mudou de `#abordagem` para `#filosofia`); se algum link externo já aponta para `#abordagem`, vai quebrar — não identificamos nenhum até agora.

**CTAs atualizados** em toda a página para textos mais diretos: "Quero conversar" (hero), "Conversar" (header/nav), "Quero entender o que faz sentido para mim" (método), "Quero conversar no WhatsApp" (CTA final), "Conversar no WhatsApp" (barra fixa mobile). Hero perdeu o CTA secundário ("Conhecer a abordagem") para ficar mais limpo, no espírito de campanha editorial.

### Texto padrão para uso futuro (só se necessário)

Se um dia for preciso avisar o visitante que algum conteúdo pode mudar (ex.: se a seção de Procedimentos crescer com informação ainda não validada), usar este texto discreto em vez de inventar dado ou deixar placeholder cru:

> "Informações sobre procedimentos, indicações e disponibilidade podem ser atualizadas conforme avaliação profissional e critérios específicos de cada atendimento. Para informações personalizadas, entre em contato diretamente com a Dra. Jaqueline."

Usar com moderação — não colocar em toda seção, sob risco de a página parecer incompleta.

## Revisão v4 (2026-08-25) — refinamento pontual + correção de denominação profissional

Rodada de refinamento sobre o redesign v2/v3 (sem reestruturar seções):

- **Bug real de mobile/desktop corrigido:** os títulos com quebra de linha fixa (`<br>`) — Hero, "Posicionamento" e CTA final — forçavam cada frase a caber em exatamente 1 linha. Em telas mais estreitas que o esperado (inclusive no desktop, porque Hero e CTA final são grids de 2 colunas, então a coluna de texto é bem mais estreita que a viewport inteira), isso fazia cada frase quebrar de novo por dentro, dobrando o número de linhas de forma desigual (chegou a 6 linhas no Hero mobile). Trocado por reflow natural (`<span class="line">` sem quebra forçada) + ajuste fino do tamanho da fonte do Hero. Verificado via medição de layout real (não só leitura de estrutura) em 375px e 1280px.
- Frase "o que você fez?": ajustada para "ouvir *o que você fez?*" / "ouvir *você está tão bem, descansou?*", conforme direção pedida.
- Descrição de "Lábios" reescrita (deixou de ser só "Harmonização labial.") e ganhou a mesma estrutura das outras 3 (descrição + público-alvo), removendo a assimetria visual que esse card tinha antes.
- Pequena revisão de naturalidade: repetição de "isso...isso" na Filosofia corrigida.
- Limpeza de CSS morto (`.results__note`, `.procedure--brief`) que sobrou de rodadas anteriores.

### Correção de denominação profissional (mesma data, após revisão do usuário)

O usuário identificou um problema mais sério: eu vinha usando "Harmonização Orofacial" como se fosse a especialidade/título formal da Dra. Jaqueline (no `<title>`, meta description, Open Graph, JSON-LD, e principalmente ao lado de "Biomédica Esteta" no identificador do Hero). Esse termo é a denominação de uma especialidade reconhecida pelo Conselho Federal de **Odontologia** — a Dra. Jaqueline é Biomédica (CRBM), e não há confirmação de que ela esteja formalmente autorizada a usar essa denominação específica. As atribuições da Biomedicina Estética não devem ser presumidas equivalentes às da especialidade odontológica.

**Correção aplicada:** removido "Harmonização Orofacial" de todo contexto de título/identidade/dado estruturado. O Hero agora identifica só "Biomédica Esteta" (sem termo pareado). Onde o texto descreve a atividade (não o título profissional), troquei por "harmonização facial", termo genérico de mercado sem associação a uma especialidade regulamentada específica — inclusive o nome do procedimento na seção Procedimentos, que era "Harmonização Orofacial" e virou "Harmonização Facial". Nova pendência registrada abaixo.

## Pendências antes de publicar

Estas informações não foram encontradas na análise do Instagram/Google e **não foram inventadas** — precisam ser confirmadas com a profissional antes do site ir ao ar:

- [ ] **Denominação correta dos procedimentos que ela realiza** — confirmar se "harmonização facial" é o termo que ela usa/prefere, e se "Harmonização Orofacial" é uma denominação que ela está formalmente autorizada a usar (ver correção acima)
- [ ] Formação completa (graduação, pós-graduações, cursos)
- [ ] Anos de experiência / tempo de atuação
- [ ] E-mail profissional (além do WhatsApp)
- [ ] Horários de atendimento — Google Maps mostra só "Abre às 09:00", sem grade completa da semana
- [ ] Fotos de procedimentos e do ambiente do consultório (a seção Procedimentos segue só com texto)
- [x] ~~Autorização por escrito das 3 pacientes das fotos de antes/depois~~ (`antes-depois-01/02/03.png`) — confirmada pelo usuário em 2026-08-25
- [x] ~~Autorização explícita da Dra. Jaqueline para publicar os retratos pessoais~~ (`assets/images/retrato-*.png/jpg`) — confirmada pelo usuário em 2026-08-25
- [ ] Depoimentos reais adicionais, com autorização de nome/imagem (hoje só há os 2 do Google)
- [ ] Detalhamento do procedimento "Lábios"
- [ ] Nome oficial da clínica/consultório, se houver
- [ ] Confirmação da paleta de cores real da marca
- [ ] Confirmar com a profissional o uso do número de WhatsApp já usado no CTA (`wa.me/5511933163751`, público na bio dela) antes de publicar

Use o [checklist de onboarding](../scratchpad/checklist_onboarding_cliente.docx) do projeto pra coletar tudo isso numa única conversa com ela.

## Publicar no GitHub

```bash
git init
git add .
git commit -m "Prévia inicial do site institucional"
git branch -M main
git remote add origin <URL_DO_REPOSITORIO>
git push -u origin main
```
