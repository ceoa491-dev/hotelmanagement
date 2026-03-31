document.getElementById("creg").addEventListener("submit",function(e){
    e.preventDefault();
    let name=document.getElementById("name").value;
    let phone=document.getElementById("phone").value;
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    fetch("https://hotelmanagementbackend-production-5acc.up.railway.app/creg",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            name:name,
            phone:phone,
            email:email,
            pass:pass
        })
    })
    .then(res=>res.text())
    .then(data=>{console.log(data);
            alert(data);})
    .catch(err=>{console.error(err);
    alert("error occured");})
})