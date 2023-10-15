
const calculateResult = (amount, currency) => {
  const moneyElement = document.querySelector(".js-cash");

  const rateUSD = 4.118;
  const rateEUR = 4.473;

  switch (currency) {
    case "USD":
      return amount / rateUSD;
      moneyElement.innerText = "USD";

    case "EUR":
      return amount / rateEUR;
      moneyElement.innerText = "EURO";
  }
};

const showResult = (amount, result, currency) => {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerText = `${amount} PLN to  ${result.toFixed(2)} ${currency}`;
}

const onFormSubmit = (event) => {
  event.preventDefault();


  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");

  

  const amount = amountElement.value
  const currency = currencyElement.value

  const result = calculateResult(amount, currency);

showResult (amount, result, currency);
}

const init = () => {
  const formElement = document.querySelector(".js-form");
  
  formElement.addEventListener("submit", onFormSubmit);
};

init();

