window.onload=function(){
    let username=localStorage.getItem("name");
    document.getElementById("un").innerText+=username;
    console.log(username);
    let card=document.getElementById("card");
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/userhome")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        
        card.innerHTML="";
        data.forEach(all=>{
            let carditems=document.createElement("div");
            carditems.className="carditems";
            let hnamel=document.createElement("label");
            hnamel.className="hname";
            hnamel.innerText=all.hname;
            carditems.appendChild(hnamel);
            card.appendChild(carditems);
        })
    })
    .catch(err=>{
        console.error(err);
        alert("error occured to load data");
    })

document.getElementById("card").addEventListener("click",function(e){
    let item = e.target.closest(".carditems");
    if(item){
        localStorage.setItem("namehh",hnamel);
    window.location.href="userinhotel.html";
    
    }
})
}   
