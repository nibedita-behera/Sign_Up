let btnLogin = document.getElementById("login");
let btnSignUp = document.getElementById("signup");

let signIn = document.querySelector(".signin");
let signUp = document.querySelector(".signup");

btnLogin.onclick = function () {
  signIn.classList.add("active");
  signUp.classList.add("inActive");
};
btnSignUp.onclick = function () {
  signIn.classList.remove("active");
  signUp.classList.remove("inActive");
};

function save() {
  console.log("save");
  let userString1 = document.getElementById("item-list-1").value;
  console.log(userString1);
  let userString2 = document.getElementById("item-list-2").value;
  sessionStorage.setItem("user-data-1", userString1);
  //   sessionStorage.setItem("user-data-2", userString2);
  if (userString1 !== "" && userString2 !== "") {
    alert(`logged in as ${userString1}`);
  } else {
    alert("please Enter values");
  }
}
function save1() {
  console.log("save1");
  let userString1 = document.getElementById("item-list-3").value;
  console.log(userString1);
  let userString2 = document.getElementById("item-list-4").value;
  sessionStorage.setItem("user-data-1", userString2);
  let userString3 = document.getElementById("item-list-5").value;
  sessionStorage.setItem("user-data-1", userString3);
  //   sessionStorage.setItem("user-data-2", userString2);

  alert("Succesfull");
}
function display() {
  console.log("display");
  let dataString1 = sessionStorage.getItem("user-data-1");
  //   console.log(dataString1);
  //   //   let dataString2 = sessionStorage.getItem("user-data-2");
  document.getElementById(
    "data"
  ).innerHTML = `<ul>logged in as${dataString1}</ul>`;
  //   document.getElementById("data").innerHTML = `<li>${dataString2}`;
  document.writeln(`logged in as ${dataString1}`);
}
