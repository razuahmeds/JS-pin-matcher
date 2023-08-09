function getPin(){
    const pin = generelPin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        console.log("pin not 3 digit", pin);
        return getPin;
    }
};



function generelPin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    // console.log(pin);

    const displayPinFildt = document.getElementById('display-pin');
    displayPinFildt.value = pin;
});

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
        const typedNumberField = document.getElementById('typed-number');
        const previousTypedNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainngDigits = digits.join('');
            typedNumberField.value = remainngDigits;
        }
    }
    else{
        
        const newTypedNumber =previousTypedNumber + number;
        typedNumberField.value =newTypedNumber;
    }
});

document.getElementById('verfy-pin').addEventListener('click',function(){
    const displayPinFildt = document.getElementById('display-pin');
    const currentPin = displayPinFildt.value;



    const typedNumberField = document.getElementById('typed-number');
    const typedNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-Success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if(typedNumber === currentPin){
        
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})