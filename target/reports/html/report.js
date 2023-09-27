$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/trabalhe.feature");
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
});