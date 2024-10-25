document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-subscribe");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let isValid = true;

    // clear errors
    nameError.textContent = "";
    emailError.textContent = "";

    // name validation
    const nameValue = nameInput.value.trim();
    if (validator.isEmpty(nameValue)) {
      displayError(nameInput, nameError, "Field is mandatory");
      isValid = false;
    } else if (!validator.isAlpha(nameValue.replace(/\s/g, ""), "sl-SI")) {
      displayError(nameInput, nameError, "Name should only contain letters");
      isValid = false;
    }

    // email validation
    const emailValue = emailInput.value.trim();
    if (validator.isEmpty(emailValue)) {
      displayError(emailInput, emailError, "Field is mandatory");
      isValid = false;
    } else if (!validator.isEmail(emailValue)) {
      displayError(
        emailInput,
        emailError,
        "Please enter a valid email address"
      );
      isValid = false;
    }

    if (isValid) {
      console.log("Name: " + nameValue);
      console.log("Email: " + emailValue);
    }
  });
});

function displayError(inputField, errorField, errorMessage) {
  inputField.classList.add("error");
  errorField.textContent = errorMessage;
}
