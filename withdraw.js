
document.getElementById('withdraw-btn').addEventListener('click' , function(){

    const addWithdrawAmount = document.getElementById('withdraw-input');

    
    if(isNaN(addWithdrawAmount.value) || addWithdrawAmount.value == ''){
        alert('Enter a valid number');
        addWithdrawAmount.value = '';
        return;
    }

  

    const TotalWithdrawAmount = document.getElementById('withdraw-amount');
    const TotalBalanceAmount = document.getElementById('balance-amount');

      if(parseFloat(addWithdrawAmount.value) > parseFloat(TotalBalanceAmount.innerText))
      {
        alert('Tur Baap er Bank e eto Taka nai');
        addWithdrawAmount.value = '';
        return;
      }

    
    TotalWithdrawAmount.innerText = parseFloat(TotalWithdrawAmount.innerText) + parseFloat(addWithdrawAmount.value);
    TotalBalanceAmount.innerText = parseFloat(TotalBalanceAmount.innerText) - parseFloat(addWithdrawAmount.value);

    addWithdrawAmount.value = '';

})