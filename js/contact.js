const form = document.querySelector(".contact__form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const privacyInput = document.getElementById("privacy");

function showError(input, hasError) {
  const field = input.closest(".contact__field");

  if (hasError) {
    field.classList.add("is-error");
  } else {
    field.classList.remove("is-error");
  }
}

function clearErrorOnInput(input) {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "" && input.validity.valid) {
      showError(input, false);
    }
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameHasError = nameInput.value.trim() === "";
  const emailHasError = !emailInput.validity.valid;
  const messageHasError = messageInput.value.trim() === "";

  showError(nameInput, nameHasError);
  showError(emailInput, emailHasError);
  showError(messageInput, messageHasError);

  const formIsValid =
    !nameHasError && !emailHasError && !messageHasError && privacyInput.checked;

  if (formIsValid) {
    console.log("Form is valid");
  }
});

clearErrorOnInput(nameInput);
clearErrorOnInput(emailInput);
clearErrorOnInput(messageInput);
