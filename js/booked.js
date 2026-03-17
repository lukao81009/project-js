let bookingRows = document.querySelector('#bookingRows')

fetch('https://hotelbooking.stepprojects.ge/api/Booking')
  .then(resp => resp.json())
  .then(data => displayBookings(data))

function displayBookings(arr) {

  
  arr.forEach(el => {
    let checkInDate = new Date(el.checkInDate).toISOString().split("T")[0]
    let checkOutDate = new Date(el.checkOutDate).toISOString().split("T")[0]
    
    bookingRows.innerHTML += `
      <td>${el.id}</td>
      <td>${el.roomID}</td>
      <td>
        Name: ${el.customerName}<br>
        Phone: ${el.customerPhone}
      </td>
      <td>${el.isConfirmed}</td>
      <td>${checkInDate}</td>
      <td>${checkOutDate}</td>
      <td>${el.totalPrice}$</td>`
  })
}