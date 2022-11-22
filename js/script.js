const button = document.querySelector('div.button a.btn');
console.log(button);

const km = document.getElementById('km');

const age = document.getElementById('age');

const output = document.getElementById('output');





button.addEventListener('click', function() {

    let price = 0.2762 * km.value;

    const minorDiscount = (17.5 / 100 * price);

    const seniorDiscount = (33.3 / 100 * price);

    if (age.value < 18) {
        price = price - minorDiscount;
    } else if (age.value >= 65) {
        price = price - seniorDiscount;
    }
    
    console.log(price.toFixed(2));

    
    output.innerHTML = `Il biglietto costa $ {}`

});


    







