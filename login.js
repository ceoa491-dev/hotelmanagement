document.getElementById("log").addEventListener("submit",function(e){
    e.preventDefault();
    let email=document.getElementById("email").value;
    let pass=document.getElementById("pass").value;
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/hlog",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(({
            email:email,
            pass:pass
        }))
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.status==="success"){
            alert("logged successful");
        }
        else{
            alert("failed to log");
        }
    })
    .catch(err=>{console.error(err);
        alert("Occured Error");
    })

})