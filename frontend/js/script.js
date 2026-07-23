// Welcome message
console.log("Hostel Management Website Loaded");

// Explore Rooms button
const exploreButton = document.querySelector(".hero button");

if (exploreButton) {
    exploreButton.addEventListener("click", function () {
        window.location.href = "rooms.html";
    });
}
// Login Form

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit",function(event){

        event.preventDefault();

        const email=document.getElementById("email").value;
        const password=document.getElementById("password").value;

        console.log(email,password);

        alert("Login Successful!");
    });

}
// Contact Owner Buttons

const contactButtons = document.querySelectorAll(".room-card button");

contactButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Owner contact feature will be available soon!");

    });

});
// Roommate Contact Button

const roommateButtons = document.querySelectorAll(".roommate-card button");

roommateButtons.forEach(button => {
    button.addEventListener("click", function () {
        alert("Roommate contact feature will be available after login.");
    });
});
// Orders Page Buttons

const orderButtons = document.querySelectorAll(".order-card button");

orderButtons.forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature will be connected to the backend soon.");
    });
});
// Profile Buttons

const editBtn = document.querySelector(".edit-btn");

if(editBtn){
    editBtn.addEventListener("click",function(){

        alert("Edit Profile feature coming soon!");

    });
}

const logoutBtn = document.querySelector(".logout-btn");

if(logoutBtn){
    logoutBtn.addEventListener("click",function(){

        alert("Logged Out Successfully!");

        window.location.href="login.html";

    });
}