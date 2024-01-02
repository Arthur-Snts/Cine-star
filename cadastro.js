var r = document.getElementById("redireciona");
r.addEventListener("click", function(){
    window.location.href = "https://designweb1v.github.io/designweb1v.io/login"
})

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var senha = document.getElementById('senha');
    var data = document.getElementById('data');

    var emailError = document.getElementById('emailError');
    var senhaError = document.getElementById('senhaError');
    var dataError = document.getElementById('dataError');

    if (!email.value.endsWith('@escolar.ifrn.edu.br')) {
        emailError.textContent = 'O email deve terminar com @escolar.ifrn.edu.br!';
        email.style.border = '1px solid red';
        
    } else {
        emailError.textContent = '';
        email.style.border = '1px solid blue';
    }

    if (senha.value.length < 8) {
        senhaError.textContent = 'A senha deve ter pelo menos 8 caracteres!';
        senha.style.border = '1px solid red';
    } else {
        senhaError.textContent = '';
        senha.style.border = '1px solid blue';
    }
   

    if (isNaN((data.value))){
        dataError.textContent = 'Este campo não pode ter letras!';
        data.style.border = '1px solid red';
    } else {
        dataError.textContent = '';
        data.style.border = '1px solid blue';
    }


    if (emailError.textContent == '' && senhaError.textContent == '' && dataError.textContent == '') {
        event.currentTarget.submit();
    }
});
