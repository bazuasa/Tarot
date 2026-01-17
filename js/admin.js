const tbody=document.querySelector('tbody');
const pedidos=JSON.parse(localStorage.getItem('pedidos')||'[]');
pedidos.forEach(p=>{
const tr=document.createElement('tr');
tr.innerHTML=`<td>${p.nome}</td><td>${p.email}</td><td>${p.leitura}</td><td>${p.mensagem}</td><td>${p.data}</td><td>${p.status}</td>`;
tbody.appendChild(tr);
});
function exportar(){
const blob=new Blob([JSON.stringify(pedidos,null,2)],{type:'application/json'});
const a=document.createElement('a');
a.href=URL.createObjectURL(blob);
a.download='pedidos.json';
a.click();
}
