# language: pt

Funcionalidade: Carrinho de compras

  Cenário: CT09 - Adicionar item ao carrinho 
    Dado que acesso o site https://bstackdemo.com/
    Quando adiciono um item ao carrinho
    Então o sistema deve exibir uma mensagem de sucesso
  
  Cenário: CT10 - Adicionar mais de um item ao carrinho 
    Dado que acesso o site https://bstackdemo.com/
    Quando adiciono masi de um item ao carrinho
    Então o sistema deve exibir uma mensagem de sucesso
  
  Cenário: CT11 - Remover item do carrinho
    Dado que o usuário possui ao menos um item adicionado ao carrinho
    Quando o usuário abrir o carrinho de compras
    E clicar no botão de remover (X) do item
    Então o item não deve mais ser exibido no carrinho
    E o carrinho deve refletir corretamente a atualização
  
  Cenário: CT12 - Remover todos os itens do carrinho
    Dado que o usuário possui ao menos um item adicionado ao carrinho
    Quando o usuário abrir o carrinho de compras
    E clicar no botão de remover (X) de cada item presente no carrinho
    Então nenhum item deve mais ser exibido no carrinho
    E o carrinho deve refletir corretamente a atualização
    E deve exibir a mensagem "Carrinho vazio"
  
  Cenário: CT13 - Adicionar item favorito ao carrinho
    Dado que o usuário possui pelo menos um produto disponível para favoritar
    Quando o usuário selecionar um produto na página de listagem
    E marcar o produto como favorito
    E clicar no botão "Adicionar ao carrinho"
    Então o produto favoritado deve ser exibido no carrinho
    E o carrinho deve refletir corretamente a atualização

  Cenário: CT14 - Fechar pedido com carrinho vazio
    Dado que o usuário possui o carrinho vazio
    Quando o usuário acessar o carrinho
    E tentar prosseguir para o checkout
    Então o sistema deve impedir a finalização do pedido
    E o usuário deve ser direcionado para a tela de produtos

  Cenário: CT15 - Realizar refresh com itens no carrinho
    Dado que o usuário possui pelo menos um item adicionado ao carrinho
    Quando o usuário atualizar a página
    Então os itens adicionados ao carrinho devem permanecer
    E as quantidades e valores devem estar corretos
  
  Cenário: CT16 - Realizar logout com item no carrinho
    Dado que o usuário possui pelo menos um item adicionado ao carrinho
    Quando o usuário realizar logout
    E realizar login novamente com o mesmo usuário
    E acessar o carrinho
    Então os itens previamente adicionados devem permanecer no carrinho
    E as quantidades e valores devem estar corretos
  
  Cenário: CT18 - Adicionar item sem estar logado
    Dado que o usuário não está autenticado no sistema
    E existem produtos disponíveis na página de listagem
    Quando o usuário acessar a URL "https://bstackdemo.com/"
    E selecionar um produto na página de listagem
    E clicar no botão "Adicionar ao carrinho"
    Então o sistema deve redirecionar o usuário para a tela de login