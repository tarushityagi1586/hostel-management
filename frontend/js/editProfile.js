const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    alert("Please login first.");
    window.location.href = "login.html";
}

// Fill form with current data
document.getElementById("name").value = user.name || "";
document.getElementById("phone").value = user.phone || "";
document.getElementById("college").value = user.college || "";
document.getElementById("budget").value = user.budget || "";
document.getElementById("foodPreference").value = user.foodPreference || "";

const editProfileForm = document.getElementById("editProfileForm");

editProfileForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const token = localStorage.getItem("token");

    const updatedUser = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        college: document.getElementById("college").value,
        budget: document.getElementById("budget").value,
        foodPreference: document.getElementById("foodPreference").value
    };

    try {

        const response = await fetch("http://localhost:5000/api/users/profile", {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },

            body: JSON.stringify(updatedUser)

        });

        const data = await response.json();

        if (response.ok) {

            localStorage.setItem("user", JSON.stringify(data.user));

            alert("Profile Updated Successfully!");

            window.location.href = "profile.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Unable to update profile.");

    }

});