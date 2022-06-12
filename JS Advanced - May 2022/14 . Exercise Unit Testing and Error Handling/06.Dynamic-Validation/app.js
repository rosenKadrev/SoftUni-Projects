function validate() {
  let regExp = /^[a-z]+[@{1}][a-z]+[.{1}][a-z]+$/;
  let input = document.getElementById("email");
  input.addEventListener("change", onChange);

  function onChange(ev) {
    let testEmail = regExp.test(input.value);
    if (testEmail) {
      input.classList.remove("error");
    } else {
      input.classList.add("error");
    }
  }
}
