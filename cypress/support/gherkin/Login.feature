# language: pt

Funcionalidade: Login de usuário

Cenário: Login com credenciais válidas
    Dado que o site https://bstackdemo.com/ esteja acessível
    E que o usuário possua credenciais válidas cadastradas no sistema
    Quando o usuário acessar a página de login
    E selecionar o username "demouser"
    E selecionar o password "testingisfun99"
    E clicar no botão "Login"
    Então o sistema deve autenticar o usuário com sucesso

Cenário: Login com credenciais inválidas
    Dado que o site https://bstackdemo.com/ esteja acessível
    E que o usuário não esteja autenticado
    Quando o usuário acessar a página de login
    E selecionar o username "luiz"
    E selecionar o password "1234"
    E clicar no botão "Login"
    Então o sistema deve exibir uma mensagem de erro informando que as credenciais são inválidas
    E impedir o acesso do usuário à área logada

    
