let dt = new Date()

let endDate = new Date(
    dt.getFullYear(),
    dt.getMonth() + 1,
    0
).getDate()

function RenderDate(){
    let today = new Date()
dt.setDate(1)
let day =dt.getDay();


let cells =''
for(x=day; x>0; x--){
    cells += "<div>" + '' + "</div>"
}
for( let i=1; i<=endDate; i++){
    if(i == today.getDate() && dt.getMonth()== today.getMonth()){
        cells += "<div class='today'>" + i + "</div>"
    }else{
    cells += "<div>" + i + "</div>"
    }
}

document.getElementsByClassName("days")[0].innerHTML = cells
}

function handleMonths(){
    let selectedMonth = document.getElementById("selectMonth").value
    dt.setMonth(selectedMonth)
    RenderDate()
    
}

function handleYear(){
    let selectedYear = document.getElementById("selectYear").value
    dt.setFullYear(selectedYear)
    RenderDate()
}

function handleDate() {
    let selectedDate = document.getElementById("inputDate").value;
  
    if (selectedDate !== "") {
      let day = parseInt(selectedDate);
      if (day >= 1 && day <= endDate) {
        dt.setDate(day);
        RenderDate();
  
        // Highlight the selected date with a yellow background color
        let dayElements = document.querySelectorAll(".days div");
        for (let i = 0; i < dayElements.length; i++) {
          let dayElement = dayElements[i];
          if (parseInt(dayElement.innerHTML) === day) {
            dayElement.style.backgroundColor = "white" ? "green": "white";
          } else {
            dayElement.style.backgroundColor = "";
          }
        }
      } else {
        alert("Invalid date. Please enter a valid date between 1 and " + endDate);
      }
    }
  }
  