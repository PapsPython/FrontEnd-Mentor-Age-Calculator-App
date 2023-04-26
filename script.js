

// My solution 

const now = new Date()
const yearEntry = document.getElementById("yearofbirth");
const monthEntry = document.getElementById("monthofbirth");
const dayEntry = document.getElementById("dayofbirth");
const labels = document.querySelectorAll("label") 
const smalls = document.querySelectorAll("small")
const imgIcon = document.querySelector(".imgicon")

let milliSeconds = 0
let remaining = 0


const APP = {
  init (){
    APP.addListeners();
},
   
addListeners(){

yearEntry.addEventListener("input", APP.calculateAge);
monthEntry.addEventListener("input",APP.calculateAge);
dayEntry.addEventListener("input",APP.calculateAge);

yearEntry.addEventListener("input", APP.validateYearInput);
monthEntry.addEventListener("input",APP.validateMonthInput);
dayEntry.addEventListener("input",APP.validateDayInput);   
 

yearEntry.addEventListener("invalid", APP.fail); monthEntry.addEventListener("invalid",APP.fail);
dayEntry.addEventListener("invalid",APP.fail);  

 
 },

calculateAge() {

labels.forEach(label => label.style.color = "black")
  
const birthdate = new Date(
Number(yearEntry.value),
Number(monthEntry.value) - 1,
Number(dayEntry.value)
  );
     
milliSeconds = now.getTime() - birthdate.getTime()
   
  APP.convertyear()
  APP. convertMonths()
  APP.convertDays()
 },
  
convertyear(){
  
if (APP.testYearInput() === false)return;
   
  const years = milliSeconds/(1000 * 60 * 60 * 24 * 365)
remaining = (milliSeconds % (1000 * 60 * 60 * 24 * 365))
  document.getElementById("year").textContent = `${Math.floor(years)}`
  
 },

convertMonths(){
  
  if (APP.testMonthInput() === false)return;
  
    const months =Math.floor(remaining /(1000*60*60*24*31))
 remaining =   remaining % (1000*60*60*24*31)
document.getElementById("month").textContent = `${Math.round(months)}`
  
 },

convertDays(){
  
  if (APP.testDayInput() === false)return;
  
  const days = Math.floor(remaining/(1000*60*60*24))  
  document.getElementById("day").textContent = `${Math.round(days)}`
  
},
 
validateYearInput(e){
let year = e.target
 yearEntry.setCustomValidity('')
  let span = year.parentElement.querySelector(".errMsg")
  span.textContent = ""
 let currently = yearEntry.checkValidity()  
  if(currently){
   APP.testYearInput()
    
 }
},
  
 testYearInput(){
      if((Number(yearEntry.value) > now.getFullYear()) || Number(yearEntry.value) === 0) {
   yearEntry.setCustomValidity('Enter a year between 1900-2023')
   yearEntry.reportValidity()
   return false;    
     }

 },
  
validateMonthInput(ev){
  let month = ev.target
monthEntry.setCustomValidity("")
let pan =  month.parentElement.querySelector(".errMsg")
  pan.textContent = ""
let currently = monthEntry.checkValidity()  
if(currently){
   APP.testMonthInput()
  }
},
  
testMonthInput(){
if((Number(monthEntry.value) > 12) || (Number(monthEntry.value) < 1)){
 monthEntry.setCustomValidity('Enter a number between 1 and 12')  
monthEntry.reportValidity()     
 return false;
    } 
 },
  
 validateDayInput(ev){
let day = ev.target 
 dayEntry.setCustomValidity('')
let an = day.parentElement.querySelector(".errMsg")
  an.textContent="";
 let currently = dayEntry.checkValidity()
   if(currently){
     APP.testDayInput()
   }
  } ,
  
 testDayInput(){
 if((Number(dayEntry.value) > 31) || (Number(dayEntry.value) <= 0)){
   dayEntry.setCustomValidity('Choose a number between 1-31')
   dayEntry.reportValidity()
   return false;
    }
  },
fail(ev){
   
  let field = ev.target
  
  
   switch (field.id) {
      case "dayofbirth":
  let an = field.parentElement.querySelector(".errMsg") ;
  an.textContent ="Birthday must be between 1-31";
   let int = field.parentElement.querySelector("label"); 
     int.style.color = "red"; 
     break; 
   case "monthofbirth":
   let aint = field.parentElement.querySelector("label"); 
    aint.style.color = "red";     
  let pan = field.parentElement.querySelector(".errMsg");
  pan.textContent = "Birthmonth must be between 1-12"; 
      break;   
   case "yearofbirth":
  let span = field.parentElement.querySelector(".errMsg");
  span.textContent = "Birthyear must between 1900 and 2024";
   let paint = field.parentElement.querySelector("label"); 
     paint.style.color = "red";     
    break; 
  }
  
smalls.forEach(function(small){ 
small.textContent === " " ? 
imgIcon.classList.remove ("movelower") : imgIcon.classList.add("movelower")
 }) 
  
}
  
}
  
document.addEventListener("DOMContentLoaded",APP.init)



//  i am thinking of deconstructuring objects and using the data //parameter to dry the code
