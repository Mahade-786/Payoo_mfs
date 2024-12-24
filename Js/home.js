// step-1 add event hamdler
document.getElementById('btn-money-add')
.addEventListener('click',function(event){
event.preventDefault();
// step -2 add money to the account
const addMoneyInput = document.getElementById('add-money-input').value;
const pinNumberInput =  document.getElementById('input-pin-number').value;
// console.log(addMoneyInput, pinNumberInput);

// step-3 check pin and add money to the account
if(pinNumberInput === '1234'){
    console.log('Successfuly added money');

    // step-4 get the curent balance
const balance = document.getElementById('current-balance').innerText;
// console.log(balance);

//step-5 add addMoneyInput with balance
const balanceNumebr = parseFloat(balance);
const addMoneyNumebr = parseFloat(addMoneyInput);
const newBalance = balanceNumebr + addMoneyNumebr;
console.log(newBalance);

// step-6 updaate the balance in the dom/UI
document.getElementById('current-balance').innerText = newBalance;
}
else{
    alert('Enter correct pin');
}

});