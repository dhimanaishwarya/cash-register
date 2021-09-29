const billAmount = document.querySelector("#bill-amt");
const cashAmount = document.querySelector("#cash-amt");
const checkBtn = document.querySelector("#check-btn");
const output = document.querySelector("#output");


function changeReturned() {

}


function checkBillAmout() {
    billAmount.value < 0 || cashAmount.value < billAmount.value || billAmount
        .value && cashAmount.value ? output.innerHTML = "put a valid value" : output.innerHTML = "valid value";
}

checkBtn.addEventListener("click", function () {
    console.log("check btn clicked");
    checkBillAmout();
})