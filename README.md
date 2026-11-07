# Valver Dental

Website em espanhol para a Valver Dental, em Málaga. Identidade em verde oliva e creme, tipografia editorial e composição responsiva.

## Conteúdo atual

Hero com retrato em janela e detalhes botânicos; essência da clínica; seis tratamentos em cards; instalações com galeria horizontal animada das seis fotos fornecidas; diferenciais; contato e rodapé. A seção de avaliações foi removida. Os componentes de avaliações permanecem arquivados no código, sem montagem na página.

Os tratamentos avançam por arrasto, setas, indicadores e reprodução automática com tempo de leitura. O scroll da página permanece independente dos cards. Animações respeitam `prefers-reduced-motion`.

## Executar

Os arquivos compilados já estão incluídos. Na raiz do repositório:

```sh
python3 -m http.server 8790 --bind 127.0.0.1
```

Abra http://127.0.0.1:8790/.

Para desenvolver as ilhas React:

```sh
npm ci
npm run dev
```

A prévia de desenvolvimento abre em http://127.0.0.1:8791/.

```sh
npm run typecheck
npm run build
```

O build atualiza `assets/runtime/hero-parallax.js` e `.css`. Os demais arquivos HTML/CSS/JS são servidos diretamente da raiz. Não há pasta `dist` com o site completo.

## Estrutura

- `index.html`, `site.css`, `site.js`: conteúdo, layout, navegação e contatos.
- `config.js`: dados públicos da clínica.
- `tokens.css`, `components.css`, `design-system.html`: identidade e guia visual.
- `src/`, `components/ui/`, `demos/`, `lib/`: ilhas React e componentes.
- `assets/brand`, `assets/fonts`, `assets/photos`: marca, fontes locais e imagens.
- `assets/runtime`: build distribuído junto ao site.
- `docs/BRANCHES.md`: organização das cinco branches e dos 50 commits de importação.
- `docs/PUBLISHING.md`: verificação e entrega para hospedagem estática.
- `docs/HISTORY.md`: registro histórico anterior à importação.

## Contatos

- WhatsApp: +34 604 970 085.
- Instagram: https://www.instagram.com/valverdental_/.
- E-mail: valverdentalmalaga@gmail.com.
- Endereço: Calle Omar, 14, 29004 Málaga.

Dados fornecidos pelo responsável pelo projeto. `bookingUrl` permanece vazio; não existe agendamento ou envio de mensagens automático. O visitante escolhe o canal externo.

## Imagens e licenças

As fotografias ilustrativas foram geradas com IA e não representam pacientes, equipe ou instalações reais. A seção “Nuestras instalaciones” usa a foto da fachada fornecida pelo responsável pelo projeto. O logotipo foi fornecido para este projeto. As licenças das fontes estão em `assets/fonts`; a origem dos demais assets está documentada em `assets/ASSETS.md`. Este repositório não concede uma licença geral sobre a marca e as imagens.

## Histórico Git

Este é o primeiro versionamento do estado existente do site. Os 50 commits foram criados durante a importação, com datas reais e descrições por grupo de arquivos; não representam 50 etapas anteriores de desenvolvimento. As cinco branches temáticas são sequenciais. A `main` contém a entrega completa.

## Galeria de instalações · 4.10.0

A seção apresenta texto centralizado acima de duas faixas de fotografias que deslizam em sentidos opostos. Usa o componente `InfiniteSlider` fornecido para o projeto, adaptado em `components/ui/infinite-slider-horizontal.tsx` com Motion e `react-use-measure`. As seis fotografias locais e legendas em espanhol são definidas em `components/ui/facilities-gallery.tsx`.

Cada faixa entra suavemente na viewport e mantém velocidade linear. O período é medido em uma única cópia mais o espaçamento, evitando saltos na repetição. A reprodução conserva a fase ao redimensionar ou retomar a aba e fica suspensa fora da viewport ou com a aba oculta. Passar o mouse não pausa nem altera a velocidade.

Com movimento reduzido, as fotografias ficam estáticas com rolagem horizontal nativa. A segunda faixa e as cópias de repetição não duplicam o conteúdo para leitores de tela. Sem JavaScript, a fachada e o texto permanecem disponíveis. O scroll vertical da página é livre.

O componente de arrasto anterior permanece no código como referência, sem importação na entrega atual. Para compilar as ilhas, execute `npm ci` e `npm run build`.
