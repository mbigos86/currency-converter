const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");
const moneyElement = document.querySelector(".js-cash");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = amountElement.value;
    const currency = currencyElement.value;
    
    let result = resultElement.value;

    const USD = 4.118;
    const EUR = 4.473;

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