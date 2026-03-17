let id = window.location.search.split("=")[1];
let roomInfo = document.querySelector("#roomInfo")


let inpCheckIn = document.querySelector("#check-in-wrap input")
let inpCheckOut = document.querySelector("#check-out-wrap input")
let inpCustomerName = document.querySelector("#customer-name-wrap input")
let inpCustomerTel = document.querySelector("#customer-tel-wrap input")
let btnBook = document.querySelector("#book-now-btn")

let date = new Date().toISOString().split("T")[0]
inpCheckIn.setAttribute("min", date)
inpCheckOut.setAttribute("min", date)


fetch(`https://hotelbooking.stepprojects.ge/api/Rooms/GetRoom/${id}`)
    .then(resp => resp.json())
    .then(data => {
        displayRoom(data);
    }); 


    function displayRoom(obj) {

        roomInfo.innerHTML = `
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${obj.images[0].source}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${obj.images[1].source}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${obj.images[2].source}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${obj.images[3].source}" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="${obj.images[4].source}" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`
}



btnBook.addEventListener("click", () => {
    if( localStorage.getItem("token")) {

        if(inpCheckIn.value <= inpCheckOut.value) {
            console.log("ok")
        }
        else {
            alert("Check-out date must be after check-in date.")
            return;
        }

        if(inpCustomerName.value == "" || inpCustomerTel.value == "" || inpCheckIn.value == "" || inpCheckOut.value == "") {
            alert("Please fill in all fields.")
            return;
        }
        else {
          console.log("ok")
        }

        console.log(inpCheckIn.value, inpCheckOut.value, inpCustomerName.value, inpCustomerTel.value)

        fetch(`https://hotelbooking.stepprojects.ge/api/Booking`, {
            method: "POST",
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "roomID": id,
                "totalPrice": 100,
                "checkInDate": inpCheckIn.value,
                "checkOutDate": inpCheckOut.value,
                "customerName": inpCustomerName.value,
                "customerPhone": inpCustomerTel.value,}),
        })
        .then(resp => resp.text())
        .then(data => {
            console.log(data);
            alert("Room booked successfully!");
            localStorage.setItem("bookingId", data.split(" ")[5]);

        })   
   }
   else{
    alert("Please log in to book a room.")
    window.location.href = "../temples/login.html"
   }
   

})



// Booking retrieved successfully. Booking Id 15580