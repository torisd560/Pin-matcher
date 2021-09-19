function getPin(){
    const pin = Math.round(Math.random()*10000)
    const pinString = pin + '';
    if (pinString.length==4){
        return pin;
    }
    else{
        return getPin()
    }
}
// generate pin numbers
function generatePin(){
    const pin = getPin()
   document.getElementById('display-pin').value = pin;
}
// display input numbers
document.getElementById('key-numbers').addEventListener('click', function(event){
    const numbers = event.target.innerText
    const displayNumbersInput = document.getElementById('display-numbers');
    if (isNaN(numbers)){
        if (numbers=='C'){
            displayNumbersInput.value = '';
        }
    }
    else{
        displayNumbersInput.value = displayNumbersInput.value + numbers;
    }
})
// submit and verify pin
    function verifyPin(){
        const displayNumbersInput = document.getElementById('display-numbers').value;
        const pin = document.getElementById('display-pin').value;
        const successMessage = document.getElementById('success-msg');
        const errorMessage = document.getElementById('error-mgs')   
      
        if ( pin==displayNumbersInput){
          successMessage.style.display = 'block'
          errorMessage.style.display = 'none'
        }
        else{
          errorMessage.style.display = 'block'
          successMessage.style.display = 'none'
       }
    }
 

