function send() {
    var templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };
     
    emailjs.send('service_b4m7mxp', 'template_poa247j', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });
    
}

// let btnClear = document.querySelector('button');
// let inputs = document.querySelectorAll('input');
// btnClear.addEventListener('click', () => {
//     inputs.forEach(input =>  input.value = '');
// });