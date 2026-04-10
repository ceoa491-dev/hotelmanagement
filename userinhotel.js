
document.getElementById("room").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("card").style="display:flex";
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/getroom")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let container=document.getElementById("lisin");
        container.innerHTML="";
        data.forEach(room=>{
            let card=document.createElement("div");
            card.className="carditems";
            let imagecontainer=document.createElement("div");
            imagecontainer.style.display="flex";
            imagecontainer.style.gap="10px";
            room.images.forEach(img=>{
                let image=document.createElement("img");
                image.src="data:image/jpeg;base64,"+img;
                image.className="roomim";
                image.addEventListener("click",function(){
                 document.getElementById("pop").style.display="flex";
                 document.getElementById("popupimg").src=image.src;
                 document.getElementById("cls").style.display="flex";
                })
                
                imagecontainer.appendChild(image);
            })
            let roomno=document.createElement("label");
            roomno.className="roomno";
            roomno.innerText="Room No : "+room.txtno;
            let price=document.createElement("label");
            price.className="roomprice";
            price.innerText="Price : "+room.txtprice;
            card.appendChild(imagecontainer);
            card.appendChild(roomno);
            card.appendChild(price);
            container.appendChild(card);
            
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
})