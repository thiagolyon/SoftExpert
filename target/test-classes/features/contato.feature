# language: pt

  Funcionalidade: Acessando tela de contato da SoftExpert
    Eu como possível cliente
    Quero acessar a tela de contato da SoftExpert
    Para poder entrar em contato com o setor de vendas

  @contato-brasil
  Cenário:Acessando tela de contato do Brasil
    Dado que estou na tela inicial
    Quando clico no botão Contato
    E clico no botão América do Sul
    E clico no botão Brasil
    Então a aplicação deve exibir o contato da SoftExpert no Brasil