const modal=document.getElementById('modal');
const leituraInput=document.getElementById('leitura');
document.querySelectorAll('.agendar').forEach(btn=>{
btn.onclick=()=>{
leituraInput.value=btn.dataset.leitura;
modal.classList.remove('hidden');
}
});

document.getElementById('form').onsubmit=e=>{
e.preventDefault();
const pedido={
nome:nome.value,
email:email.value,
leitura:leitura.value,
mensagem:mensagem.value,
data:new Date().toLocaleString(),
status:'Em andamento'
};
const pedidos=JSON.parse(localStorage.getItem('pedidos')||'[]');
pedidos.push(pedido);
localStorage.setItem('pedidos',JSON.stringify(pedidos));
msg.innerText='Pedido enviado com sucesso!';
e.target.reset();
}
