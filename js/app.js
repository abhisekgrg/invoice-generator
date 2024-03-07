const company_name = document.getElementById('company-name').value
const user_name = document.getElementById('user-name')
const company_email = document.getElementById('company-email')
const customer_name = document.getElementById('customer-name')
const customer_email = document.getElementById('customer-email')

console.log(company_name)





const item = document.querySelector('#item')
const qty = document.querySelector('#qty')
const rate = document.querySelector('#rate')
const todolist = document.querySelector('#dolist')
const item_total = document.querySelector('#item-total')

function add_item(){
    addtodo(item.value,qty.value,rate.value);
    item.value=""
    qty.value=""
    rate.value=""
    item_total.value=""
}

const addtodo = (item,qty,rate,item_value=qty*rate) =>{
    const listitem = document.createElement("tr");
    listitem.innerHTML = `
    <td>${item}</td>
    <td>${qty}</td>
    <td>${rate}</td>
    <td>${item_value}</td>
    `;
    
    todolist.appendChild(listitem);
}





function pdf(){
    const reader = document.getElementById('pdf')
    html2pdf()
    .from(reader)
    .save();
}