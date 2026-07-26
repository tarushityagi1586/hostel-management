console.log("auth.js loaded");

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.onsubmit = async function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const phone = document.getElementById("phone").value;
        const college = document.getElementById("college").value;
        const budget = document.getElementById("budget").value;
        const foodPreference = document.getElementById("foodPreference").value;
        const gender = document.getElementById("gender").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            console.log("Sending request...");

            const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    phone,
                    college,
                    budget,
                    foodPreference,
                    gender
                })
            });

            console.log("Response received");

            const data = await response.json();

            console.log(data);

            alert(data.message);

            if (response.ok) {
                window.location.href = "login.html";
            }

        } catch (error) {

            console.error(error);

            alert("Cannot connect to backend");

        }

    };

}