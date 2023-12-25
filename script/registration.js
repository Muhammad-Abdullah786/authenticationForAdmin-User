import {
    auth,
    createUserWithEmailAndPassword,
    sendEmailVerification
} from '../firebase/firebaseConfig.js'



var email = document.getElementsByClassName('email')
var password = document.getElementsByClassName('pass')
var cPassword = document.getElementById('cPass')

document.getElementById('register').addEventListener(
    'click',
    handleRegister
);

function handleRegister(e) {
    e.preventDefault();
    console.log("clicked register");

    
    if (password.value !== cPassword.value) {
        alert('Password does not match');
        return;
    }

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((response) => {
            alert('Successfully registered, check email for verification');
            handleVerifyEmail(response.user);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}


function handleVerifyEmail(user) {
    console.log("USER" , user)
    sendEmailVerification(user)
        .then(() => {
            //email send successfully
            console.log("EMAIL SEND SUCCESS")
            window.location.pathname = '../../pages/login/index.html'
        })
        .catch((error) => {
            console.error('error', error);
        })
}





