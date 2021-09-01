const Modal = {
    open() {
        document.querySelector('.modal-overlay')
            .classList.add('active')
            .remove('active')

    },
    close() {

    }
}

const transactions = [{
    id:1,
    description:'Luz',
    amount:-50000,
    date:'23/01/2021', 
},{
     id:2,
    description:'Aluguel',
    amount:-50000 ,
},{
     id:3,
    description:'Internet',
    amount:-50000, 
}]

const DOM={
    transactionsContainer: document.querySelector('#data-table tbody'),
    addTransaction(transaction, index){
    const tr = document.createElement ("tr")
    tr.innerHTML=DOM.innerHTMLTransaction()
    console.log(tr.innerHTML)
     
    DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction){
       
        const html = `
         <td class="description">$(transaction.descripiton)</td>
         <td class="income">$(transaction.amount)</td>
         <td class="date">$(transaction.date)</td>
                                   <td>
         <img src="./disc-img/bloq.svg" alt="imagem de menos"> </td>
        `
    return html}
}
transactions.forEach(function(transaction){
    DOM.addTransaction(transactions[0])
})