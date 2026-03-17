let id = window.location.search.split("=")[1]
let rooms = document.querySelector("#rooms")

let btnClear = document.querySelector('#clearRoomFilters')
let btnApply = document.querySelector('#applyRoomFilters')
let inpMaxPrice = document.querySelector('#maxPrice')
let inpGuest = document.querySelector('#guestFilter')
let inpType = document.querySelector('#typeFilter')

let date = new Date().toISOString().split("T")[0]
checkInDate.setAttribute("min", date)
checkOutDate.setAttribute("min", date)


fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
    .then(resp => resp.json())
    .then(displayRooms);

function displayRooms(obj) {
    console.log("ok", obj);
    
    rooms.innerHTML = ""
    obj.rooms.forEach(el => {
        rooms.innerHTML += `<div class="card" >
                <img src="${el.images[0].source}" class="card-img-top" alt="..." style="width: 100%;  object-fit: cover;">
                <div class="card-body">
                    <div class="card-info">
                        <h5 class="card-title">${el.name}</h5>
                        <div class="card-price">
                            <h2> Cost ${el.pricePerNight} $ </h2>
                        </div>
                    </div>
                    <a href="./book now.html?roomId=${el.id}" >Book Now</a>
                </div>
            </div>`
    });
}
function displayRooms2(arr) {
    console.log("ok", arr);
    
    rooms.innerHTML = ""
    arr.forEach(el => {
        rooms.innerHTML += `<div class="card" >
                <img src="${el.images[0].source}" class="card-img-top" alt="..." style="width: 100%;  object-fit: cover;">
                <div class="card-body">
                    <div class="card-info">
                        <h5 class="card-title">${el.name}</h5>
                        <div class="card-price">
                            <h2> Cost ${el.pricePerNight} € </h2>
                        </div>
                    </div>
                    <a href="./book now.html?roomId=${el.id}" >Book Now</a>
                </div>
            </div>`
    });
}

btnApply.addEventListener("click", () => {
    console.log(inpGuest.value, inpType.value, inpMaxPrice.value);

    fetch(
        'https://hotelbooking.stepprojects.ge/api/Rooms/GetFiltered', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
        },     body: JSON.stringify({
                priceTo : inpMaxPrice.value,
                roomTypeId: inpType.value,
                maximumGuests  : inpGuest.value,
            })
        }

        // `https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}?maxPrice=${inpMaxPrice.value}&guests=${inpGuest.value}&type=${inpType.value}`,
    )
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data);
            displayRooms2(data);
        });
});

btnClear.addEventListener("click", () => {
    inpMaxPrice.value = "";
    inpGuest.value = "";
    inpType.value = "";

    fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
        .then(resp => resp.json())
        .then(displayRooms);
});