let cities = document.querySelectorAll(".cities button");

let destinationImage = document.getElementById("destinationImage");
let destinationTitle = document.getElementById("destinationTitle");
let destinationDescription = document.getElementById("destinationDescription");
let destinationTags = document.getElementById("destinationTags");


let cityData = {

    "New York": {
        image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&w=1200&q=80",
        description: "Discover the amazing city of New York with its famous landmarks, streets and unforgettable experiences.",
        tags: [
            "Public Transportation",
            "City Tours",
            "Shopping",
            "Local Tours"
        ]
    },

    "California": {
        image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
        description: "Explore California and enjoy beautiful beaches, amazing landscapes and exciting attractions.",
        tags: [
            "Beach",
            "Nature & Adventure",
            "Private Transportation",
            "Local Tours"
        ]
    },

    "Alaska": {
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
        description: "Explore amazing landscapes and unforgettable adventures in one of the most beautiful places in the world.",
        tags: [
            "Public Transportation",
            "Nature & Adventure",
            "Private Transportation",
            "Local Tours"
        ]
    },

    "Sydney": {
        image: "https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071422/destination/vzvmnbw5xkbxrwhj7kva.jpg",
        description: "Visit Sydney and discover beautiful beaches, famous landmarks and amazing city experiences.",
        tags: [
            "Beach",
            "City Tours",
            "Family Plan",
            "Local Tours"
        ]
    },

    "Dubai": {
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
        description: "Experience Dubai with its modern architecture, luxury attractions and exciting activities.",
        tags: [
            "Luxury",
            "City Tours",
            "Shopping",
            "Adventure"
        ]
    },

    "London": {
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80",
        description: "Discover London and explore its historic landmarks, famous streets and beautiful attractions.",
        tags: [
            "Historic Places",
            "City Tours",
            "Public Transportation",
            "Local Tours"
        ]
    },

    "Tokyo": {
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
        description: "Explore Tokyo and enjoy its modern lifestyle, traditional culture and unforgettable attractions.",
        tags: [
            "Culture",
            "City Tours",
            "Shopping",
            "Local Tours"
        ]
    },

    "Paris": {
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
        description: "Discover Paris and enjoy its beautiful architecture, famous landmarks and unique atmosphere.",
        tags: [
            "Culture",
            "Historic Places",
            "City Tours",
            "Local Tours"
        ]
    }

};


cities.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get selected city
        let cityName = this.dataset.city;

        // Remove active from all buttons
        cities.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Add active to clicked button
        this.classList.add("active");

        // Get city data
        let city = cityData[cityName];

        // Change image
        destinationImage.src = city.image;

        // Change title
        destinationTitle.textContent = cityName;

        // Change description
        destinationDescription.textContent = city.description;

        // Change tags
        destinationTags.innerHTML = "";

        city.tags.forEach(function(tag) {

            let span = document.createElement("span");

            span.textContent = tag;

            destinationTags.appendChild(span);

        });

    });

});
// -------------------------------------------------------
let date1=document.querySelector("#date1")
let date2=document.querySelector("#date2")
let number=document.querySelector("#number")
let ErrorN=document.querySelector(".errorN")
let ErrorD=document.querySelector(".errorD")
let message=document.querySelector(".Message")
let subtotal=document.querySelector(".ppp")
let form=document.querySelector(".form form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()

    ErrorN.textContent = ""
    ErrorD.textContent = ""
    message.textContent= ""
    let valid = true
    if(number.value<=0){
        ErrorN.textContent="Please enter a valid number of guests"
        valid = false
    }

    if(date1.value>=date2.value){
        ErrorD.textContent="Please enter a valid date"
        valid = false
    }
    if (valid) {
        message.textContent="Booking Confirmed Successfully!"
        form.reset()
    }
})

form.addEventListener("input",(e)=>{
    let price=78
    let total=price*Number(number.value)
    subtotal.innerHTML=`<b>$${total}</b>`
})


let main=document.querySelector(".im img")
let small=document.querySelectorAll(".small img")

small.forEach((img)=>{
    img.addEventListener("click",()=>{
        main.src=img.src
    })
})

let comment=document.querySelectorAll("#Review .rev")
let more=document.querySelector("#Review .more")
comment.forEach((rev ,i)=>{
    if(i>=2){
        rev.style.display="none"
    }
})

more.addEventListener("click",()=>{
    comment.forEach((rev ,i)=>{
    if(i>=2){
        rev.style.display="block"
    }
})
})
// -------------------------------------------------------------
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
}