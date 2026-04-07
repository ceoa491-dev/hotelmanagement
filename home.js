window.onload=function(){
let hotelname=localStorage.getItem("hname");
document.getElementById("namehotel").innerText=hotelname;
console.log(hotelname);
}
document.getElementById("addr").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("addr_form").style="display:flex";
})
    
document.getElementById("formw").addEventListener("submit",function(e){
        e.preventDefault();
    
        let txtno=document.getElementById("txtno").value;
        let txtprice=document.getElementById("txtprice").value;
        let files=document.getElementById("imgupp").files;
        let formData=new FormData();
        formData.append("txtno",txtno);
        formData.append("txtprice",txtprice);
        for(let i =0;i<files.length;i++){
            formData.append("images",files[i]); 
        }
        fetch("https://hotelmanagementbackend-production-a758.up.railway.app/addroom",{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(data=>{if(data.status=="success"){
            alert("Room Added Successfully");

        }
    else{
        alert ("Failed to Add Room");
    }})

        .catch(err=>{
            console.error(err);
            alert("error occured");
        })
    })
    document.getElementById("reset").addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById("addr_form").style="display:none";
        document.getElementById("txtno").value="";
        document.getElementById("txtprice").value="";
        document.getElementById("imgupp").value="";
    })
document.getElementById("addf").addEventListener("click",function(e){
    e.preventDefault();

    document.getElementById("addf_form").style="display:flex";
    document.getElementById("reset2").addEventListener("click",function(e){
        e.preventDefault();
        document.getElementById("addf_form").style="display:none";
        document.getElementById("dis").value="";
        document.getElementById("dispice").value="";
        document.getElementById("imgupp2").value="";

    })
})
document.getElementById("viewr").addEventListener("click",function(e){
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
                    if(image.style.height==="500px"){
                        image.style.height="140px";
                        image.style.height="140px";

                    }
                    else{
                        image.style.height="500px";
                        image.style.width="500px";
                    }
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
    })
    .catch(err=>{
        console.error(err);
        alert("Error Loading Rooms");
    })
})
document.getElementById("viewf").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("lisf").style="display:flex";
})

