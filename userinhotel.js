
document.getElementById("room").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("card").style="display:flex";
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/getroom")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
        })
        document.getElementById("cls").addEventListener("click",function(){
                    this.style.display="none"
                    document.getElementById("pop").style.display="none";
                    
                })
    })
    .catch(err=>{
        console.error(err);
        alert("Error Loading Rooms");
    })