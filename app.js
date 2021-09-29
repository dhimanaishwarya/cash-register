let bill = document.querySelector("#bill-amt");
let cash = document.querySelector("#cash-amt");
let checkButton = document.querySelector("#check-btn");
let messageText = document.querySelector("#output");
let notesTable = document.querySelector("#notes-table");
let trs = document.querySelector("#row");
let tds = document.querySelectorAll(".notes");

const notes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener("click", checkButtonHandler);

function checkButtonHandler() {

    console.log(typeof (bill));
    let billAmount = bill.value;
    let cashGiven = cash.value;


    // input box is empty or not
    if ((bill.value !== "") && (cash.value !== "")) {
        // check user entered positive numbers
        if (billAmount > 0 && cashGiven > 0) {
            validateAmounts(billAmount, cashGiven);
        } else {
            showMessageText("Both inputs must be greater than zero.");
            hidenotesTable();
        }
    } else if ((bill.value === "") && (cash.value === "")) {
        showMessageText("Enter both bill amount and cash given amount.");
        hidenotesTable();
    } else if ((bill.value === "") || (cash.value === "")) {
        showMessageText("One out of two amounts is missing. Please enter both amounts.");
        hidenotesTable();
    }
}

function validateAmounts(billAmount, cashGiven) {
    if (cashGiven > billAmount) {
        let returnAmount = cashGiven - billAmount;
        messageText.style.display = "block";
        messageText.innerText = `Change to be returned to customer : Rs ${returnAmount}`;
        notesTable.style.display = "table";
        calculateChange(returnAmount);
    } else {
        showMessageText("Cash given should be more than the bill amount.");
        hidenotesTable();
    }
}

function calculateChange(returnAmount) {
    console.log("Initial return amount:", returnAmount);
    for (let i = 0; i < notes.length; i++) {
        var noOfNotes = Math.trunc(returnAmount / notes[i]);
        console.log(notes[i] + " rupee notes:", noOfNotes);
        updateInTable(i, noOfNotes);
        returnAmount = returnAmount - (notes[i] * noOfNotes);
        console.log("Current return amount:", returnAmount);
    }
    console.log("Final return amount:", returnAmount);
}

function updateInTable(i, noOfNotes) {
    console.log(tds);
    tds[i].innerText = noOfNotes;


}


function hideMessageText() {
    messageText.style.display = "none";
}

function showMessageText(msg) {
    messageText.style.display = "block";
    messageText.innerText = msg;
}

function hidenotesTable() {
    notesTable.style.display = "none";
}