
document.getElementById('cashOut-btn-show').addEventListener('click',function(){
// show AddMoney button clicked

document.getElementById('add-money-form').classList.add('hidden');
document.getElementById('cash-out-form').classList.remove('hidden');

});

// document.getElementById('cashOut-btn-show').addEventListener('click',function(){
//     // show AddMoney button clicked
    
//     document.getElementById('add-money-form').classList.add('hidden');
//     document.getElementById('cash-out-form').classList.remove('hidden');
    
//     });
// show cash out button clicked

document.getElementById('addMoney-btn-show').addEventListener('click',function(){
  
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('add-money-form').classList.remove('hidden');

});