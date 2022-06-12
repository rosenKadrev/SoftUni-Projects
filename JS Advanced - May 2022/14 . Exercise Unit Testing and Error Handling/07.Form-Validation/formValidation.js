function validate() {
  const username = document.getElementById("username");
  const regExpForTestName = /^[A-Za-z0-9]{3,20}$/;
  const email = document.getElementById("email");
  const regExpForTestEmail = /^[^@.]+@[^@]*\.[^@]*$/;
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirm-password");
  const regExpForTestPass = /^[\w]{5,15}$/;
  const isCompany = document.getElementById("company");
  const companyNumber = document.getElementById("companyNumber");
  const regExpForTestCompanyNumber = /^[0-9]{4}$/;

  isCompany.addEventListener("change", onChange);
  document.getElementById("submit").addEventListener("click", onClick);

  function onChange() {
    if (isCompany.checked) {
      document.getElementById("companyInfo").style.display = "block";
    } else {
      document.getElementById("companyInfo").style.display = "none";
    }
  }

  function onClick(ev) {
    ev.preventDefault();
    let arrWithValidExits = [];
    if (regExpForTestName.test(username.value) == false) {
      username.style.borderColor = "red";
      arrWithValidExits.push(false);
    } else {
      username.style.border = "";
      arrWithValidExits.push(true);
    }
    if (regExpForTestEmail.test(email.value) == false) {
      email.style.borderColor = "red";
      arrWithValidExits.push(false);
    } else {
      email.style.border = "";
      arrWithValidExits.push(true);
    }
    if (
      regExpForTestPass.test(password.value) == true &&
      regExpForTestPass.test(confirmPassword.value) == true &&
      password.value == confirmPassword.value
    ) {
      password.style.border = "";
      confirmPassword.style.border = "";
      arrWithValidExits.push(true);
    } else {
      password.style.borderColor = "red";
      confirmPassword.style.borderColor = "red";
      arrWithValidExits.push(false);
    }
    if (isCompany.checked) {
      if (regExpForTestCompanyNumber.test(companyNumber.value) == false) {
        companyNumber.style.borderColor = "red";
        arrWithValidExits.push(false);
      } else {
        companyNumber.style.border = "";
        arrWithValidExits.push(true);
      }
    }
    const divForFinalValidation = document.getElementById("valid");
    if (!arrWithValidExits.includes(false)) {
      divForFinalValidation.style.display = "block";
    } else {
      divForFinalValidation.style.display = "none";
    }
  }
}
