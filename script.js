let timeDisplayEl = document.querySelector("#currentDay");
let timeBlockEl = document.querySelectorAll("textarea")
let nineAMSave = document.querySelector("#nineAM-save")
let hourlyPlan = document.querySelectorAll(".plan")
let arrayStore = []
timeStamp();
colouredTabs();
renderPlans();

// This part displays the time in the header.
function timeStamp() {
    let timeStamp = moment().format("dddd, MMMM Do" )
    timeDisplayEl.textContent = timeStamp; 
}


// This part determines if a textarea is in the future or the past.
function colouredTabs() {
    let currentHour = moment().hour();
    console.log(currentHour)

    for (let i = 0; i < timeBlockEl.length; i++) {
        let blockTime = timeBlockEl[i].getAttribute("id")
        console.log(blockTime)

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

nineAMSave.addEventListener("click", storePlans);


function storePlans(event) {    
    console.log("working")
    console.log(hourlyPlan)
    
    for (let i = 0; i < hourlyPlan.length; i++) {
        const textAreaVal = hourlyPlan[i].value;
        console.log(textAreaVal)
        arrayStore.push(textAreaVal)
        
        
    }
    console.log(arrayStore)
//    let userPlan = hourlyPlan.value
//    console.log(userPlan)
    localStorage.setItem("userPlan", JSON.stringify(arrayStore));
    event.preventDefault();
}

function renderPlans() {
    let storedPlans = JSON.parse(localStorage.getItem("userPlan"))
//    console.log(storedPlans[1])
//    console.log(hourlyPlan[1])
    console.log(storedPlans[0])
    console.log(hourlyPlan[0])
    


    for (let i = 0; i < 9; i++) {
        hourlyPlan[i].textContent = storedPlans[i];
        
    }
        
        

        
    
//    let storedPlans = JSON.parse(localStorage.getItem("userPlan"))
//    console.log(storedPlans)
//    let nineamBlock = document.querySelector(".nine")
//    nineamBlock.textContent = storedPlans;
}