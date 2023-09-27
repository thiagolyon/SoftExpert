# language: pt

  Funcionalidade: Cadastrando para vaga de emprego
    Eu como candidato para vaga
    Quero me candidatar na vaga de analista de Testes Automatizados
    Para fazer parte da equipe da SoftExpert

  @trabalhe-conosco
  Cenário: Cadastrando para a vaga de analista de testes automatizados
    Dado que estou na tela inicial
    Quando clico no botão Trabalhe Conosco
    E clico no botão Ver Vagas Abertas
    E clico no botão Pessoa analista de Testes automatizados
    E clico no botão Apply
    E preencho os dados solicitados
    E clico no botão Submit Application
    Então a aplicação deve exibir a mensagem de sucesso
