function openMap(type) {

    let query = "";

    if (type === "grocery") {

        query = "grocery stores near me";

    }

    else if (type === "medical") {

        query = "medical stores near me";

    }

    else if (type === "hospital") {

        query = "hospitals near me";

    }

    window.open(

        `https://www.google.com/maps/search/${encodeURIComponent(query)}`,

        "_blank"

    );

}

function callService(number) {

    window.location.href = `tel:${number}`;

}