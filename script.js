let timeDisplayEl = document.querySelector("#currentDay");
let timeBlockEl = document.querySelector("textarea")
let saveButtonEl = document.querySelector("#nineAM-save")




timeStamp();
colouredTabs();
storePlans();


// This part displays the time in the header.
function timeStamp() {
    let timeStamp = moment().format("dddd, MMMM Do" )
    timeDisplayEl.textContent = timeStamp; 
}




// This part determines if a textarea is in the future or the past.
function colouredTabs() {
    let currentHour = moment().format("H");
    console.log(currentHour)
    let nineAM = timeBlockEl.getAttribute("id")
    console.log(nineAM)

    if (currentHour > nineAM) {
        timeBlockEl.classList.add("past")
    }
    if (currentHour == nineAM) {
        timeBlockEl.classList.add("present")
        
    } else {
        timeBlockEl.classList.add("future")       
    }
}

saveButtonEl.addEventListener("click", storePlans);
function storePlans(event) {
    
    console.log("yeet")

    event.preventDefault();
}





function renderPlans() {
    let storedPlans = JSON.parse(localStorage.getItem("9am-plan"))

    
    
}



