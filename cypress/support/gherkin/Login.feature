# language: pt

Funcionalidade: Login de usuário

Cenário: CT01 - Login com credenciais válidas
  Dado que o usuário acessa a página de login
  Quando informa credenciais válidas
  E clica em "Log In"
  Então o sistema deve autenticar o usuário com sucesso

Cenário: CT02 - Login com credenciais inválidas
  Dado que o usuário acessa a página de login
  Quando informa credenciais inválidas
  E clica em "Log In"
  Então o sistema deve exibir mensagem de erro
  E impedir o acesso

Cenário: CT03 - Login com username inválido
  Dado que o usuário acessa a página de login
  Quando informa um username inválido e uma password válida
  E clica em "Log In"
  Então o sistema deve exibir mensagem de credenciais inválidas
  E impedir o acesso

    
