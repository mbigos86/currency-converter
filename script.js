let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");
let moneyElement = document.querySelector(".js-cash");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;

    let USD = 4.118;
    let EUR = 4.473;

    switch (currency) {
        case "USD":
          result = amount / USD;
          moneyElement.innerText = "USD";
          break;
    
        case "EUR":
          result = amount / EUR;
          moneyElement.innerText = "EURO";
          break;
    }

    resultElement.innerText = `${amount} PLN to  ${result.toFixed(2)}`;
});