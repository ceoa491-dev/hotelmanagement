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
})
document.getElementById("viewf").addEventListener("click",function(e){
    e.preventDefault();
    document.getElementById("lisf").style="display:flex";
})

