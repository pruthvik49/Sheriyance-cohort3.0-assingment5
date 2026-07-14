const formBtn = document.querySelector('#fbtn')
const form = document.querySelector('#ff')
const submit = document.querySelector('#sb')
const formCard = document.querySelector('#ff form')
const balh1 = document.querySelector('#bal')
const type = document.querySelector('#type')
const description = document.querySelector('input[name="description"]')
const amount = document.querySelector('input[name="amount"]')
const date = document.querySelector('input[name="date"]')
const category = document.querySelector('input[name="category"]')

let totalBalance = 0;

let addBalance = ()=>{
    totalBalance = transactions.reduce((acc, element) => {
        return acc + element.amount;
    }, 0)
    // console.log(totalBalance);
}


form.style.display = 'none'

const storageKey = 'formVal'
let transactions = []

const savedTransactions = localStorage.getItem(storageKey)

if (savedTransactions ) {
    try {
        const parsed = JSON.parse(savedTransactions)
        transactions = Array.isArray(parsed) ? parsed : [parsed]
    } catch (error) {
        console.warn('Could not parse saved transactions:', error)
        transactions = []
    }
}

formBtn.addEventListener('click', (event) => {
    event.stopPropagation()
    form.style.display = 'flex'

    form.addEventListener('click', (event) => {
        if (event.target === form) {
            form.style.display = 'none'
        }
    })

    formCard.addEventListener('click', (event) => {
        event.stopPropagation()
    })
})


submit.addEventListener('click', (e) => {
    e.preventDefault()

    const newTransaction = {
        type: type.value,
        description: description.value,
        amount: Number(amount.value),
        date: date.value,
        category: category.value
    }
     if(type.value ==="Income" ){
    transactions.push(newTransaction)
    localStorage.setItem(storageKey, JSON.stringify(transactions))
// localStorage.clear()
     }
    
    form.style.display = 'none'
    // after form submission
    addBalance()
    displayb()
})
 let displayb = ()=>{
     balh1.textContent ="$"+ Math.floor(totalBalance).toFixed(2)
 }

 // Initialize balance display
 addBalance()
 displayb()







