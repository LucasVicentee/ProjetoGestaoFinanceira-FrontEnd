# ProjetoGestaoFinanceira-FrontEnd

Neste projeto será realizado um sistema que tem como objetivo a **gestão financeira pessoal**, tendo como base o usuário, o salário total, saldo atual e os gastos cometidos pelo mesmo ao decorrer de dias, semanas e até mesmo anos!

---

## 🛠️ Stack Tecnológica

O Front-End desta aplicação é construído utilizando:

* **Linguagens Base:** HTML, CSS e TypeScript (TS).
* **Framework:** Angular.
* **Banco de Dados (Back-End):** MySQL (relacional).

---

## 🗺️ Fluxos de Usuário (User Flows)

A documentação detalhada sobre a navegação e a experiência do usuário está organizada na pasta `docs/fluxogramas`, categorizada por nível de detalhe.

### 🚀 Visão Geral do Fluxograma Completo do Sistema

Este diagrama serve como o **mapa de navegação principal** do sistema de gestão financeira, ilustrando a transição entre os módulos e o ciclo de vida completo do usuário (desde o login até o gerenciamento de despesas e configurações de conta).

Ele consolida todos os fluxos detalhados em uma arquitetura única e coesa.

![Fluxograma da Visão Geral do Sistema](docs/fluxogramas/Fluxograma-VisaoGeralDoFluxogramaDoSistema.svg)

<br>

### ➡️ Fluxo de Login e Cadastro

Este fluxograma ilustra a jornada completa do usuário para o acesso inicial (Login ou Criação de Conta), desde a decisão de ter cadastro até a validação das credenciais.

![Fluxograma do Fluxo de Login e Cadastro](docs/fluxogramas/Fluxograma-Login_Cadastro.svg)

<br>

### ➡️ Fluxo Principal do Sistema

Este fluxograma o caminho que o usuário consegur acessar após o acesso inicial (Login/Cadastro). O diagrama detalha a estrutura de navegação a partir do Dashboard Principal, que serve como o hub central do sistema.

![Fluxograma do Dashboard Principal do Sistema](docs/fluxogramas/Fluxograma-DashboardPrincipal.svg)

<br>

### ➡️ Fluxo de Detalhe: Configurações do Usuário
Este fluxograma ilustra em detalhes a jornada do usuário a partir da opção "Configurações" no Dashboard Principal. O foco deste módulo é o gerenciamento de dados cadastrais e a segurança da conta.

![Fluxograma do Dashboard das Configurações do Usuário](docs/fluxogramas/Fluxograma-DashboardDasConfiguracoesDoUsuario.svg)

<br>

### ➡️ Fluxo de Detalhe: Adicionar Despesa (Nível Médio)
Este fluxograma ilustra a sequência de eventos para a inclusão de novas despesas, um processo central para a gestão financeira do sistema. O diagrama detalha o processo de validação e as ações dos calculos do back-end necessárias para garantir a integridade do saldo do usuário.

![Fluxograma do Modal de Adicionar Nova Despesa](docs/fluxogramas/Fluxograma-ModalAdicionarNovaDespesa.svg)

<br>

### ➡️ Fluxo de Detalhe: Visualizar Histórico de Despesas (Nível Médio)
Este fluxograma ilustra a navegação e as interações avançadas dentro da tela de Histórico de Despesas, onde o usuário gerencia transações passadas. O diagrama detalha os sub-processos de manipulação de dados, incluindo alteração, exclusão individual e exclusão em massa.

![Fluxograma do Dashboard de Todo o Histórico de Despesas](docs/fluxogramas/Fluxograma-DashboardHistoricoDeTodasDespesas.svg)