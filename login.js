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
            localStorage.setItem("hname",data.hname);
            localStorage.setItem("name",data.name);
            localStorage.setItem("email",data.email);
            localStorage.setItem("phone",data.phone);
            alert("logged successful");
            window.location.href="home.html"
            
        }
        else{
            alert("failed to log");
        }
    })
    .catch(err=>{console.error(err);
        alert("Occured Error");
    })

})