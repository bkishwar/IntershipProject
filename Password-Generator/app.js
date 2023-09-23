
const resultElement = document.querySelector('.result');
const cardElement = document.querySelector('.card');


const lettersElement = document.querySelector('#letters');
const numbersElement = document.querySelector('#numbers');
const symbolsElement = document.querySelector('#symbols');

const copyElement = document.querySelector('#copy');
const rangeElement = document.querySelector('#slider');

let lengthOfPassword = 8;
const onchangePassword = () => {
    if(lengthOfPassword<8){
        cardElement.style.borderTopColor = 'red';
    
    }else if ((lengthOfPassword > 8) && (lengthOfPassword <14)) {
        cardElement.style.borderTopColor = 'orange';
    }else if (lengthOfPassword > 14) {
        cardElement.style.borderTopColor = 'green';
    }

};

const generate_random_password = () => {
    const letters =lettersElement.checked ? 'abcdefghijklmanopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';

    const numbers = numbersElement.checked ? '1234567890' : '';
    const symbols = symbolsElement.checked ?'!@#$%^&*()_+-=<>,.?/:;[]{}' : '';

    const char_set = letters + symbols +numbers;
   
    let password = '' ;
    for(let i=0; i<lengthOfPassword; i++){
    var element = char_set[Math.floor(Math.random() * char_set.length)];
        password += element;
}
if(char_set.length === 0){
    password = "You can't generate a password without any character selected:";

}
onchangePassword();
resultElement.textContent = password;
console.log(password);
};
rangeElement.addEventListener('change', (e) => {
    lengthOfPassword = e.target.value;
    generate_random_password();
});
generate_random_password();

const copy_to_clipboard = (e) => {
    resultElement.select();
    const isSuccssful = document.execCommand('copy');
    if(isSuccssful){
        copyElement.textContent = 'Copied';
        setTimeout(() => {
            copyElement.textContent = 'Copy';
        },2000);   
    }
    else {
        resultElement.textContent = 'Your browser does not support clipboard.';
    }
};