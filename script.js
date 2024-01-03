const sidebar = document.querySelector('aside');
const botao_menu = document.getElementById('botao-menu');
const botao_fechar = document.getElementById('botao-fechar');

const dark_mode = document.querySelector('.dark-mode');

botao_menu.addEventListener('click', () =>{
    sidebar.style.display = 'block';
});

botao_fechar.addEventListener('click', () =>{
    sidebar.style.display = 'none'
})

dark_mode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    dark_mode.querySelector('span:nth-child(1)').classList.toggle('ativo');
    dark_mode.querySelector('span:nth-child(2)').classList.toggle('ativo');
})


itens.forEach(item =>{
    const tr = document.createElement('tr');
    const trContent = `
        <td>${item.plano}</td>
        <td>${item.mes}</td>
        <td>${item.pagamento}</td>
        <td class="${item.situacao === 'Vencido' ? 'primary' : item.situacao === 'Cancelado' ? 'vermelho' : 'warning'}">${item.situacao}</td>
        <td class="primary">Detalhes</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

var a = document.getElementById("inicio");
a.addEventListener("click", function(){
  window.location.href = "https://alvesarthur1983.github.io/Cine-star/inicial"
})
var b = document.getElementById("seuperfil");
b.addEventListener("click", function(){
    window.location.href = "https://alvesarthur1983.github.io/Cine-star/seuperfil"
})
var c = document.getElementById("categorias");
c.addEventListener("click", function(){
    window.location.href = "https://alvesarthur1983.github.io/Cine-star/categorias"
})
var e = document.getElementById("sair");
e.addEventListener("click", function(){
    window.location.href = "https://alvesarthur1983.github.io/Cine-star/sair"
})