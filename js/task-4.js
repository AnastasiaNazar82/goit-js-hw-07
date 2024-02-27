const registerForm = document.querySelector(".login-form");

registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const inputEmail = form.elements.email.value.trim();
  const inputPassword = form.elements.password.value.trim();

  if (inputEmail === "" || inputPassword === "") {
    return alert("All form fields must be filled in");
  }
  const forms = {
    email: inputEmail,
    password: inputPassword,
  };

  console.log(forms);
  registerForm.reset();
}
