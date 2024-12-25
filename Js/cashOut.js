document.getElementById('btn-cash-out').addEventListener('click',function(event){
 event.preventDefault();

 const cashOut = document.getElementById('input-cashout').value;
 const cashOutNumenr = parseFloat(cashOut);
 const pinNumner = document.getElementById('input-cashOut-pin').value;

 if(pinNumner === '1234'){

    const balance = document.getElementById('current-balance').innerText;
    
    const balanceNumner = parseFloat(balance);
    const newBalance = balanceNumner - cashOutNumenr;
    document.getElementById('current-balance').innerText = newBalance;
 }
 else{
    alert('Please try again');
 }

});