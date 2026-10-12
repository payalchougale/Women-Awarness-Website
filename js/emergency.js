/* =========================================
   NARIADHIKAR - EMERGENCY JAVASCRIPT
========================================= */


/* =========================================
   GET CURRENT LOCATION
========================================= */

function getEmergencyLocation() {

    const result =
        document.getElementById(
            "emergencyLocationResult"
        );


    if (!result) {
        return;
    }


    if (!navigator.geolocation) {

        result.innerHTML =
            "❌ Location is not supported by your browser.";

        return;
    }


    result.innerHTML =
        "📍 Finding your location...";


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            const mapURL =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            result.innerHTML = `

                📍 <strong>Your Current Location</strong>

                <br><br>

                Latitude:
                ${latitude.toFixed(5)}

                <br>

                Longitude:
                ${longitude.toFixed(5)}

                <br><br>

                <a
                    href="${mapURL}"
                    target="_blank"
                    class="action-btn">

                    🗺️ Open Google Maps

                </a>

            `;

        },


        function(error) {

            if (error.code === 1) {

                result.innerHTML = `
                    ❌ Location permission was denied.
                    <br>
                    Please allow location access.
                `;

            }

            else if (error.code === 2) {

                result.innerHTML = `
                    ❌ Your location could not be determined.
                `;

            }

            else if (error.code === 3) {

                result.innerHTML = `
                    ❌ Location request timed out.
                    <br>
                    Please try again.
                `;

            }

            else {

                result.innerHTML = `
                    ❌ Unable to get your location.
                `;

            }

        },

        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}



/* =========================================
   SHARE CURRENT LOCATION
========================================= */

function shareEmergencyLocation() {

    if (!navigator.geolocation) {

        alert(
            "❌ Location is not supported by your browser."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        async function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            const mapURL =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            /* =================================
               MOBILE SHARE
            ================================= */

            if (navigator.share) {

                try {

                    await navigator.share({

                        title:
                            "NariAdhikar - My Emergency Location",

                        text:
                            "Please check my current location. I may need help.",

                        url:
                            mapURL

                    });

                }

                catch(error) {

                    console.log(
                        "Location sharing cancelled."
                    );

                }

            }


            /* =================================
               DESKTOP FALLBACK
            ================================= */

            else {

                if (
                    navigator.clipboard &&
                    window.isSecureContext
                ) {

                    try {

                        await navigator.clipboard.writeText(
                            mapURL
                        );


                        alert(
                            "📍 Location link copied!\n\nYou can now send it to a trusted person."
                        );

                    }

                    catch(error) {

                        showLocationLink(mapURL);

                    }

                }

                else {

                    showLocationLink(mapURL);

                }

            }

        },


        function() {

            alert(
                "❌ Please allow location access to share your location."
            );

        },

        {

            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}



/* =========================================
   SHOW LOCATION LINK
========================================= */

function showLocationLink(mapURL) {

    const result =
        document.getElementById(
            "emergencyLocationResult"
        );


    if (!result) {
        return;
    }


    result.innerHTML = `

        📍 <strong>Your Location Link</strong>

        <br><br>

        <input
            type="text"
            value="${mapURL}"
            readonly
            id="locationLinkInput"
            style="
                width:90%;
                padding:10px;
                border:1px solid #ddd;
                border-radius:8px;
            "
        >

        <br><br>

        <button
            onclick="copyEmergencyLink()"
            class="action-btn">

            📋 Copy Location

        </button>

        <br><br>

        <a
            href="${mapURL}"
            target="_blank"
            class="action-btn">

            🗺️ Open Map

        </a>

    `;

}



/* =========================================
   COPY LOCATION LINK
========================================= */

function copyEmergencyLink() {

    const input =
        document.getElementById(
            "locationLinkInput"
        );


    if (!input) {
        return;
    }


    input.select();

    input.setSelectionRange(
        0,
        99999
    );


    try {

        navigator.clipboard.writeText(
            input.value
        );

        alert(
            "📋 Location link copied successfully!"
        );

    }

    catch(error) {

        document.execCommand("copy");

        alert(
            "📋 Location link copied!"
        );

    }

}



/* =========================================
   CALL EMERGENCY
========================================= */

function callEmergency() {

    window.location.href =
        "tel:112";

}



/* =========================================
   CALL WOMEN HELPLINE
========================================= */

function callWomenHelpline() {

    window.location.href =
        "tel:181";

}



/* =========================================
   CALL CHILD HELPLINE
========================================= */

function callChildHelpline() {

    window.location.href =
        "tel:1098";

}



/* =========================================
   CALL CYBER CRIME
========================================= */

function callCyberCrime() {

    window.location.href =
        "tel:1930";

}



/* =========================================
   TEXT TO SPEECH
========================================= */

function speakEmergencyPage() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "🔊 Audio is not supported by your browser."
        );

        return;
    }


    stopEmergencySpeech();


    const text =
        document.body.innerText;


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    const languageSelect =
        document.getElementById(
            "languageSelect"
        );


    if (
        languageSelect &&
        languageSelect.value === "mr"
    ) {

        speech.lang =
            "mr-IN";

    }

    else if (
        languageSelect &&
        languageSelect.value === "hi"
    ) {

        speech.lang =
            "hi-IN";

    }

    else {

        speech.lang =
            "en-IN";

    }


    speech.rate =
        0.85;


    speech.pitch =
        1;


    window.speechSynthesis.speak(
        speech
    );

}



/* =========================================
   STOP SPEECH
========================================= */

function stopEmergencySpeech() {

    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();

    }

}



/* =========================================
   LANGUAGE SELECTION
========================================= */

const emergencyLanguageSelect =
    document.getElementById(
        "languageSelect"
    );


if (emergencyLanguageSelect) {

    const savedLanguage =
        localStorage.getItem(
            "nariLanguage"
        );


    if (savedLanguage) {

        emergencyLanguageSelect.value =
            savedLanguage;

    }


    emergencyLanguageSelect.addEventListener(
        "change",
        function() {

            localStorage.setItem(
                "nariLanguage",
                this.value
            );

        }
    );

}



/* =========================================
   DOM READY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedLanguage =
            localStorage.getItem(
                "nariLanguage"
            );


        const select =
            document.getElementById(
                "languageSelect"
            );


        if (
            select &&
            savedLanguage
        ) {

            select.value =
                savedLanguage;

        }

    }
);