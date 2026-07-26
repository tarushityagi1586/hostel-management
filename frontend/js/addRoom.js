const addRoomForm = document.getElementById("addRoomForm");

if (addRoomForm) {

    addRoomForm.addEventListener("submit", async function (e) {

        e.preventDefault();

        const token = localStorage.getItem("token");

        const title = document.getElementById("title").value;
        const location = document.getElementById("location").value;
        const rent = document.getElementById("rent").value;
        const roomType = document.getElementById("roomType").value;
        const ownerName = document.getElementById("ownerName").value;
        const ownerPhone = document.getElementById("ownerPhone").value;
        const description = document.getElementById("description").value;

        try {

            const response = await fetch("http://localhost:5000/api/rooms", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },

                body: JSON.stringify({
                    title,
                    location,
                    rent,
                    roomType,
                    ownerName,
                    ownerPhone,
                    description
                })

            });

            const data = await response.json();

            if (response.ok) {

                alert("Room added successfully!");

                window.location.href = "rooms.html";

            } else {

                alert(data.message);

            }

        } catch (error) {

            console.error(error);

            alert("Unable to connect to the server.");

        }

    });

}