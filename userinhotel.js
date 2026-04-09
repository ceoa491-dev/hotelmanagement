document.getElementById("room").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("carditems").style="display:flex";
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/getroom")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let container=document.getElementById("card");
        
        data.forEach(room=>{
            let card=document.createElement("div");
            card.className="carditems";
            let imagecontainer=document.createElement("div");
            imagecontainer.style.display="flex";
            imagecontainer.style.gap="10px";
            room.images.forEach(img=>{
                let image=document.createElement("img");
                image.src="data:image/jpeg;base64,"+img;
                image.className="img";
                image.addEventListener("click",function(){
                 document.getElementById("pop").style.display="flex";
                 document.getElementById("popupimg").src=image.src;
                 document.getElementById("cls").style.display="flex";
                })
                
                imagecontainer.appendChild(image);
            })
            let roomno=document.createElement("label");
            roomno.className="disroom";
            roomno.innerText="Room No : "+room.txtno;
            let price=document.createElement("label");
            price.className="price";
            price.innerText="Price : "+room.txtprice;
            card.appendChild(imagecontainer);
            card.appendChild(roomno);
            card.appendChild(price);
            container.appendChild(card);
            
        })
        
    })
    .catch(err=>{
        console.error(err);
        alert("Error Loading Rooms");
    })
    document.getElementById("cls").addEventListener("click",function(){
                    this.style.display="none"
                    document.getElementById("pop").style.display="none";
                    
                })
})