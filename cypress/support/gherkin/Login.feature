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

Cenário: CT04 - Login com password inválida
  Dado que o usuário acessa a página de login
  Quando informa um username válido e uma password inválida
  E clica em "Log In"
  Então o sistema deve exibir uma mensagem de credenciais inválidas
  E impedir o acesso do usuário

Cenário: CT05 - Login com campos vazios
  Dado que o usuário acessa a página de login
  Quando não informa username nem password
  E clica em "Log In"
  Então o sistema deve exibir uma mensagem de validação
  E impedir o acesso do usuário

Cenário: CT06 - Login com campo username vazio
  Dado que o usuário acessa a página de login
  Quando não informa o username e informa uma password válida
  E clica em "Log In"
  Então o sistema deve exibir uma mensagem de credenciais inválidas
  E impedir o acesso do usuário

Cenário: CT07 - Login com campo password vazio
  Dado que o usuário acessa a página de login
  Quando informa um username válido e não informa a password
  E clica em "Log In"
  Então o sistema deve exibir uma mensagem de credenciais inválidas
  E impedir o acesso do usuário

Cenário: CT08 - Login com usuário bloqueado
  Dado que o usuário acessa a página de login
  Quando seleciona um username bloqueado e uma password válida
  E clica em "Log In"
  Então o sistema deve exibir uma mensagem informando que o usuário está bloqueado
  E impedir o acesso à área logada
