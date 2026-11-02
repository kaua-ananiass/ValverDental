# Entrega e publicação

## Validar a versão completa

```sh
npm ci
npm run build
python3 -m http.server 8790 --bind 127.0.0.1
```

Verifique navegação, rolagem independente dos cards, contatos, teclado e layout móvel. Não envie mensagens nem efetue reservas ao testar; confira os destinos dos links.

## Hospedagem estática

Sirva a raiz do repositório com `index.html` como entrada. Inclua os arquivos `config.js`, CSS, JS e a pasta `assets/`. O Vite só compila as ilhas React para `assets/runtime`; esse diretório sozinho não é o site completo.

Não publique `node_modules`, arquivos `.env`, logs ou relatórios locais. Não há backend a configurar. Os contatos cadastrados em `config.js` são dados públicos, não credenciais.

## GitHub

O repositório é privado na criação. Fazer push não publica automaticamente o website nem altera sua hospedagem atual. Para hospedar, configure um provedor estático com a raiz como diretório de publicação e `npm ci && npm run build` como build, se suportado.

As avaliações fictícias estão desativadas e a dobra removida. Só reative avaliações com conteúdo real, autorizado e atribuição verificada. Troque as fotos ilustrativas por fotografias próprias caso o conteúdo deva representar a clínica real.
