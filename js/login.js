let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let logBtn = document.querySelector("#log");

let logout = document.querySelector("#logout");

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
});


logBtn.addEventListener("click", () => {

  if(phone.value == "" || pass.value == "") {
    alert("Please fill in all fields.")
    return;
  }
  else {
    console.log("ok")
    logBtn.addEventListener("click", () => {
      localStorage.getItem("token") !== null
      window.location.href = "../temples/home.html";
  });
  }

  fetch("https://rentcar.stepprojects.ge/api/Users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phoneNumber: phone.value,
      password: pass.value,
    }),
  })
    .then((resp) => resp.text())
    .then((data) => {
      console.log(data);
      localStorage.setItem("token", data.token);
    });
});





