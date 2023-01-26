let timeDisplayEl = document.querySelector("#currentDay");
let timeBlockEl = document.querySelector("textarea")
let saveButtonEl = document.querySelector("#nineAM-save")
let hourlyPlan = document.querySelector(".plan")




timeStamp();
colouredTabs();
renderPlans();


saveButtonEl.addEventListener("click", storePlans);

// This part displays the time in the header.
function timeStamp() {
    let timeStamp = moment().format("dddd, MMMM Do" )
    timeDisplayEl.textContent = timeStamp; 
}




// This part determines if a textarea is in the future or the past.
function colouredTabs() {
    let currentHour = moment().hour();
    console.log(currentHour)
    let nineAM = timeBlockEl.getAttribute("id")
    console.log(nineAM)

    if (currentHour > nineAM) {
        timeBlockEl.classList.remove("future");
        timeBlockEl.classList.remove("present");
        timeBlockEl.classList.add("past");
        
        
    }
    else if (currentHour == nineAM) {
        timeBlockEl.classList.add("present");
        timeBlockEl.classList.remove("future");
        timeBlockEl.classList.remove("past");
        
    } 
    else {
        timeBlockEl.classList.add("future");    
        timeBlockEl.classList.remove("present");
        timeBlockEl.classList.remove("past");
          
    } 
}


function storePlans(event) {
    
    console.log("yeet")
    let userPlan = hourlyPlan.value
    console.log(userPlan)
    localStorage.setItem("userPlan", JSON.stringify(userPlan));

    event.preventDefault();
}





function renderPlans() {
    let storedPlans = JSON.parse(localStorage.getItem("userPlan"))
    console.log(storedPlans)
    timeBlockEl.textContent = storedPlans;

    
    
}



