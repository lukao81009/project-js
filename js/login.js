let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let logBtn = document.querySelector("#log");

let logout = document.querySelector("#logout");
let addToCart = document.querySelector("#addToCart");

logout.addEventListener("click", () => {
  localStorage.removeItem("token");
});

addToCart.addEventListener("click", () => {
  console.log(localStorage.getItem("token"));
  if (
    localStorage.getItem("token") != null ||
    localStorage.getItem("token") != undefined
  ) {
    console.log("added product");
  } else {
    alert("You need log in first");
  }
});

logBtn.addEventListener("click", () => {
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
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      localStorage.setItem("token", data.token);
    });
});
