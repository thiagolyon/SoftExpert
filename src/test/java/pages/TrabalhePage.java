package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.*;

public class TrabalhePage extends RunCucumber {

    private By btnTrabalhe = By.id("menu-item-84051");
    private By btnCookie = By.className("cookieBtn");
    private By btnVagas = By.className("w-btn");
    private String URL = "https://softexpert.hire.trakstar.com/?country=Brasil&q=&limit=25";
    private By vagaAutomatizado = By.cssSelector("#content > div > form > div.js-openings-list.opening-list.col-md-9 > div:nth-child(4)");
    private By btnApply = By.cssSelector("a.btn.btn-primary.btn-lg.btn-apply.hidden-print.rb-tail-2rbpx.js-apply-for-job.rb-space-on-bottom-2rbpx");
    private By preencheNome = By.id("id_candidate_first_name");
    private By preencheSobrenome = By.id("id_candidate_last_name");
    private By preencheEmail = By.id("id_candidate_email");
    private By preencheTelefone = By.id("id_candidate_phone");
    private By uploadFile = By.id("id_resume");
    private By preencheLinkedin = By.id("id_linkedin_profile");
    private By preencheGithub = By.id("id_github_profile");
    private By preencheSalario = By.id("id_field_key_chg_to_avd_uni_err_2584288");
    private By indicacao = By.id("id_como_ficou_sabendo_da_vaga");
    private By clicarBtnSubmit = By.id("input_application_form_submit");
    private By validarMsg = By.cssSelector("div.alert.alert-success.topspace-double p.meta-app-success-message");

    public void clicarBtnCookie() {
        clickElement(btnCookie);
    }

    public void clicarBtnTrabalhe() {
        clickElement(btnTrabalhe);
    }

    public void clicarBtnVagas() {
        clickElement(btnVagas);
    }

    public void clicarVagaAutomatizado() {
        getDriver(System.getProperty("browser")).get(URL);
        clickElement(vagaAutomatizado);
    }

    public void clicarBtnApply() {
        clickElement(btnApply);
    }

    public void preenchePrimeiroNome() {
        fillField(preencheNome, "Thiago Lyon");
    }

    public void preencheUltimoNome() {
        fillField(preencheSobrenome, "Nascimento");
    }

    public void preencheEmail() {
        fillField(preencheEmail, "thiago.lyon.passos@gmail.com");
    }

    public void preencheTelefone() {
        fillField(preencheTelefone, "61 981860936");
    }

    public void uploadArquivo(String file) {
        getDriver().findElement(uploadFile).sendKeys(file);
    }

    public void preencheLinkedin() {
        fillField(preencheLinkedin, "https://www.linkedin.com/in/thiagolyon");
    }

    public void preencheGithub() {
        fillField(preencheGithub, "https://github.com/thiagolyon");
    }

    public void preencheSalario() {
        fillField(preencheSalario, "4500");
    }

    public void indicacao() {
        fillField(indicacao, "Não");
    }

    public void clicarBtnSubmit() {
        clickElement(clicarBtnSubmit);
    }

    public void validarMsgSucesso() {
        checkMessage(validarMsg, "Your application has been submitted successfully!\nPlease check your email for further details.");
    }
}
