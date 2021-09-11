let nav = document.getElementById("nav");
let bar = document.getElementById("bar");
let closeNav = document.getElementById("close-nav");
bar.addEventListener("click", function(){
    nav.classList.add("open-nav")
})
closeNav.addEventListener("click", function(){
    nav.classList.remove("open-nav")
})
let i = 1
document.getElementById(`status1`).checked = true;
setInterval(()=>{
    if(i == 4){
        i =  1
    }else{
        i += 1
    }
     document.getElementById("sildeImg").src = `./assets/slider-step${i}.png`
     document.getElementById(`status${i}`).checked = true;
    // console.log(i);
}, 5000)

function getItDoneNow(ev){
   i = ev;
document.getElementById("sildeImg").src = `./assets/slider-step${ev}.png`
}

function Validation(va){

   if(va == 1){       
   let email = document.getElementById("email").value;
   let emailcheck = (email) => {
   const respo = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return respo.test(String(email).toLowerCase());
}
// console.log(emailcheck(email))

    if(!emailcheck(email)){
        document.getElementById("emailerror").style.display = "block";
    }else{
        document.getElementById("emailerror").style.display = "none";

    }
    
} else if(va == 2){
    let password = document.getElementById("password").value;

    if(password == ""){
        document.getElementById("passworderror").style.display = "block";
   }else{
       document.getElementById("passworderror").style.display = "none";
   }

}

}