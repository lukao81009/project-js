let phone = document.querySelector("#phone")
let pass = document.querySelector("#pass")
let regBtn = document.querySelector("#reg")

regBtn.addEventListener("click", ()=>{

  if(phone.value == "" || pass.value == "") {
    alert("Please fill in all fields.")
    return;
  }
  else {
    console.log("ok")
    regBtn.addEventListener("click", () => {
      localStorage.getItem("token") !== null
      window.location.href = "../temples/home.html";
  });
  }

  fetch("https://rentcar.stepprojects.ge/api/Users/register", {
    method : "POST",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : JSON.stringify({
      phoneNumber : phone.value,
      password : pass.value
    })
  })
  
  .then(resp => resp.json())
  .then(data => {
    console.log(data)
    window.location.href = "./login.html"
  })
})
