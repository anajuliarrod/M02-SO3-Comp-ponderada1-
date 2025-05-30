# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

OrganizaAí

#### Autor do projeto

Ana Júlia Rodrigues Ribeiro

## Sumário

1. [Introdução](#c1)  
2. [Visão Geral da Aplicação Web](#c2)  
3. [Projeto Técnico da Aplicação Web](#c3)  
4. [Desenvolvimento da Aplicação Web](#c4)  
5. [Referências](#c5)  

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

&emsp; Atualmente, muitos profissionais enfrentam dificuldades em organizar suas atividades diárias de maneira eficiente, especialmente quando lidam com múltiplos projetos, prazos apertados e equipes diversas. Métodos tradicionais, como anotações em papel, planilhas manuais ou aplicativos não integrados, acabam gerando desorganização, perda de informações importantes e retrabalho constante.

&emsp; Usuários como Laura Martins, Felipe Andrade, Patrícia Souza, Ricardo Lima e Camila Ribeiro relatam que a falta de uma ferramenta prática e centralizada dificulta a gestão de suas rotinas e impacta diretamente na produtividade e na qualidade das entregas.

&emsp; Pensando nessas necessidades, será desenvolvida uma aplicação web focada na organização e gerenciamento de tarefas. A proposta é oferecer uma plataforma intuitiva, que permita o planejamento de atividades, acompanhamento de prazos, categorização de tarefas e colaboração em equipe, promovendo mais controle, eficiência e equilíbrio no dia a dia dos usuários.


---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01)
&emsp; As personas são representações fictícias dos usuários finais do sistema, criadas a partir de dados reais e observações. Elas são essenciais para guiar o desenvolvimento de soluções que atendam às necessidades, objetivos e comportamentos dos usuários. Neste projeto, foram desenvolvidas personas com base em perfis de profissionais que buscam aumentar sua produtividade e organização por meio de ferramentas digitais. O objetivo é entender suas dificuldades, necessidades e preferências no gerenciamento de tarefas diárias, de modo a criar um sistema que ofereça funcionalidades eficientes e intuitivas. Essas personas servirão de base para o desenvolvimento de um gerenciador de tarefas que resolva os principais desafios enfrentados pelos usuários. 


<div style="text-align: center;">
    <img src="assets/uxPersona1.jpg" alt="Persona 1" width="400">
    <br>
    <sub>Figura 1 - Persona 1</sub>
    <br>
    <sup>Fonte: Ana Ribeiro, Faculdade Inteli 2025</sup>
</div>


<div style="text-align: center;">
    <img src="assets/uxPersona2.jpg" alt="Persona 2" width="400">
    <br>
    <sub>Figura 2 - Persona 2</sub>
    <br>
    <sup>Fonte: Ana Ribeiro, Faculdade Inteli 2025</sup>
</div>


<div style="text-align: center;">
    <img src="assets/uxPersona3.jpg" alt="Persona 3" width="400">
    <br>
    <sub>Figura 3 - Persona 3</sub>
    <br>
    <sup>Fonte: Ana Ribeiro, Faculdade Inteli 2025</sup>
</div>



### 2.2. User Stories (Semana 01)
&emsp; As User Stories são uma técnica ágil utilizada para descrever funcionalidades do sistema a partir da perspectiva do usuário. Elas são essenciais para garantir que as soluções atendam às reais necessidades dos usuários e para orientar o time de desenvolvimento nas entregas de valor. Neste projeto, foram criadas User Stories para representar funcionalidades-chave que visam facilitar o gerenciamento de tarefas, promovendo mais organização, produtividade e eficiência no dia a dia dos profissionais. Essas histórias guiarão a implementação de ferramentas que atendem aos desafios identificados nas personas.

#### US01 - Cláudia Tavares
Como engenheira civil, quero uma ferramenta que me ajude a organizar e categorizar minhas tarefas de forma clara, para que eu consiga gerenciar meus projetos de maneira eficiente e sem me sobrecarregar.

#### US02 - Marcelo Antunes
Como engenheiro civil, quero um sistema que permita priorizar tarefas com base em níveis de urgência e importância, para que eu possa focar no que realmente é essencial e entregar melhores resultados.

#### US03 - Beatriz Lemos
Como engenheira de manutenção, quero uma plataforma rápida e prática para criar e acompanhar tarefas, para que eu possa otimizar meu tempo e me concentrar no trabalho em campo sem complicações.

&emsp; Após definir as User Stories, é fundamental analisar cada uma delas sob a ótica do modelo INVEST. Essa abordagem ajuda a garantir que as histórias sejam bem estruturadas, viáveis e entreguem valor ao usuário de forma eficaz. O modelo INVEST — que significa Independente, Negociável, Valiosa, Estimável, Pequena e Testável — oferece critérios claros para validar a qualidade de cada User Story, assegurando que sejam funcionais, fáceis de desenvolver e testáveis. A seguir, será realizada uma análise detalhada de uma das User Stories com base nesses critérios.

#### I – Independente
A User Story **US01** é independente, pois não depende de outras funcionalidades ou User Stories para ser desenvolvida. Ela descreve uma funcionalidade autossuficiente de organização e categorização de tarefas, podendo ser implementada de forma isolada.

#### N – Negociável
A funcionalidade descrita é negociável. O comportamento desejado — organizar e categorizar tarefas — pode ser discutido e ajustado conforme as necessidades do usuário ou do desenvolvimento do sistema, permitindo flexibilidade nas soluções.

#### V – Valiosa
Essa User Story é valiosa para o usuário, pois atende diretamente a uma necessidade de **Cláudia**: ter suas tarefas organizadas de maneira clara e eficiente, reduzindo a sobrecarga de trabalho e aumentando sua produtividade.

#### E – Estimável
A User Story é estimável, pois é possível calcular o esforço necessário para criar a funcionalidade. As ações de categorizar e organizar tarefas são claras e mensuráveis, permitindo uma estimativa razoável de tempo e recursos.

#### S – Pequena (Small)
A User Story é pequena o suficiente para ser concluída em um ciclo de desenvolvimento. Ela pode ser dividida em subtarefas como criação de categorias, adição de tarefas e visualização organizada, facilitando o processo de entrega.

#### T – Testável
A User Story é testável, pois é possível verificar se as tarefas estão sendo corretamente organizadas e categorizadas no sistema. Os testes podem simular diferentes fluxos de criação e organização de tarefas para validar a funcionalidade.


---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados  (Semana 3)
&emsp; Para que o sistema funcione de forma ágil e confiável, gerenciando usuários, tarefas e suas categorias, é essencial contar com uma estrutura de dados bem definida. Por isso, a escolha de um banco de dados relacional é fundamental, pois garante a integridade, a organização e o acesso rápido às informações que sustentam o OrganizaAí.
&emsp; A partir disso, segue abaixo o Diagrama Entidade-Relacionamento que mostra a estrutura completa do banco de dados, com todas as tabelas e suas relações. 


<div style="text-align: center;">
    <img src="../assets/modeloEntidadeRelacionamento.png" alt="Modelo Entidade Relacionamento" width="400">
    <br>
    <sub>Figura 4 - Modelo Entidade Relacionamento</sub>
    <br>
    <sup>Fonte: Ana Ribeiro, Faculdade Inteli 2025</sup>
</div>

&emsp; Observa-se, portanto, a estrutura das tabelas, seus atributos e os relacionamentos entre elas. A tabela USERS, por exemplo, armazena informações dos usuários, sendo que cada linha representa um usuário com seus respectivos dados. Ela possui um relacionamento do tipo 1:N (um para muitos) com a tabela TASKS, já que um único usuário pode estar associado a várias tarefas. Já a tabela CATEGORIES, que contém um único atributo — o nome da categoria —, também se relaciona com TASKS em uma relação 1:N, pois uma categoria pode classificar diversas tarefas.

&emsp; Abaixo está o esqauema e Banco de Dados do OrganizaAí com as tabelas e suas relações:

#### 1. Users e atribuição de Tasks
***Tabela: ```USERS```***
- Descrição: armazena informações dos usuários
- ```id``` (INT, PK)
- ```name```(VARCHAR)
- ```email```(VARCHAR)
- ```password```(VARCHAR)
- ```created_at```(TIMESTAMP)

***Tabela: ```TASKS```***
- Descrição: armazena informações das tasks
- ```id``` (INT, PK)
- ```title```(VARCHAR)
- ```description```(TEXT)
- ```due_date```(DATE)
- ```status```(VARCHAR)
- ```user_id```(INT)
- ```category_id```(INT, FK)
- ```created_at``` (TIMESTAMP)

***Relacionamento***: Um usuário pode estar vinculado a várias tarefas (relação 1:N com a tabela tasks).

#### 2. Tasks e categorias 

***Tabela: ```TASKS```***
- Descrição: armazena informações das tasks
- ```id``` (INT, PK)
- ```title```(VARCHAR)
- ```description```(TEXT)
- ```due_date```(DATE)
- ```status```(VARCHAR)
- ```user_id```(INT)
- ```category_id```(INT, FK)
- ```created_at``` (TIMESTAMP)

***Tabela: ```CATEGORIES```***
- Descrição: Armazena as categorias utilizadas para classificar as tarefas.
- ```id``` (INT, PK)
- ```name```(VARCHAR)

***Relacionamento***: Uma categoria pode ser associada a várias tarefas (relação 1:N com tasks).

### 3.1.1 BD e Models (Semana 5)
&emsp; Os models são responsáveis por interagir com o banco de dados, facilitando a manipulação dos dados. A seguir, uma descrição dos models implementados:
- ```userModel```: Responsável por gerenciar os dados relacionados aos usuários. Este model executa operações como listar, adicionar, atualizar e remover usuários no banco de dados, sendo diretamente associado à tabela users.
- ```tasksModel```: Manipula os dados das tarefas atribuídas aos usuários. É responsável por criar, listar, atualizar e excluir tarefas, atuando como a camada de acesso à tabela tasks, que centraliza o controle de pendências do sistema.
- ```categoriesModel```: Gerencia as categorias disponíveis para classificação das tarefas. Este model realiza operações de CRUD na tabela categories, sendo essencial para manter a organização e filtragem das tarefas dentro da aplicação.

### 3.2. Arquitetura (Semana 5)
&emsp; O padrão MVC (Model-View-Controller) é uma forma de organizar o código separando a lógica do sistema (Model), a interface com o usuário (View) e o controle das ações (Controller).

- ```Model```: cuida da lógica e acesso aos dados (como banco de dados);
- ```View```: mostra os dados ao usuário (HTML, CSS, etc);
- ```Controller```: liga o usuário ao sistema, controlando o que acontece ao clicar ou enviar dados.

&emsp; Esse padrão facilita a manutenção, a reutilização de código e a separação entre layout e funcionamento.

<div style="text-align: center;">
    <img src="../assets/projetoPessoalDiagramaMvc.drawio.png" alt="Modelo Entidade Relacionamento" width="400">
    <br>
    <sub>Figura 5 - Diagrama de arquitetura MVC</sub>
    <br>
    <sup>Fonte: Ana Ribeiro, Faculdade Inteli 2025</sup>
</div>


### 3.3. Wireframes (Semana 03)

*Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização).*

### 3.4. Guia de estilos (Semana 05)

*Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução.*


### 3.5. Protótipo de alta fidelidade (Semana 05)

*Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização).*

### 3.6. WebAPI e endpoints (Semana 05)
&emsp; As Web APIs desempenham um papel essencial na conexão entre diferentes sistemas, permitindo que aplicações distintas troquem informações de maneira organizada. Utilizando os chamados endpoints — que funcionam como portas de entrada para os recursos da API — é possível realizar ações como buscar, enviar e modificar dados. Esse tipo de integração facilita o reaproveitamento de funcionalidades, amplia a capacidade dos sistemas e torna o desenvolvimento de soluções digitais mais ágil. Por isso, APIs e seus endpoints são peças-chave na criação de ambientes tecnológicos bem integrados e eficientes.

#### USERS
&emsp; Gerenciamento de informações dos usuários do sistema.

#### Listar todos os usuários:
- URL: ```api/users```
- MÉTODO: ```GET```
- RESPOSTA: 
    ```json
    {
        "id": 12,
        "name": "Maria",
        "email": "aninhamary@example.com",
        "password": "123456",
        "created_at": "2025-05-30T06:02:20.444Z"
    },
    {
        "id": 13,
        "name": "Mateus",
        "email": "mateus@example.com",
        "password": "123456",
        "created_at": "2025-05-30T06:05:04.851Z"
    },
    {
        "id": 8,
        "name": "Novo nome",
        "email": "novoemail@example.com",
        "password": "novasenha",
        "created_at": "2025-05-30T01:58:50.172Z"
    } 


#### Selecionar por id
- URL: ```api/users/:id```
- MÉTODO: ```GET```
- RESPOSTA: 
    ```json
    {
    "id": 12,
    "name": "Maria",
    "email": "aninhamary@example.com",
    "password": "123456",
    "created_at": "2025-05-30T06:02:20.444Z"
    }

#### Adicionar um usuário
- URL: ```api/users```
- MÉTODO: ```POST```
- BODY: 
    ```json
    {
  "name": "Ana Julia",
  "email": "aninhagamer@example.com",
  "password": "senhaSegura123"
    }
- RESPOSTA: 
    ```json
    {
    "id": 14,
    "name": "Ana Julia",
    "email": "aninhagamer@example.com",
    "password": "senhaSegura123",
    "created_at": "2025-05-30T07:50:56.252Z"
    }

#### Atualizar informações de um usuário
- URL: ```api/users/:id```
- MÉTODO: ```PUT```
- BODY:
```json
    {
    "name": "Ana Julia",
    "email": "aninhagamer123@example.com",
    "password": "senhaSegura123"
    }
    
```
    

- RESPOSTA:
```json
    {
    "id": 14,
    "name": "Ana Julia",
    "email": "aninhagamer123@example.com",
    "password": "senhaSegura123",
    "created_at": "2025-05-30T07:50:56.252Z"
    }
```
#### Deletar um usuário
- URL: ```api/users/:id```
- MÉTODO: ```DELETE```
- RESPOSTA (204 No Content)


#### TASKS
&emsp; Gerenciamento de informações das tarefas do sistema.

#### Listar todos as tasks:
- URL: ```api/tasks```
- MÉTODO: ```GET```
- RESPOSTA: 
    ```json
    {
        "id": 11,
        "title": "Analisar banco de dados",
        "description": "Verificar se todas as tabelas estão completas",
        "due_date": "2025-06-05T03:00:00.000Z",
        "status": "pendente",
        "user_id": 12,
        "category_id": 2,
        "created_at": "2025-05-30T07:04:24.447Z"
    }


#### Adicionar uma tarefa
- URL: ```api/tasks```
- MÉTODO: ```POST```
- BODY: 
    ```json
    {
        "title": "Revisar documentação técnica",
        "description": "Conferir se os documentos estão atualizados antes da entrega final",
        "due_date": "2025-06-10T03:00:00.000Z",
        "status": "em andamento",
        "user_id": 12,
        "category_id": 2
    }

#### RESPOSTA: 
 ```json
    {
        "id": 12,
        "title": "Revisar documentação técnica",
        "description": "Conferir se os documentos estão atualizados antes da entrega final",
        "due_date": "2025-06-10T03:00:00.000Z",
        "status": "em andamento",
        "user_id": 12,
        "category_id": 2,
        "created_at": "2025-05-30T08:06:42.454Z"
    }
```

#### Atualizar informações de uma tarefa
- URL: ```api/tasks/:id```
- MÉTODO: ```PUT```
- BODY:
```json
    {
        "title": "Revisar documentação técnica",
        "description": "Conferir se os documentos estão atualizados antes da entrega final",
        "due_date": "2025-06-10T03:00:00.000Z",
        "status": "finalizada",
        "user_id": 12,
        "category_id": 2
    }
```
    

- RESPOSTA:
```json
    {
        "id": 12,
        "title": "Revisar documentação técnica",
        "description": "Conferir se os documentos estão atualizados antes da entrega final",
        "due_date": "2025-06-10T03:00:00.000Z",
        "status": "finalizada",
        "user_id": 12,
        "category_id": 2,
        "created_at": "2025-05-30T08:06:42.454Z"
    }
```
#### Deletar um usuário
- URL: ```api/users/:id```
- MÉTODO: ```DELETE```
- RESPOSTA (204 No Content)



#### CATEGORIES
&emsp; Gerenciamento de categorias das tarefas do sistema.

#### Listar todos as categorias:
- URL: ```api/categories```
- MÉTODO: ```GET```
- RESPOSTA: 
    ```json
    {
        "id": 2,
        "name": "Manutenção"
    }
#### Adicionar uma categoria
- URL: ```api/categories```
- MÉTODO: ```POST```
- BODY: 
    ```json
    {
        "name": "Revisão"
    }
- RESPOSTA: 
    ```json
        {
            "id": 4,
            "name": "Revisão"
        }
    ```

#### Atualizar uma categoria
- URL: ```api/categories/:id```
- MÉTODO: ```PUT```
- BODY:
```json
    {
        "name": "Revisão final"
    }
```
    

- RESPOSTA:
```json
    {
        "id": 4,
        "name": "Revisão final"
    }
```
#### Deletar um usuário
- URL: ```api/users/:id```
- MÉTODO: ```DELETE```
- RESPOSTA (204 No Content)



### 3.7 Interface e Navegação (Semana 07)

*Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

*VIDEO: Insira o link do vídeo demonstrativo nesta seção*
*Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar.*

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

*Indique pontos fortes e pontos a melhorar de maneira geral.*
*Relacione também quaisquer outras ideias que você tenha para melhorias futuras.*



## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que seu parceiro possa consultar caso ele se interessar em aprofundar. Um exemplo de referência de livro e de site:_<br>

---
---