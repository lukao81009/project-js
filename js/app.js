let mn = document.querySelector('#mn')



fetch('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
.then(resp => resp.json())
.then(data => displayHotels(data))


function displayHotels(arr) {
    arr.forEach(el => {
        mn.innerHTML += `
            <div class="card" >
                <img src="${el.featuredImage}" class="card-img-top" alt="..." style="width: 100%;  object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${el.name}</h5>
                    <a href="../temples/room.html?id=${el.id}" class="btn btn-primary">View Rooms</a>
                </div>
            </div>`
    })
}