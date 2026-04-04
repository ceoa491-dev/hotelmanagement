document.getElementById("reg").addEventListener("submit",function(e){
    e.preventDefault();
    let hname=document.getElementById("hname").value;
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/hreg",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            hname:hname,
            name:name,
            phone:phone,
            email:email,
            pass:pass
        })

    })
    .then(res=>res.text())
    .then(data=>{console.log(data);
        alert(data);
    })
    .catch(err=>{
        console.error(err);
        alert("error occcured");
    })
})