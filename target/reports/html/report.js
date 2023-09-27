$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/contato.feature");
formatter.feature({
  "name": "Acessando tela de contato da SoftExpert",
  "description": "    Eu como possível cliente\n    Quero acessar a tela de contato da SoftExpert\n    Para poder entrar em contato com o setor de vendas",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@contato"
    }
  ]
});
formatter.scenario({
  "name": "Acessando tela de contato do Brasil",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@contato"
    },
    {
      "name": "@contato-brasil"
    }
  ]
});
formatter.step({
  "name": "que estou na tela inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContatoSteps.que_estou_na_tela_inicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Contato",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_Contato()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão América do Sul",
  "keyword": "E "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_América_do_Sul()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Brasil",
  "keyword": "E "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_Brasil()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a aplicação deve exibir o contato da SoftExpert no Brasil",
  "keyword": "Então "
});
formatter.match({
  "location": "ContatoSteps.a_aplicação_deve_exibir_o_contato_da_SoftExpert_no_Brasil()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("src/test/resources/features/trabalhe.feature");
formatter.feature({
  "name": "Cadastrando para vaga de emprego",
  "description": "    Eu como candidato para vaga\n    Quero me candidatar na vaga de analista de Testes Automatizados\n    Para fazer parte da equipe da SoftExpert",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Cadastrando para a vaga de analista de testes automatizados",
  "description": "",
  "keyword": "Cenário",
  "tags": [
    {
      "name": "@trabalhe-conosco"
    }
  ]
});
formatter.step({
  "name": "que estou na tela inicial",
  "keyword": "Dado "
});
formatter.match({
  "location": "ContatoSteps.que_estou_na_tela_inicial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Trabalhe Conosco",
  "keyword": "Quando "
});
formatter.match({
  "location": "TrabalheSteps.clico_no_botão_Trabalhe_Conosco()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Ver Vagas Abertas",
  "keyword": "E "
});
formatter.match({
  "location": "TrabalheSteps.clico_no_botão_Ver_Vagas_Abertas()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Pessoa analista de Testes automatizados",
  "keyword": "E "
});
formatter.match({
  "location": "TrabalheSteps.clico_no_botão_Pessoa_analista_de_Testes_automatizados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Apply",
  "keyword": "E "
});
formatter.match({
  "location": "TrabalheSteps.clico_no_botão_Apply()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "preencho os dados solicitados",
  "keyword": "E "
});
formatter.match({
  "location": "TrabalheSteps.preencho_os_dados_solicitados()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clico no botão Submit Application",
  "keyword": "E "
});
formatter.match({
  "location": "TrabalheSteps.clico_no_botão_Submit_Application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "a aplicação deve exibir a mensagem de sucesso",
  "keyword": "Então "
});
formatter.match({
  "location": "TrabalheSteps.a_aplicação_deve_exibir_a_mensagem_de_sucesso()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});