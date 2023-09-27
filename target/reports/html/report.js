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
