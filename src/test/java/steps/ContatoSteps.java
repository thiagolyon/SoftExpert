package steps;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;
import pages.ContatoPage;
import runner.RunCucumber;

public class ContatoSteps extends RunCucumber {

    ContatoPage contatoPage = new ContatoPage();

    @Dado("^que estou na tela inicial$")
    public void que_estou_na_tela_inicial() {
        contatoPage.acessarTelaInicial();
    }

    @Quando("^clico no botão Contato$")
    public void clico_no_botão_Contato() {
        contatoPage.clicarBtnContato();
    }

    @Quando("^clico no botão América do Sul$")
    public void clico_no_botão_América_do_Sul() {
        contatoPage.clicarBtnAmericaSul();
    }

    @Quando("^clico no botão Brasil$")
    public void clico_no_botão_Brasil() {
        contatoPage.clicarBtnBrasil();
    }

    @Então("^a aplicação deve exibir o contato da SoftExpert no Brasil$")
    public void a_aplicação_deve_exibir_o_contato_da_SoftExpert_no_Brasil() {
        contatoPage.validarTelaBrasil();
    }
}
