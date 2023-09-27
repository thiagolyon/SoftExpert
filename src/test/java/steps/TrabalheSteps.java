package steps;

import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.TrabalhePage;

public class TrabalheSteps {

    TrabalhePage trabalhePage = new TrabalhePage();

    @Quando("^clico no botão Trabalhe Conosco$")
    public void clico_no_botão_Trabalhe_Conosco() {
        trabalhePage.clicarBtnCookie();
        trabalhePage.clicarBtnTrabalhe();
    }

    @Quando("^clico no botão Ver Vagas Abertas$")
    public void clico_no_botão_Ver_Vagas_Abertas() {
        trabalhePage.clicarBtnVagas();
    }

    @Quando("^clico no botão Pessoa analista de Testes automatizados$")
    public void clico_no_botão_Pessoa_analista_de_Testes_automatizados() {
        trabalhePage.clicarVagaAutomatizado();
    }

    @Quando("^clico no botão Apply$")
    public void clico_no_botão_Apply()  {
        trabalhePage.clicarBtnApply();
    }

    @Quando("^preencho os dados solicitados$")
    public void preencho_os_dados_solicitados() {
        trabalhePage.preenchePrimeiroNome();
        trabalhePage.preencheUltimoNome();
        trabalhePage.preencheEmail();
        trabalhePage.preencheTelefone();
        trabalhePage.uploadArquivo("C:\\Users\\thiag\\OneDrive\\Documentos\\Lyon\\00. Cursos\\99. Treinando automação\\SoftExpert\\lyon-cv.pdf");
        trabalhePage.preencheLinkedin();
        trabalhePage.preencheGithub();
        trabalhePage.preencheSalario();
        trabalhePage.indicacao();
    }

    @Quando("^clico no botão Submit Application$")
    public void clico_no_botão_Submit_Application() {
        trabalhePage.clicarBtnSubmit();
    }

    @Então("^a aplicação deve exibir a mensagem de sucesso$")
    public void a_aplicação_deve_exibir_a_mensagem_de_sucesso() {
        trabalhePage.validarMsgSucesso();
    }
}
