# Backend de Entregas

## Estrutura do projeto

**Boas vindas**

- Criar aplicação onde vamos cadastrar cliente, crud de entregas, validações,
- 3 tabelas, deliveries, clients, ddeliveryman.

**Criando estrutura do projeto**

- Instalando dependecias: `prisma, typescript, bcrypt, jsonWebToken, express, ts-node-dev.`
- Gerando arquivo typescript: `yarn tsc --init`

## Criando estrutura de tabelas

**Criando estrutura de tabelas**

- Iniciando config do prisma com: yarn prisma init
- Criando tabela `DeliveryMan, clients, deliveries`
- Execudando migration com : `yarn prisma migrate dev`

**Criando o server com express**

- Criando server com express e configurando ts-node-server

## Cliente

**Cadastro de cliente**

- Criando useCase `CreateClient` onde vai ficar regra de negocio, validação e inserção de dados
- Criado `CreateClientController` para receber requisições
- Criado router `Client` para criação de usuário

**Criar autenticação do cliente**

- Criado `AuthenticateClientUseCase` ao qual busca cliente no db, valida se cliente existe, verifica se a senha corresponde ao user name utilizando `compare` do `bcrypt` e caso seja, gerá um jsonwebtoken utilizando o `sign` do `jsonwebtoken`

**Tratando as conexões**

- Criado middleware ao qual retornara mensagem de erro.
- instalado dependencia: `yarn express-async-errors`

## Entregador

**Cadastro de deliveryman**

- Criado `CreateDeliverymanUseCase` para consulta e criação no banco.
- Criado `CreateDeliverymanController` para receber requisição e retornar.
- Criado rota `deliveryman`

**Criar autenticação do deliveryman**

- Criado `AuthenticateDeliverymanUseCase` para gerar token se senhar dar match com senha cadastrada.
- Criado `AuthenticateDeliverymanController` para receber requisição e chamar `AuthenticateDeliverymanUseCase.execute`

## Entregas

**Cadastro de entregas**

- Criado `CreateDeliveryUseCase` para criação de delivery no db
- Criado `CreateDeliveryController` para receber request e retornar response
- Criado rota `delivery`

**Middleware de cliente autenticado**

- Criando autenticação para somente ser possivel cadastrar entrega quando estiver logado.
- Criado `ensureAuthenticateClient` onde que veirifica se o token é valido, caso seja prossegui com a criação de delivery, caso não retorna erro
- O middleware criado serve para pegar o token e retornar na request o `id_client`

**Busca de entregas sem deliveryman atrelado**

- Criado `FindAllAvailableUseCase` e `FindAllAvailableUseCase` para receber requisição de buscar registros de deliveries e retornar.
- Criado route `delivery/available`

**Middleware de deliveryman autenticado**

- Criado autenticação para validar se deliveryman esta logado para poder buscar entregas
- Criado `ensureAuthenticateDeliveryman` onde é necessário passar token do usuário para fazer busca

**Update de entrega adicionando entregador**

- Criado `UpdateDeliverymanUseCase` e `UpdateDeliverymanController` para receber request de alteração de delivery
- Criado rota `delivery/updateDeliveryman/:id`

**Busca de entregas utilizando o token do cliente**

- Criado `FindAllDeliveriesUseCase` e `FindAllDeliveriesController` para fazer busca no db dos deliveries do client autenticado e retornalos.
- Criado rota `/clients/deliveries`

**Busca com select**

- Quando o client faz a busca de todas as entregas dele, tras a senha tambem, então vamos substituir o `include` por `select` para trazer somente nome, deliveries e id

**Busca entregas do entregador**

- Criado `FindAllDeliveriesDeliverymanUseCase` e `FindAllDeliveriesDeliverymanController` para fazer busca no db dos deliveries do Entregador autenticado e retornalos.
- Criado rota `/deliveryman/deliveries`

**Atualização de entrega com a data de entrega**

- Criado `UpdateEndDateController` e `UpdateEndDateUseCase` para fazer alteração da data da entrega de finalização
- Criado rota `/delivery/updateEndDate/:id`

**Recap**

- Projeto completo utilizando http, express, prisma.
- Criação de db com schema
- Regra de negocios
- Validações
- Rotas
- Middleware
- JWT authenticate
