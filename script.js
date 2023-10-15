
{
const calculateResult = (amount, currency) => {

  const rateUSD = 4.118;
  const rateEUR = 4.473;

  switch (currency) {
    case "USD":
      return amount / rateUSD;

    case "EUR":
      return amount / rateEUR;
  }
};

const showResult = (amount, result, currency) => {
  const resultElement = document.querySelector(".js-result");
  resultElement.innerText = `${amount} PLN to  ${result.toFixed(2)} ${currency}`;
};

const resetResult = () => {
  const formElement = document.querySelector(".js-form");
  const resultElement = document.querySelector(".js-result");
  formElement.reset();
  resultElement.innerText = "";
};

const onFormSubmit = (event) => {
  event.preventDefault();


  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");



  const amount = amountElement.value
  const currency = currencyElement.value

  const result = calculateResult(amount, currency);

  showResult(amount, result, currency);
}


const init = () => {
  const formElement = document.querySelector(".js-form");
  const resetButton = document.querySelector(".js-resetButton");

  formElement.addEventListener("submit", onFormSubmit);

  resetButton.addEventListener("click", resetResult);

};

init();

}

