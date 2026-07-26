const addRoommateForm = document.getElementById("addRoommateForm");

if (addRoommateForm) {

    addRoommateForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const token = localStorage.getItem("token");

        const name = document.getElementById("name").value;
        const age = document.getElementById("age").value;
        const gender = document.getElementById("gender").value;
        const college = document.getElementById("college").value;
        const location = document.getElementById("location").value;
        const budget = document.getElementById("budget").value;
        const foodPreference = document.getElementById("foodPreference").value;
        const smoking = document.getElementById("smoking").value;
        const contact = document.getElementById("contact").value;
        const bio = document.getElementById("bio").value;

        try {

            const response = await fetch("http://localhost:5000/api/roommates", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify({
                    name,
                    age,
                    gender,
                    college,
                    location,
                    budget,
                    foodPreference,
                    smoking,
                    contact,
                    bio
                })

            });

            const data = await response.json();

            if (response.ok) {

                alert("Roommate profile added successfully!");

                window.location.href = "roommate.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}