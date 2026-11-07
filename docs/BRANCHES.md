# Branches da importação

O histórico registra a importação do site existente, com 50 commits não vazios e mensagens detalhadas. Não foram alteradas datas nem simuladas etapas antigas de desenvolvimento.

| Branch | Commits próprios | Escopo |
| --- | ---: | --- |
| `01-fundamentos` | 10 | Ferramentas, tokens, componentes básicos e documentação inicial |
| `02-identidade-visual` | 10 | Marca, fontes e retratos |
| `03-midia-tratamentos` | 10 | Fotografias, artes dos serviços e fundo da essência |
| `04-componentes` | 10 | Ilhas React, parallax, carrosséis e módulos arquivados |
| `05-site-entrega` | 10 | Página, estilos, contatos, guia, proveniência e build |

Cada branch começa onde a anterior terminou; portanto, o total acumulado é 10, 20, 30, 40 e 50 commits. Elas são marcos da importação, não cinco features independentes. Etapas intermediárias podem não executar o site inteiro. Use `main` para executar, alterar e publicar a versão completa.

Ao concluir a importação, `main` apontava para o mesmo commit final de `05-site-entrega`. As alterações posteriores do site são commits novos na `main`; as cinco branches preservam os marcos da importação. Para próximas alterações, crie novas branches a partir de `main` e abra pull requests com mudanças e validações concretas.
