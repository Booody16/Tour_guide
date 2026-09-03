let allTabs = document.querySelectorAll('.btn-tab');

allTabs.forEach(function(button) {
    button.onclick = function() {
        
     
        allTabs.forEach(function(item) {
            item.classList.remove('active');
        });
        
       
        button.classList.add('active');
    };

});
let myForm = document.querySelector('.form')
let confirmPassword = document.getElementById('confirm_password');

myForm.onsubmit = function(event) {
    
  event.preventDefault();
    if (password.value !== confirmPassword.value) {
        alert('password not match');
    } else {
        alert('welcome back ');
    }
};
let editIcon = document.getElementById('edit-icon');
let imageInput = document.getElementById('image-input');
let profileImg = document.querySelector('.image img');

editIcon.onclick = function() {
    imageInput.click();
};

imageInput.onchange = function() {
    let file = imageInput.files[0];
    if (file) {
        profileImg.src = URL.createObjectURL(file);
    }
};