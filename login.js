var r = document.getElementById("redireciona");
r.addEventListener("click", function(){
    window.location.href = "https://192.168.0.10/Cadastro.html"
})

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email');
    var senha = document.getElementById('Senha');
    var emailError = document.getElementById('emailError');
    var senhaError = document.getElementById('senhaError');

    if (!email.value.endsWith('@escolar.ifrn.edu.br')) {
        emailError.textContent = 'O email deve terminar com @escolar.ifrn.edu.br';
        email.style.border = '1px solid red';
        
    } else {
        emailError.textContent = '';
        email.style.border = '1px solid blue';
    }

    if (senha.value.length < 8) {
        senhaError.textContent = 'A senha deve ter pelo menos 8 caracteres';
        senha.style.border = '1px solid red';
    } else {
        senhaError.textContent = '';
        senha.style.border = '1px solid blue';
    }

    if (emailError.textContent == '' && senhaError.textContent == '') {
        event.currentTarget.submit();
        window.location.href = "https://alvesarthur1983.github.io/Cine-star/inicial"
    }
});


