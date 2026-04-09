window.onload=function(){
    let username=localStorage.getItem("name");
    console.log(username);
    fetch("https://hotelmanagementbackend-production-a758.up.railway.app/userhome")
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(err=>{
        console.error(err);
        alert("error occured to load data");
    })
}
