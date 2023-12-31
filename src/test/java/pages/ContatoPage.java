package pages;

import org.openqa.selenium.By;
import runner.RunCucumber;

import static support.Commands.checkMessage;
import static support.Commands.clickElement;

public class ContatoPage extends RunCucumber {

    private String URL = "https://www.softexpert.com/pt-br/";
    private By banner = By.cssSelector("h3[style='color: #0076db;']");
    private By btnContato = By.xpath("//li[@id='menu-item-40353']/a[text()='Contato']");
    private By btnAmericaSul = By.xpath("//a[@class='w-tabs-item-h']/span[text()='América do Sul']");
    private By btnBrasil = By.xpath("//div[@class='wpb_wrapper']/a[text()='Brasil']");
    private By tela = By.cssSelector("span.w-copyright");


    public void acessarTelaInicial() {
        getDriver(System.getProperty("browser")).get(URL);
        checkMessage(banner, "Encontre a solução ideal para a sua empresa");
    }

    public void clicarBtnContato() {
        clickElement(btnContato);
    }

    public void clicarBtnAmericaSul() {
        clickElement(btnAmericaSul);
    }

    public void clicarBtnBrasil() {
        clickElement(btnBrasil);
    }

    public void validarTelaBrasil() {
        checkMessage(tela, "Copyright © SoftExpert Software for Performance Excellence.\n" +
                "All trademarks, trade names, service marks, and logos referenced herein belong to their respective companies.");
    }
}
