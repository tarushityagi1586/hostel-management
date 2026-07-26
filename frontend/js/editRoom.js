const roomId = localStorage.getItem("editRoomId");
const token = localStorage.getItem("token");

loadRoom();

async function loadRoom() {

    try {

        const response = await fetch(`http://localhost:5000/api/rooms/${roomId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.success) {

            const room = data.room;

            document.getElementById("title").value = room.title;
            document.getElementById("location").value = room.location;
            document.getElementById("rent").value = room.rent;
            document.getElementById("roomType").value = room.roomType;
            document.getElementById("ownerName").value = room.ownerName;
            document.getElementById("ownerPhone").value = room.ownerPhone;
            document.getElementById("description").value = room.description;

        } else {

            alert("Room not found");

        }

    } catch (error) {

        console.error(error);
        alert("Unable to load room.");

    }

}

const editRoomForm = document.getElementById("editRoomForm");

editRoomForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const updatedRoom = {

        title: document.getElementById("title").value,
        location: document.getElementById("location").value,
        rent: document.getElementById("rent").value,
        roomType: document.getElementById("roomType").value,
        ownerName: document.getElementById("ownerName").value,
        ownerPhone: document.getElementById("ownerPhone").value,
        description: document.getElementById("description").value

    };

    try {

        const response = await fetch(`http://localhost:5000/api/rooms/${roomId}`, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },

            body: JSON.stringify(updatedRoom)

        });

        const data = await response.json();

        if (response.ok) {

            alert("Room updated successfully!");

            localStorage.removeItem("editRoomId");

            window.location.href = "rooms.html";

        } else {

            alert(data.message);

        }

    } catch (error) {

        console.error(error);

        alert("Unable to update room.");

    }

});