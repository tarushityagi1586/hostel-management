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

if (loginForm) {

    loginForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {

            const response = await fetch("http://localhost:5000/api/users/login", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })

            });

            const data = await response.json();

            if (response.ok) {

                // Save login information
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));

                alert("Login Successful!");

                // Redirect to home page
                window.location.href = "index.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to backend.");

        }

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
// Profile Buttons

const logoutBtn = document.querySelector(".logout-btn");

if(logoutBtn){
    logoutBtn.addEventListener("click",function(){

        alert("Logged Out Successfully!");

        window.location.href="login.html";

    });
}

const profileName = document.getElementById("profileName");

if (profileName) {

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {

        profileName.textContent = user.name;
        document.getElementById("profileEmail").textContent = user.email;
        document.getElementById("profilePhone").textContent = user.phone;
        document.getElementById("profileCollege").textContent = user.college;
        document.getElementById("profileBudget").textContent = user.budget;
        document.getElementById("profileFood").textContent = user.foodPreference;

    }

}
// ------------------------------
// Load Rooms from Backend
// ------------------------------

const roomContainer = document.getElementById("roomContainer");

if (roomContainer) {

    loadRooms();

}

async function loadRooms() {

    try {

        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/rooms", {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        const data = await response.json();

        roomContainer.innerHTML = "";

        if (data.success && data.rooms.length > 0) {

            let filteredRooms = data.rooms;

const location = document.getElementById("locationFilter")?.value.toLowerCase() || "";
const type = document.getElementById("typeFilter")?.value;
const budget = document.getElementById("budgetFilter")?.value;

filteredRooms = filteredRooms.filter(room=>{

    const matchLocation =
        room.location.toLowerCase().includes(location);

    const matchType =
        type === "" || room.roomType === type;

    const matchBudget =
        budget === "" || room.rent <= Number(budget);

    return matchLocation && matchType && matchBudget;

});

filteredRooms.forEach(room=>{

                roomContainer.innerHTML += `
                    <div class="room-card">

                        <h3>${room.title}</h3>

                        <p><strong>Location:</strong> ${room.location}</p>

                        <p><strong>Rent:</strong> ₹${room.rent}/month</p>

                        <p><strong>Type:</strong> ${room.roomType}</p>

                        <p><strong>Owner:</strong> ${room.ownerName}</p>

                        <p><strong>Phone:</strong> ${room.ownerPhone}</p>

                        <p>${room.description}</p>

                        <div class="room-buttons">

                       <button onclick="contactOwner('${room.ownerPhone}')">
                          Contact
                        </button>

                       <button onclick="editRoom('${room._id}')">
                          Edit
                       </button>

                       <button onclick="deleteRoom('${room._id}')">
                          Delete
                          </button>

                       </div>

                    </div>
                `;

            });

        } else {

            roomContainer.innerHTML = "<h3>No rooms available.</h3>";

        }

    } catch (error) {

        console.error(error);

        roomContainer.innerHTML = "<h3>Unable to load rooms.</h3>";

    }

}
// ------------------------------
// Load Roommates from Backend
// ------------------------------

const roommateContainer = document.getElementById("roommateContainer");

if (roommateContainer) {

    loadRoommates();

}

async function loadRoommates() {

    try {

        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5000/api/roommates", {

            headers: {
                Authorization: `Bearer ${token}`
            }

        });

        const data = await response.json();

        roommateContainer.innerHTML = "";

        if (data.success && data.roommates.length > 0) {

            data.roommates.forEach(roommate => {

             roommateContainer.innerHTML += `
<div class="roommate-card">

    <h3>${roommate.name}</h3>

    <p><strong>Age:</strong> ${roommate.age}</p>

    <p><strong>Gender:</strong> ${roommate.gender}</p>

    <p><strong>College:</strong> ${roommate.college}</p>

    <p><strong>Location:</strong> ${roommate.location}</p>

    <p><strong>Budget:</strong> ₹${roommate.budget}</p>

    <p><strong>Food:</strong> ${roommate.foodPreference}</p>

    <p><strong>Smoking:</strong> ${roommate.smoking}</p>

    <p><strong>Contact:</strong> ${roommate.contact}</p>

    <p>${roommate.bio || ""}</p>

    <button>Contact</button>

</div>
`;  

            });

        } else {

            roommateContainer.innerHTML = "<h3>No roommate posts available.</h3>";

        }

    } catch (error) {

        console.error(error);

        roommateContainer.innerHTML = "<h3>Unable to load roommate data.</h3>";

    }

}

// Contact Owner
function contactOwner(phone){

    window.location.href = `tel:${phone}`;

}

// Edit Room
function editRoom(id){

    localStorage.setItem("editRoomId", id);

    window.location.href = "editRoom.html";

}

// Delete Room
async function deleteRoom(id){

    if(!confirm("Delete this room?")) return;

    const token = localStorage.getItem("token");

    try{

        const response = await fetch(`http://localhost:5000/api/rooms/${id}`,{

            method:"DELETE",

            headers:{
                Authorization:`Bearer ${token}`
            }

        });

        const data = await response.json();

        if(response.ok){

            alert("Room deleted successfully!");

            loadRooms();

        }else{

            alert(data.message);

        }

    }catch(error){

        console.error(error);

        alert("Unable to delete room.");

    }

}

function filterRooms(){

    loadRooms();

}