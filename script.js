const frontImg = document.querySelector(".first-img");
const secondImg = document.querySelector(".second-img");
const frontImgThanks = document.querySelector(".first");
const secondImgThanks = document.querySelector(".second");

document.querySelector("#thank-you").style.display = "none";

document.querySelector("button").addEventListener("click", confirmBtn);

function confirmBtn(e) {
  let cardName = document.querySelector(".card-name");
  const cardNumber = document.querySelector(".card-number");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const cvc = document.querySelector(".cvc");

  if (
    cardName.value === "" ||
    cardNumber.value === "" ||
    month.value === "" ||
    year.value === "" ||
    cvc.value === ""
  ) {
    const div = document.createElement("div");
    div.classList = "error";
    div.appendChild(document.createTextNode("Please input all fields"));
    const form = document.querySelector("form");
    const formGroup = document.querySelector(".form-group");
    form.appendChild(div);
    form.insertBefore(div, formGroup);
    div.style.padding = "5px";
    div.style.borderRadius = "4px";

    setTimeout(() => {
      div.remove();
    }, 3000);
  } else {
    frontImgThanks.innerHTML = `
    <div class="blank-img"></div>
    <h3>${cardNumber.value}</h3>
    <div class="name-flex">
      <h5>${cardName.value}</h5>
      <h5>${month.value}/${year.value}</h5>
    </div>
    `;
    secondImgThanks.innerHTML = `
       <div class="black"></div>
       <p>${cvc.value}</p>
    `;
    document.querySelector("#main-sec").style.display = "none";
    document.querySelector("#thank-you").style.display = "flex";
  }

  e.preventDefault();
}

const cardNumber = document
  .querySelector(".card-number")
  .addEventListener("blur", validateCardNumber);
const cardName = document
  .querySelector(".card-name")
  .addEventListener("blur", validateName);
const month = document
  .querySelector(".month")
  .addEventListener("blur", validateMonth);
const year = document
  .querySelector(".year")
  .addEventListener("blur", validateYear);
const cvc = document
  .querySelector(".cvc")
  .addEventListener("blur", validateCvc);

function validateName() {
  const cardName = document.querySelector(".card-name");
  const re = /^[a-zA-Z ]{2,30}$/;

  if (!re.test(cardName.value)) {
    cardName.classList.add("is-invalid");
  } else {
    cardName.classList.remove("is-invalid");
  }
}

function validateCardNumber() {
  const cardNumber = document.querySelector(".card-number");
  const re = /^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$/;

  if (!re.test(cardNumber.value)) {
    cardNumber.classList.add("is-invalid");
  } else {
    cardNumber.classList.remove("is-invalid");
  }
}
function validateMonth() {
  const month = document.querySelector(".month");
  const re = /^[0-9]{2}$/;

  if (!re.test(month.value)) {
    month.classList.add("is-invalid");
  } else {
    month.classList.remove("is-invalid");
  }
}
function validateYear() {
  const year = document.querySelector(".year");
  const re = /^[0-9]{2}$/;

  if (!re.test(year.value)) {
    year.classList.add("is-invalid");
  } else {
    year.classList.remove("is-invalid");
  }
}
function validateCvc() {
  const cvc = document.querySelector(".cvc");
  const re = /^[0-9]{3}$/;

  if (re.test(cvc.value)) {
    cvc.classList.remove("is-invalid");
  } else {
    cvc.classList.add("is-invalid");
  }
}
