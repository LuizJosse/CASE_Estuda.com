# Projeto de Automação - BStack Demo

## Descrição do Projeto
Este projeto consiste na automação de testes end-to-end do site [BStack Demo](https://bstackdemo.com/) utilizando **Cypress**.  
Os testes cobrem funcionalidades como:  
- Login de usuário  
- Adicionar produtos ao carrinho  

O objetivo é garantir que o comportamento do sistema esteja correto em diferentes cenários de uso.

---

## Pré-requisitos
Antes de executar os testes, a máquina deve atender aos seguintes requisitos:

1. **Node.js** (versão **20.15.1** recomendada) – [Download Node.js](https://nodejs.org/en/)  
2. **npm** (geralmente instalado junto com Node.js)  
3. **Git** (para clonar o repositório) – [Download Git](https://git-scm.com/)  
4. **Cypress** versão **15.9.0**  
5. Extensões utilizadas:  
   - Cucumber  
   - Gherkin  
6. **Faker.js** (para geração de dados aleatórios nos formulários)  


> Observação: É necessário **acesso à internet**, pois o site BStack Demo é online.

---

## Instalação e Configuração

1. Clone o repositório:  

git clone https://github.com/LuizJosse/CASE_Estuda.com.git

Inicialize o projeto Node.js (se ainda não tiver package.json):
npm init -y
Instale o Cypress como dependência de desenvolvimento:
npm install cypress --save-dev

4. Modo GUI (Interface Gráfica)
 
npx cypress open

5. Executa todos os testes e gera logs no terminal.

 	 npx cypress run

6. Executar um teste específico

npx cypress run --spec "cypress/integration/login.feature"
