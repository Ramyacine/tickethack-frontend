
document.querySelector("#search").addEventListener('click' , function () {
    const departure = document.querySelector('#departure').value
    const arrival = document.querySelector("#arrival").value
    const date = document.querySelector('#date').value
    fetch(`http://localhost:3000/trips/${departure}/${arrival}/${date}`)
    .then(response =>  response.json())
    .then(data => {
        document.querySelector("#content-right").innerHTML = `<div id="content-right"></div>`
                    
               
        if (data.result) {
            for(let item of data.trips){
                document.querySelector("#content-right").innerHTML +=
           `
                
                <div class="voyage">
                    <p>${item.departure} > ${item.arrival}</p>  <p id="hour">${item.time}</p>  <p id="price">${item.price}€</p><button id="book">Book</button>
                </div>
            
            `
            }
        } else {
            document.querySelector("#content-right").innerHTML += 
            `<div id="train"><img src="images/notfound.png" class="train"></div>
             <div><p>No trip found</p></div>`
        }
        
        
    })
})


document.querySelector("#book").addEventListener('click' , function () {
    const trip = {
        departure : req.params.departure,
        arrival : req.params.arrival, 
        date : req.params.date,
        price : req.params.price
    }    
    fetch(`http://localhost:3000/trips`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({trip})
    }).then(response => response.json())
    .then (data => console.log(data))
    window.location.assign("cart.html")
})

