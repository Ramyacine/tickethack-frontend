/*
document.querySelector("#search").addEventListener('click' , function () {
    fetch('') 
    .then(response => response.json())
    .then(data => {
        if(!data){
            document.querySelector("#content-right").innerHTML = 
            `<div id="content-right">
                <div id="train"><img src="images/notfound.png" class="train"></div>
                <div><p>No trip found</p></div>
            </div>`
        } else if (data){
            for (let i=0;i<data.length;i++){
            document.querySelector("#content-right").innerHTML = 
            ``
            }
        }
    })
})
*/

document.querySelector("#search").addEventListener('click' , function () {
    document.querySelector("#content-right").innerHTML = 
    `<div id="content-right">
        <div id="train"><img src="images/notfound.png" class="train"></div>
        <div><p>No trip found</p></div>
    </div>`
    }
)


