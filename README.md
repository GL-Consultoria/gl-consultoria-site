# Site de serviços de TI

Página estática em português com Bootstrap 5.3.3 via CDN. Sem instalação, compilação ou servidor de aplicação. Abra `index.html` para visualizar; conexão com a internet é necessária para carregar Bootstrap.

## Personalizar

O nome **Conecta TI** é provisório. Substitua em `index.html` (marca, título, descrição e rodapé). Altere cores em `assets/style.css`. Os telefones fornecidos já estão nos links de ligação com WhatsApp e no formulário: (27) 99687-7498 e (27) 98126-1985. Confirme que ambos possuem WhatsApp ativo.

O formulário abre uma conversa com mensagem preenchida; o visitante precisa enviá-la no WhatsApp. Não existe envio de e-mail, armazenamento de dados ou backend. Os serviços são descrições editáveis: ajuste-os ao escopo real do seu negócio.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Extraia o ZIP e envie **o conteúdo da pasta site-ti** para a raiz do repositório. O arquivo `index.html` deve ficar na raiz, junto com `assets` e `.nojekyll`.
3. Acesse **Settings → Pages** no repositório.
4. Em **Build and deployment**, selecione **Deploy from a branch**.
5. Escolha a branch `main`, a pasta `/(root)` e clique em **Save**.
6. Aguarde a publicação e abra o endereço exibido pelo GitHub.

Os caminhos são relativos, permitindo uso em `usuario.github.io/repositorio/` ou domínio próprio. Não há necessidade de colocar senhas ou chaves no projeto.

## Estrutura

- `index.html`: conteúdo e componentes Bootstrap.
- `assets/style.css`: layout responsivo, ilustração CSS e animações.
- `assets/script.js`: formulário WhatsApp, animações e menu móvel.
- `assets/favicon.svg`: ícone do navegador.
- `.nojekyll`: publicação estática no Pages.

## Verificação

Validados a sintaxe JavaScript, os destinos de âncoras, as referências de arquivos e os telefones. Layout e interações devem ser conferidos no navegador após a publicação, inclusive em celular. Bootstrap é servido pelo jsDelivr; os links de contato usam o WhatsApp.
