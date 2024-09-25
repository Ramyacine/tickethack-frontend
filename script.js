
document.querySelector("#search").addEventListener('click' , function () {
    const departure = document.querySelector('#departure').value
    const arrival = document.querySelector("#arrival").value
    fetch('http://localhost:3000/trips')
    .then(response =>  response.json())
    .then(data => {
           console.log(data)
    })
})


/*
document.querySelector("#search").addEventListener('click' , function () {
    document.querySelector("#content-right").innerHTML = 
    `<div id="train"><img src="images/notfound.png" class="train"></div>
     <div><p>No trip found</p></div>`
    }
)
*/