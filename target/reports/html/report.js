$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/contato.feature");
formatter.feature({
  "name": "Acessando tela de contato da SoftExpert",
  "description": "    Eu como possível cliente\n    Quero acessar a tela de contato da SoftExpert\n    Para poder entrar em contato com o setor de vendas",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "name": "Acessando tela de contato do Brasil",
  "description": "",
  "keyword": "Cenário",
  "tags": [
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
  "error_message": "org.junit.ComparisonFailure: Erro ao validar mensagens! expected:\u003c...l para a sua empresa[s]\u003e but was:\u003c...l para a sua empresa[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat support.Commands.checkMessage(Commands.java:57)\r\n\tat pages.ContatoPage.acessarTelaInicial(ContatoPage.java:21)\r\n\tat steps.ContatoSteps.que_estou_na_tela_inicial(ContatoSteps.java:18)\r\n\tat ✽.que estou na tela inicial(src/test/resources/features/contato.feature:10)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "clico no botão Contato",
  "keyword": "Quando "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_Contato()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico no botão América do Sul",
  "keyword": "E "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_América_do_Sul()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clico no botão Brasil",
  "keyword": "E "
});
formatter.match({
  "location": "ContatoSteps.clico_no_botão_Brasil()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "a aplicação deve exibir o contato da SoftExpert no Brasil",
  "keyword": "Então "
});
formatter.match({
  "location": "ContatoSteps.a_aplicação_deve_exibir_o_contato_da_SoftExpert_no_Brasil()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "status": "passed"
});
});