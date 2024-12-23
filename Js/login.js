// console.log("Clicked file Added");
//step -1 set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    //step- 2 peevent default browser(reloading browser)  

    event.preventDefault();
    console.log('Clicked Log in');

    //step -3 get the phone number
    const phoneNumber = document.getElementById('phn-number').value;
    console.log(phoneNumber);
})