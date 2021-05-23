let valueUser = document.querySelector("#valor");
let convertValue = document.querySelector("#convertido");
let buttonConvert = document.querySelector("#converter");
let moedas;
// let moedas2;

let dolar = 5.30;
let euro = 6.71;

const Convert = () => {
    let resultado;
    valueUser = document.querySelector("#valor").value;
    moedas = document.querySelector(".moedas1").value;
    // moedas2 = document.querySelector(".moedas2").value;
    // convertValue.innerHTML = valueUser;

    // Criar a conversão de acordo com a opção escolhida
    switch (moedas)
    {
        case "usd1":
        case "usd2":
            convertValue.innerHTML = "<h4>US$ </h4>"+valueUser;
            break;
        case "brl1":
        case "usd2":
            resultado = valueUser / dolar.toFixed(2);
            convertValue.innerHTML = "<h4>R$ </h4>"+(resultado.toFixed(2));
            break;
        case "eur":
            resultado = valueUser / euro.toFixed(2);
            convertValue.innerHTML = "<h4>€$ </h4>"+(resultado.toFixed(2));
            break;
        default:
            convertValue.innerHTML = "<h4 style='color: red'>Erro</h4>";
            break;
    }
}

buttonConvert.onclick = Convert;