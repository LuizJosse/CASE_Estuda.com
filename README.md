# Projeto de Automação - BStack Demo

## Descrição do Projeto
Este projeto consiste na automação de testes end-to-end do site [BStack Demo](https://bstackdemo.com/) utilizando **Cypress**.  
Os testes cobrem funcionalidades como:  
- Login de usuário  
- Adicionar produtos ao carrinho  
- Remover produtos do carrinho  
- Favoritar produtos  
- Fluxos de checkout  
- Validação após refresh e logout  

O objetivo é garantir que o comportamento do sistema esteja correto em diferentes cenários de uso.
---
## Pré-requisitos
Antes de executar os testes, a máquina deve atender aos seguintes requisitos:

1. **Node.js** (versão **20.15.1** recomendada)  
   [Download Node.js](https://nodejs.org/en/)  

2. **npm** (geralmente instalado junto com Node.js)  

3. **Git** (para clonar o repositório)  
   [Download Git](https://git-scm.com/)  

4. **Cypress** versão **15.9.0**  

5. Extensões utilizadas:  
   - Cucumber  
   - Gherkin  

6. **Faker.js** (para geração de dados aleatórios nos formulários)  

> Observação: É necessário **acesso à internet**, pois o site BStack Demo é online.
---

## Instalação

1. Clone este repositório:  
```bash
[https://github.com/LuizJosse/CASE_Estuda.com.git]
2.Entre na pasta do projeto:

cd seu-repositorio

Instale todas as dependências:

npm install

Isso instalará Cypress, Faker.js, Cucumber e todas as dependências do projeto.

Estrutura do Projeto

cypress/ → Contém todos os testes automatizados

e2e/ → Testes end-to-end

support/commands.js → Comandos customizados (login, seleção de itens, etc.)

cypress.config.js → Configurações do Cypress

package.json → Gerenciador de dependências e scripts

README.md → Este arquivo com instruções

Execução dos Testes
1. Abrir Cypress em modo interativo:
npx cypress open


Abre a interface do Cypress, permitindo escolher e executar os testes manualmente.

2. Executar todos os testes no modo headless:
npx cypress run

