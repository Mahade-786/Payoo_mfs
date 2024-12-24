// console.log("Clicked file Added");
//step -1 set event handler
// document.getElementById('btn-login').addEventListener('click',function(event){
//     //step- 2 peevent default browser(reloading browser)  
//     event.preventDefault();
    

//     //step -3 get the phone number & the pin number
//     const phoneNumber = document.getElementById('phn-number').value;
//     const pinNumber = document.getElementById('pin-number').value;
//     console.log(phoneNumber, pinNumber);

//     //step-4 this is temporary.You should do like this
    
//     if(phoneNumber === '5' && pinNumber === '1234'){
//         console.log('You are Logged In')
//     }
//     else{
//         alert('Your PhoneNumber Or Pin wrong');
//     }
// })

document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phn-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    console.log(phoneNumber, pinNumber);

    if(phoneNumber === '5' && pinNumber === '1234'){
        console.log('You are Logged in');

        //Added another html file 
        window.location.href ="/home.html";
    }
    else{
        alert('Wrong your phoneNumber or pin');
    }
});