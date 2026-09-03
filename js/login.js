
const loginBtn = document.getElementById('show-login');
const signupBtn = document.getElementById('show-signup');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');


loginBtn.addEventListener('click', () => {
    loginForm.classList.remove('hidden-form');
    loginForm.classList.add('active-form');
    signupForm.classList.remove('active-form');
    signupForm.classList.add('hidden-form');
    loginBtn.classList.add('active');
    signupBtn.classList.remove('active');
});

signupBtn.addEventListener('click', () => {
    signupForm.classList.remove('hidden-form');
    signupForm.classList.add('active-form');
    loginForm.classList.remove('active-form');
    loginForm.classList.add('hidden-form');
    signupBtn.classList.add('active');
    loginBtn.classList.remove('active');
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    localStorage.setItem('registeredEmail', email);
    localStorage.setItem('registeredPassword', password);

    alert('Account created successfully! You can now log in.');
    loginBtn.click();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    
    const savedEmail = localStorage.getItem('registeredEmail');
    const savedPassword = localStorage.getItem('registeredPassword');


    if (email === savedEmail && password === savedPassword) {

        window.location.href = 'index.html'; 
    } else {
        alert('Invalid email or password!');
    }
});