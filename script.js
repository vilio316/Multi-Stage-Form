let slides= document.querySelectorAll(".formslide");
let stages= document.querySelectorAll(".progress");
let slid= 0;

//The Final Slide Builder Code
function creator(){
    let slide = slides[4];
    let prev= document.querySelector(".prev");
    let finish= document.querySelector("#finish");
    let buttonHolder= document.querySelector(".button-container")
    buttonHolder.innerHTML= ""
    buttonHolder.appendChild(prev);
buttonHolder.appendChild(finish);
let a = document.createElement("img");
a.src= "user-solid.svg";
a.className+= "final";
let b= document.createElement("p");b.className+= "head"
b.innerHTML= "Profile Review";
let namae= document.createElement('p');
namae.innerHTML= "Name : "
namae.innerHTML+= document.querySelector("#fname").value + " " +document.querySelector("#lname").value
let c= document.createElement('p');
c.innerHTML=" Username : ";
c.innerHTML+= (document.getElementById("uname").value);
let e= document.createElement("p");
e.innerHTML= "E-mail Address : ";
e.innerHTML+= document.getElementById("email").value;
let dob = document.createElement("p");
dob.innerHTML= "Date of Birth: "
dob.innerHTML+= document.getElementById("dob").valueAsDate.toDateString();
let d= document.createElement("p");
d.innerHTML=" Risk Level: "
d.innerHTML+= riskval;
slide.appendChild(a);
slide.appendChild(b);
slide.appendChild(namae);
slide.appendChild(c);
slide.appendChild(e);
slide.appendChild(dob);
slide.appendChild(d);
slide.appendChild(buttonHolder);
}
let finishing = document.getElementById("finish");
finishing.addEventListener("click", creator)
//end of final slide builder code...

// Risk Active Toggle
 let risks = document.querySelectorAll("div.risk");
 let riskval;
 for(let f=0; f < risks.length; f++){
    risks[f].addEventListener("click", ()=>{
        riskval = risks[f].getAttribute("value")});
    risks[f].addEventListener("click", ()=> {
        let opp = document.querySelectorAll("div.opposite");
            risks[f].classList.toggle("opposite");
    }
    )
}
//end
// Adds open-close effect to Coins Traded Slide
let text= document.querySelector("textarea")
text.style.display = "none";
let other= document.getElementById("oth");
other.addEventListener("click", ()=> {
    if(other.checked == true){
    text.style.display= "block";
}
else{text.style.display = "none"}
}
)
//end of CT code
let trion= document.getElementById('signin nxt');
trion.addEventListener("click", ()=>{
    let person = document.getElementById("person");
person.innerHTML+= document.getElementById("fname").value;
})
//Main Sliding Function
function showPortion(n){
    let c = n-1;
    slides[n].style.display = "block";
    if(n>0){
    stages[c].classList.remove("hidden");
    }
    if(n > 0){
     stages[c].classList.add("checked");
     slides[c].style.display = "none";
}
}
function skips(n){
    checkForm(n);
    if(checkForm(n) == false) return;
    slides[slid].style.display = "none";
    slid= slid+n;
    showPortion(slid);
}
function checkForm(number){
if(number < 0){
    return true;
}
    let valid = true;
    let omicron = slides[slid].getElementsByTagName("input");
    for (let i = 0; i < omicron.length; i++) {
        if( omicron[i].value == "" || omicron[i].className.indexOf('incomplete') !== -1){
            omicron[i].classList.add("invalid");
            omicron[i].addEventListener("focus", ()=> omicron[i].classList.remove("invalid"))
            valid= false;
        }
        else{ omicron[i].classList.remove("invalid"); valid=true;};
    }
    if(!valid){
        return false;
    }
    
}
//Checked Coins for Final Slide
let omega;
let cheki = document.getElementById("cheki");
cheki.addEventListener("click", ()=> {
    let traded= [];
    let checkboxes= document.getElementsByClassName("coin-check");
    for(let b = 0; b < checkboxes.length; b++){
        if(checkboxes[b].checked){
            if(traded.indexOf(checkboxes[b].value) == -1)
            traded.push(checkboxes[b].value);
        }
        if (other.checked) {
            traded.push(text.value)
        }
    }
    console.log(traded);
    omega = traded;
    traded.splice(0, traded.length);
})

//end 

// Password/ Confirm Password Logic
let passcheck = document.getElementById("especial");
function correct(){
    let pass= document.getElementById("pwd");
    let confirm= document.getElementById("pwd-conf");
    if(pass.value == confirm.value){
        confirm.classList.remove("invalid");
        passcheck.addEventListener("click", skips(1));
    }
    else{
        confirm.classList.add("invalid");
    }
        
}

passcheck.addEventListener("click", correct, false)
showPortion(slid)