let id = window.location.search.split("=")[1]
let rooms = document.querySelector("#rooms")

fetch(`https://hotelbooking.stepprojects.ge/api/Hotels/GetHotel/${id}`)
.then(resp => resp.json())
.then(resp =>  disprooms(resp))

function disprooms(obj) {
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
                    <a href="" >Book Now</a>
                </div>
            </div>`
    });
}