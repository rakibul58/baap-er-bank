
document.getElementById('deposit-btn').addEventListener('click' , function(){

    const addDepositAmount = document.getElementById('deposit-input');
    
    if(isNaN(addDepositAmount.value) || addDepositAmount.value == ''){
        alert('Enter a valid number');
        addDepositAmount.value = '';
        return;
    }

    const TotalDepositAmount = document.getElementById('deposit-amount');
    const TotalBalanceAmount = document.getElementById('balance-amount');

    
    TotalDepositAmount.innerText = parseFloat(TotalDepositAmount.innerText) + parseFloat(addDepositAmount.value);
    TotalBalanceAmount.innerText = parseFloat(TotalBalanceAmount.innerText) + parseFloat(addDepositAmount.value);

    addDepositAmount.value = '';

})