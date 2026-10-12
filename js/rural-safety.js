// ========================================
// NARIADHIKAR RURAL SAFETY MAP
// ========================================


// ----------------------------------------
// MAP STARTING LOCATION
// ----------------------------------------

// Temporary starting location.
// We will later make this automatically
// use the user's location.

const defaultLocation = [
    16.7050,
    74.2433
];


const map = L.map("safetyMap")
    .setView(defaultLocation, 13);


// ----------------------------------------
// OPENSTREETMAP
// ----------------------------------------

L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        maxZoom: 19,
        attribution:
            '&copy; OpenStreetMap contributors'
    }
).addTo(map);


// ----------------------------------------
// SAMPLE SUPPORT LOCATIONS
// ----------------------------------------

// These are DEMONSTRATION locations.
// Replace them with verified local
// locations before deploying.

const supportPlaces = [

    {
        name: "Police Station",
        type: "police",
        icon: "👮",
        lat: 16.7050,
        lng: 74.2433,
        phone: "100"
    },

    {
        name: "Women Help Desk",
        type: "women-help",
        icon: "👩‍⚖️",
        lat: 16.7100,
        lng: 74.2480,
        phone: "181"
    },

    {
        name: "Government Hospital",
        type: "hospital",
        icon: "🏥",
        lat: 16.7000,
        lng: 74.2380,
        phone: "108"
    },

    {
        name: "One Stop Centre / Sakhi",
        type: "sakhi",
        icon: "🏠",
        lat: 16.7150,
        lng: 74.2500,
        phone: "181"
    },

    {
        name: "Community Safe Space",
        type: "safe-space",
        icon: "🛡️",
        lat: 16.6950,
        lng: 74.2450,
        phone: ""
    },

    {
        name: "Verified Local Support",
        type: "support",
        icon: "🤝",
        lat: 16.7200,
        lng: 74.2350,
        phone: ""
    }

];


// ----------------------------------------
// MARKERS
// ----------------------------------------

let markers = [];


// Create markers

supportPlaces.forEach(place => {

    const marker =
        L.marker([
            place.lat,
            place.lng
        ]).addTo(map);


    marker.bindPopup(`

        <div>

            <h3>
                ${place.icon}
                ${place.name}
            </h3>

            <p>
                Local support point
            </p>

            ${
                place.phone
                ?
                `<a href="tel:${place.phone}">
                    📞 Call
                 </a>`
                :
                ""
            }

        </div>

    `);


    marker.placeType =
        place.type;


    markers.push(marker);

});


// ----------------------------------------
// SHOW SUPPORT LIST
// ----------------------------------------

function showSupportList(
    type = "all"
) {

    const list =
        document.getElementById(
            "supportList"
        );


    list.innerHTML = "";


    supportPlaces.forEach(place => {

        if (
            type !== "all" &&
            place.type !== type
        ) {

            return;

        }


        const card =
            document.createElement("div");


        card.className =
            "support-card";


        card.innerHTML = `

            <div class="support-icon">
                ${place.icon}
            </div>

            <h3>
                ${place.name}
            </h3>

            <span class="support-distance">
                Nearby support point
            </span>

            <div class="support-actions">

                ${
                    place.phone
                    ?
                    `<a
                        class="call-action"
                        href="tel:${place.phone}">

                        📞 Call

                    </a>`
                    :
                    ""
                }

                <a
                    class="direction-action"
                    href="https://www.google.com/maps/dir/?api=1&destination=${place.lat},${place.lng}"
                    target="_blank">

                    🧭 Directions

                </a>

            </div>

        `;


        list.appendChild(card);

    });

}


showSupportList();


// ----------------------------------------
// FILTER
// ----------------------------------------

function filterPlaces(type) {

    markers.forEach(marker => {

        const shouldShow =
            type === "all" ||
            marker.placeType === type;


        if (shouldShow) {

            marker.addTo(map);

        } else {

            map.removeLayer(marker);

        }

    });


    showSupportList(type);

}


// ----------------------------------------
// USER LOCATION
// ----------------------------------------

function getMyLocation() {

    if (!navigator.geolocation) {

        alert(
            "Location is not supported by your browser."
        );

        return;

    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const lat =
                position.coords.latitude;

            const lng =
                position.coords.longitude;


            map.setView(
                [lat, lng],
                15
            );


            // User location marker

            L.marker([lat, lng])
                .addTo(map)
                .bindPopup(
                    "📍 You are here"
                )
                .openPopup();


            // Circle around user

            L.circle(
                [lat, lng],
                {
                    radius: 500,
                    color: "#8e4a9d"
                }
            ).addTo(map);

        },


        function(error) {

            alert(
                "Unable to get your location. " +
                "Please allow location access."
            );

        }

    );

}