const inputEmail = document.getElementById("email");
const emailError = document.getElementById("email-error");

inputEmail.addEventListener("invalid", (e) => {
  e.preventDefault();
  inputEmail.classList.add("js-form-input-is-error");
  emailError.style.display = "block";
});

inputEmail.addEventListener("input", () => {
  inputEmail.classList.remove("js-form-input-is-error");
  emailError.style.display = "none";
});
