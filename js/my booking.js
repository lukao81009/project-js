let btnDelete = document.querySelector('.btnDelete')
let bookingId = localStorage.getItem('bookingId')
let h1 = document.querySelector('.mh1')

if(bookingId != null) {
    btnDelete.addEventListener("click", ()=> {
        fetch(`https://hotelbooking.stepprojects.ge/api/Booking/${bookingId}`, {
            method : 'DELETE',
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            alert("Booking deleted successfully.")
            localStorage.removeItem('bookingId')
            window.location.href = "./home.html"
        })
    })

    h1.innerText += ` :  ${localStorage.getItem('bookingId')}`

    btnDelete.innerHTML += `Delete`
}
else {
    h1.innerText = "You have no booked rooms."
}   


