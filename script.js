let timeDisplayEl = document.querySelector("#currentDay");
let timeBlockEl = document.querySelectorAll("textarea")
let nineAMSave = document.querySelector("#nineAM-save")
let hourlyPlan = document.querySelectorAll(".plan")

let arrayStore = []
timeStamp();
colouredTabs();
renderPlans();

// Event delegation is used here to trigger the storePlans function
window.addEventListener("click", function(event) {
    element = event.target;
    if (element.matches("button") === true) {
        storePlans(); 
    }
})

// This part displays the time in the header.
function timeStamp() {
    let timeStamp = moment().format("dddd, MMMM Do" )
    timeDisplayEl.textContent = timeStamp; 
}

// This part determines if a textarea is in the future or the past.
function colouredTabs() {
    let currentHour = moment().hour();

    for (let i = 0; i < timeBlockEl.length; i++) {
        let blockTime = timeBlockEl[i].getAttribute("id")

        if (currentHour > blockTime) {
           timeBlockEl[i].classList.remove("future");
           timeBlockEl[i].classList.remove("present");
           timeBlockEl[i].classList.add("past");           
        }
        else if (currentHour == blockTime) {
           timeBlockEl[i].classList.add("present");
           timeBlockEl[i].classList.remove("future");
           timeBlockEl[i].classList.remove("past");            
        } 
        else {
           timeBlockEl[i].classList.add("future");    
           timeBlockEl[i].classList.remove("present");
           timeBlockEl[i].classList.remove("past");        
        }     
    }   
}

// This stores the plans when the save button is pressed
function storePlans() {    
    for (let i = 0; i < hourlyPlan.length; i++) {
        const textAreaVal = hourlyPlan[i].value;
        arrayStore.push(textAreaVal) 
    }
    localStorage.setItem("userPlan", JSON.stringify(arrayStore));
}

// This renders any plans that are already in arrayStore
function renderPlans() {
    
    let storedPlans = JSON.parse(localStorage.getItem("userPlan"))
    console.log(storedPlans)
    if (storedPlans == null) {
        return    
    }
    for (let i = 0; i < 9; i++) {
        hourlyPlan[i].textContent = storedPlans[i];
    }
}