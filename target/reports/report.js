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
});