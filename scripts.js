const Modal = {
    open() {
        document.querySelector('.modal-overlay')
            .classList.add('active')
            .remove('active')

    },
    close() {

    }
}

const Transactions = [{
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '23/01/2021',
}, {
    id: 2,
    description: 'aluguel',
    amount: -500000,
    date: '23/01/2021',
}, {
    id: 3,
    description: 'internet',
    amount: -500000,
    date: '23/01/2021',
}]

const Transaction = {
    incomes() {

    },
    expenses() {

    },
    total() {

    }
}
// subistituir os dados do html pelos dados do JS

const DOM = {

    transactionContainer:document.querySelector(#data-table,thbody),


    addTransaction(transaction, index) {
        console.log(transaction)
        const tr = document.createElement('tr')
        tr.innnerHTML = DOM.innerTransaction()
    },
    innerHTMLTrasaction() {
        const html = ` 
                  <td class="description"> ${transaction.description}</td>                                                                   
                  <td class="expense">${transaction.amount}</td>
                  <td class="date">${transaction.date}</td>
                  <td>
                 <img src="./disc-img/bloq.svg" alt="imagem de menos">
                                          </td>
       `


        return html
    }
}


DOM.addTransaction(Transactions[1])
//*DOM.addTransaction(Transactions[1])
//*DOM.addTransaction(Transactions[2])

transaction.array.forEach()
for(let i=0; i<3; i++){
    console(i)
}







