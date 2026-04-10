
window.onload=function(){
    let head=localStorage.getItem("namehh");
    document.getElementById("hname").innerText=head;
    let un=localStorage.getItem("name");
    document.getElementById("un").innerText+=un;
}
document.getElementById("room").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("lis").style="display:flex";
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
            let btn=document.createElement("button");
            btn.className="book";
            btn.innerText="Book"
            card.appendChild(imagecontainer);
            card.appendChild(roomno);
            card.appendChild(price);
            card.appendChild(btn);
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
document.getElementById("food").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("lisf").style="display:flex";
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/getfood")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let containerf=document.getElementById("lisinf");
        containerf.innerHTML="";
        data.forEach(food=>{
            let cardf=document.createElement("div");
            cardf.className="carditemsf";
            let imagecontainerf=document.createElement("div");
            imagecontainerf.className="imagecontainerf";
            imagecontainerf.style.display="flex";
            imagecontainerf.style.gap="10px";
            food.images.forEach(img=>{
                let image=document.createElement("img");
                image.src="data:image/jpeg;base64,"+img;
                image.className="fimg";
                image.addEventListener("click",function(){
                    
                 document.getElementById("pop").style.display="flex";
                 document.getElementById("popupimg").src=image.src;
                 document.getElementById("cls").style.display="flex";
                })
                imagecontainerf.append(image);

            })
            let dis=document.createElement("label");
            dis.className="dish";
            dis.innerText="Dish : "+food.dis;
            let disprice=document.createElement("label");
            disprice.className="dprice";
            disprice.innerText="Price : "+food.disprice;
            let btnf=document.createElement("button");
            btnf.className="buy";
            btnf.innerText="Buy";
            cardf.appendChild(imagecontainerf);
            cardf.appendChild(dis);
            cardf.appendChild(disprice);
            cardf.appendChild(btnf);
            containerf.appendChild(cardf);
            
            btnf.addEventListener("click",function(){

                fetch("https://hotelmanagementbackend-production-a758.up.railway.app/order",{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                        "disname":food.dis,
                        "disprice":food.disprice,
                        "name":localStorage.getItem("name")
                    })
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    alert("Order Placed Successful");
                })
                .catch(err=>{
                    console.error(err);
                    alert("Error Placing Order");
                })
            })
        })
        document.getElementById("cls").addEventListener("click",function(){
                    this.style.display="none"
                    document.getElementById("pop").style.display="none";
                    
                })
    })
    .catch(err=>{
        console.error(err);
        alert("Error Loadind Food")
    })
})

