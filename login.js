
function cleatText(inputField)
{
    inputField.value = '';
}

document.getElementById('login-btn').addEventListener('click' , function(){

    const emailText = document.getElementById('email-input');
    const passText = document.getElementById('pass-input');

    if(emailText.value=='rakibul@hasan.com' && passText.value=='123')
    {
        window.location.href = 'dashboard.html';
        cleatText(emailText);
    }
    else{
        alert('Put Your Email and Password Correctly');
        cleatText(emailText);
        cleatText(passText);
    }

})