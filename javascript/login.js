let wachtwoord = document.getElementById("password");
let color = document.getElementById("color-login");
let email = document.getElementById("email-login");
let welkom = document.getElementById("login-but");
let nom = document.getElementById("naam-input");
const username = "user";
const password = "EHB";

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let input = document.getElementById("naam-input").value;
  let code = document.getElementById("password").value;

  if (input != username) {
    alert("Foute gebruikersnaam. Gelieve opnieuw te proberen.");
  } else if (password != code) {
    alert("Foute wachtwoord. Gelieve opnieuw te proberen.");
  } else {
    window.location.href = "../html/Main.html";
    opslaanData();
  }
});
let body = document.body;

let colorPicker = document.getElementById("colorpicker");

colorPicker.addEventListener("input", function () {
  let selectedColor = colorPicker.value;

  document.body.style.backgroundColor = selectedColor;
  welkom.style.backgroundColor = selectedColor;
});
// ARROW FUNCTION
(() => {
  window.onload = () => {
    alert("Gelieve in te loggen");
  };
})();

function opslaanData() {
  localStorage.setItem("gebruikerNaam", "user");
}

function ophalenData() {
  let opgeslagenNaam = localStorage.getItem("gebruikerNaam");
    console.log(opgeslagenNaam);
};
