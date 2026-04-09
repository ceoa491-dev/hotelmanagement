window.onload=function(){
    let username=localStorage.getItem("name");
    console.log(username);
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/userhome")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        let card=document.getElementById("card");
        card.innerHTML="";
        data.forEach(all=>{
            let carditems=document.createElement("div");
            carditems.className="carditems";
            let hnamel=document.createElement("lable");
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
}
