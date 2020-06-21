var inputUsername = document.body.querySelector(".nameInput");
var inputPass = document.body.querySelector(".passwordInput");
var inputConfirm = document.body.querySelector (".confirmInput");
var inputYears = document.body.querySelector (".ageInput");
var buttonEle = document.body.querySelector(".submit");
var errorDiv = document.body.querySelector(".error");

var list = [];

buttonEle.addEventListener("click", function () {
  if (inputUsername.value === "FinalUsername" && inputPass.value === "finalPassword" && inputConfirm === "finalPassword" && inputYears.value >17) {
    list.push({
      name: inputUsername.value
    });

    errorDiv.innerHTML = "Submitted Correctly";
  } else {
    if (inputUsername.value !== "FinalUsername" && inputPass.value === "finalPassword" && inputConfirm.value === "finalPassword" && inputYears.value >17) {
      errorDiv.innerHTML = "Incorrect Username";
    } else if (inputUsername.value === "FinalUsername" && inputPass.value !== "finalPassword" && inputConfirm === "finalPassword" && inputYears.value >17) {
      errorDiv.innerHTML = "Incorrect Password";
    } else if (inputUsername.value === "FinalUsername" && inputPass.value === "finalPassword" && inputConfirm.value !== "finalPassword" && inputYears.value >17) {
      errorDiv.innerHTML = "Passwords do not match!"; 
    } else if (inputUsername.value === "FinalUsername" && inputPass.value === "finalPassword" && inputConfirm.value === "finalPassword" && inputYears.value <18) {
      errorDiv.innerHTML = "You are not old enough to visit this site";
    } else {
      errorDiv.innerHTML = "Everything is wrong!!!";
    }
  }

  console.log(list);
});