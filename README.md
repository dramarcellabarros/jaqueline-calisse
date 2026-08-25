# Dra. Jaqueline Calisse — Site institucional

Prévia de site institucional para a Dra. Jaqueline Calisse (biomédica, CRBM | SP 27988), harmonização orofacial em Itu/SP. Construído a partir da análise estratégica do perfil [@dra.jaquelinecalisse](https://www.instagram.com/dra.jaquelinecalisse/) — copy e estrutura seguem a voz e o posicionamento reais dela, não um template genérico de estética.

**Conceito central da página:** *"Harmonização que devolve ao rosto o descanso que a pessoa já sente por dentro — sem apagar quem ela é."*

## Estrutura do projeto

```
dra-jaqueline-calisse/
├── index.html          # página única (single-page)
├── css/style.css        # paleta, tipografia e layout
├── js/main.js            # reservado para interações futuras
├── assets/images/        # fotos reais — hoje vazio (ver Pendências)
└── README.md
```

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

## Pendências antes de publicar

Estas informações não foram encontradas na análise do Instagram e **não foram inventadas** — precisam ser confirmadas com a profissional antes do site ir ao ar:

- [ ] Formação completa (graduação, pós-graduações, cursos)
- [ ] Anos de experiência / tempo de atuação
- [x] ~~Endereço físico do consultório/clínica~~ — **R. José Bruni, 578, Itu - SP, 13304-080** (confirmado via Google Maps, ficha "Dra. Jaqueline Calisse", telefone (11) 93316-3751 bate com o WhatsApp já usado no site). Já incluído no rodapé do site.
- [ ] E-mail profissional (além do WhatsApp)
- [ ] Horários de atendimento — Google Maps mostra só "Abre às 09:00", sem grade completa da semana; confirmar com ela
- [ ] Fotos profissionais em alta resolução (dela + ambiente) — hoje todas as fotos do site são placeholders visuais (blocos de cor)
- [ ] Fotos de antes/depois com autorização de uso por escrito
- [ ] Depoimentos reais de pacientes, com autorização de nome/imagem
- [ ] Detalhamento do procedimento "Lábios"
- [ ] Nome oficial da clínica/consultório, se houver
- [ ] Confirmação da paleta de cores real da marca
- [ ] Confirmar com a profissional o uso do número de WhatsApp já usado no CTA (`wa.me/5511933163751`, público na bio dela) antes de publicar

**Divergência encontrada:** a ficha do Google Maps categoriza o negócio como "Esteticista", enquanto o Instagram/CRBM indica Biomedicina (CRBM | SP 27988). Pode ser só categorização genérica do Google (comum em fichas não totalmente configuradas pelo próprio profissional) — vale confirmar com ela antes de publicar, para não gerar inconsistência de registro profissional no site.

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
