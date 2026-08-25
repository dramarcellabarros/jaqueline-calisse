# Dra. Jaqueline Calisse — Site institucional

Prévia de site institucional para a Dra. Jaqueline Calisse (Biomédica Esteta, CRBM | SP 27988), harmonização orofacial em Itu/SP. Construído a partir da análise estratégica do perfil [@dra.jaquelinecalisse](https://www.instagram.com/dra.jaquelinecalisse/) — copy e estrutura seguem a voz e o posicionamento reais dela, não um template genérico de estética.

**Conceito central da página:** *"Harmonização que devolve ao rosto o descanso que a pessoa já sente por dentro — sem apagar quem ela é."*

## Estrutura do projeto

```
dra-jaqueline-calisse/
├── index.html               # página única (single-page)
├── css/style.css             # paleta, tipografia e layout
├── js/main.js                 # reservado para interações futuras
├── assets/images/
│   ├── retrato-01.jpg          # foto pessoal (fornecida) — usada em "Sobre"
│   └── retrato-02.png          # foto pessoal (fornecida) — usada no Hero e no CTA final
└── README.md
```

As duas fotos vieram da pasta `Imagens/` fornecida diretamente pelo usuário (fora do controle de versão) e foram copiadas para `assets/images/` com nomes descritivos. Procedimentos e Resultados ainda usam placeholders visuais — não há fotos de procedimento/antes-depois disponíveis ainda.

## Rodar localmente

Não há build step — é HTML/CSS/JS puro. Abra `index.html` direto no navegador, ou sirva com qualquer servidor estático:

```bash
npx serve .
```

## Identidade visual

| Token | Valor |
|---|---|
| Cor principal | `#8C6E5D` |
| Cor secundária | `#F5EDE6` |
| Fundo | `#FFFFFF` / `#FAF8F6` |
| Destaque | `#B98B6E` |
| Texto | `#2B2420` |
| Título | Fraunces (serifada editorial) |
| Corpo | Jost (sans-serif humanista) |

Paleta é **sugestão de trabalho**, não confirmada por inspeção visual real do feed — validar com fotos reais antes de publicar.

## Localização e avaliações

- **Endereço:** R. José Bruni, 578, Itu - SP, 13304-080 (confirmado via Google Maps, telefone da ficha bate com o WhatsApp já usado no site). Exibido no rodapé e na seção "Localização", com mapa incorporado (embed público do Google Maps, sem chave de API).
- **Avaliações:** nota 5,0 com apenas **2 avaliações no Google** — amostra ainda muito pequena para ser uma prova social forte. Exibidas as duas: Talita Lima (texto parcial — o Google só libera o trecho completo com login) e Sirlei Rossi (5 estrelas, sem comentário escrito). Nada foi inventado ou completado além do que a ficha pública mostra.
- **Categoria no Google:** a ficha lista o negócio como "Esteticista". Por instrução do usuário, o site trata a profissional como **Biomédica Esteta** — título já aplicado em "Sobre" e no rodapé.

## Pendências antes de publicar

Estas informações não foram encontradas na análise do Instagram/Google e **não foram inventadas** — precisam ser confirmadas com a profissional antes do site ir ao ar:

- [ ] Formação completa (graduação, pós-graduações, cursos)
- [ ] Anos de experiência / tempo de atuação
- [ ] E-mail profissional (além do WhatsApp)
- [ ] Horários de atendimento — Google Maps mostra só "Abre às 09:00", sem grade completa da semana
- [ ] Fotos de procedimentos e do ambiente do consultório (Procedimentos e Resultados ainda usam placeholders)
- [ ] Fotos de antes/depois com autorização de uso por escrito
- [ ] Depoimentos reais adicionais, com autorização de nome/imagem (hoje só há os 2 do Google)
- [ ] Detalhamento do procedimento "Lábios"
- [ ] Nome oficial da clínica/consultório, se houver
- [ ] Confirmação da paleta de cores real da marca
- [ ] Confirmar com a profissional o uso do número de WhatsApp já usado no CTA (`wa.me/5511933163751`, público na bio dela) antes de publicar
- [ ] Autorização explícita para publicar as 2 fotos de retrato fornecidas (`assets/images/`) no site

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
