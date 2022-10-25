// set global variables of elements that will be used in the application

// Bill input
const billInput = document.getElementById('bill-input');
// Tip input
const tipInput = document.getElementById('tip-input');
// select all input to get the value 
const inputs = document.querySelectorAll('.input-text');
// select the element where the resulting total will be displayed
const total = document.getElementById('total');
// select the container of the buttons to set an event listener
const btnContainer = document.querySelector('#btn-container');
const btns = document.querySelectorAll('.accum-btn');
// select the number of people
const numPeople = document.getElementById('people');
// select clear btn
const clearBtn = document.getElementById('clear-btn');
// function that calculates total bill
window.onload = ()=> {
    for(const ipt of inputs) {
         ipt.addEventListener('input', start);
         clearBtn.addEventListener('click', clear);
         displayPeople();
    }
 }

 const start = () => {
    calculateBill();
    setTotal();
 }

 const clear = () => {
    billInput.value = "";
    tipInput.value = "";
    total.innerText = "$0.00";
    numPeople.innerText = "1";
    
 }

const calculateBill = () => {
    let totalBill = 0;
    let bill = Number(billInput.value);
    let tip = bill * (Number(tipInput.value)/100);
    totalBill = (bill + tip)/NumOfPeople();
    return totalBill;

}

const setTotal = () => {
    total.innerText = `$${calculateBill().toFixed(2)}`;
}

const NumOfPeople = () => {
   let people = Number(document.getElementById('people').innerText);
   return people;
}



const upDown = (e,people) => {
    people = NumOfPeople();
    for(const btn of btns) {
        if(e.target == btn) {
          if(btn.getAttribute('value') == "+") {
            people++;
            numPeople.innerText = people;
            setTotal();
          } else if(btn.getAttribute('value') == "-") {
            if(people > 1) {
                people--;
                numPeople.innerText = people;
                setTotal();
            } else {
                alert('There must be atleast one person!')
            }
          }
        }
    }
}

// function that increments and decrements the number of people
const displayPeople = () => {
    btnContainer.addEventListener('click', upDown);
}



  



