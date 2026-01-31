# language: pt

Funcionalidade: Carrinho de compras

  Cenário: Adicionar item ao carrinho com sucesso
    Dado que acesso o site https://bstackdemo.com/
    Quando adiciono um item ao carrinho
    Então o sistema deve exibir uma mensagem de sucesso