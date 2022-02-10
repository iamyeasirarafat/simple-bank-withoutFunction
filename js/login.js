// user name password 
const userName = 'demo';
const pass = 'demo';

// account validation......
document.getElementById('login').addEventListener('click', function(){
    const email = document.getElementById('username');
    const password = document.getElementById('password')
    if (email.value == userName && password.value == pass ) {
        location.href ='bank.html'
    }else{
      alert ('your username and password was incorrect use ,demo, as your username and password,');
    }
})
