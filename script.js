
const select = document.getElementById("currency-select")



function Converter() {
    const valor = document.querySelector("input").value
    const Real = document.querySelector("#real")
    const currency = document.querySelector("#Dolar-Euro")

    const dolarToday = 5.2
    const euroToday = 6.2

    if (select.value == "dolar") {
        currency.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valor / dolarToday)
    }
    if (select.value == "euro") {
        currency.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valor / euroToday)


    }



    Real.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"

    }).format(valor)



}


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.getElementById("currency-image")
    currencyImage.style.width = "64px"

    if (select.value == "dolar") {
        currencyImage.src = "img/Estados Unidos.png"
        currencyName.innerHTML = "Dólar americano"
    }
    if (select.value == "euro") {
        currencyImage.src = "img/Euro.png"
        currencyName.innerHTML = "Euro"
    }

    Converter()
}