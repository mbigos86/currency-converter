
const calculateResult = (amount, currency) => {

  const USD = 4.118;
  const EUR = 4.473;

  switch (currency) {
    case "USD":
      return amount / USD;
      moneyElement.innerText = "USD";
      
    case "EUR":
      return amount / EUR;
      moneyElement.innerText = "EURO";  
  }
}

const formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");
  const moneyElement = document.querySelector(".js-cash");
  

const amount = amountElement.value
const currency = currencyElement.value 

  const result = calculateResult(amount, currency);

  resultElement.innerText = `${amount} PLN to  ${result.toFixed(2)}`;
});