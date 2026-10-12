/* =====================================
   🌸 NARIADHIKAR JAVASCRIPT
===================================== */


/* =====================================
   📍 GET CURRENT LOCATION
===================================== */

function getLocation() {

    const result =
        document.getElementById("locationResult");


    // Check if result area exists

    if (!result) {

        console.log(
            "locationResult element not found."
        );

        return;
    }


    // Check browser support

    if (!navigator.geolocation) {

        result.innerHTML =
            "❌ Location is not supported by your browser.";

        return;
    }


    // Show loading message

    result.innerHTML =
        "📍 Finding your location...";


    // Get current location

    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            // Google Maps URL

            const mapURL =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            // Display location

            result.innerHTML = `

                <div class="location-success">

                    <strong>
                        📍 Your Location
                    </strong>

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
                        rel="noopener noreferrer">

                        🗺️ Open in Google Maps

                    </a>

                </div>

            `;

        },


        function(error) {

            console.log(
                "Location error:",
                error
            );


            let message =
                "❌ Unable to get your location.";


            if (
                error.code ===
                error.PERMISSION_DENIED
            ) {

                message =
                    "❌ Location permission was denied. Please allow location access.";

            }

            else if (
                error.code ===
                error.POSITION_UNAVAILABLE
            ) {

                message =
                    "❌ Your location is currently unavailable.";

            }

            else if (
                error.code ===
                error.TIMEOUT
            ) {

                message =
                    "❌ Location request timed out. Please try again.";

            }


            result.innerHTML = `

                ${message}

                <br><br>

                📍 Please check your browser
                location permission.

            `;

        },


        {
            enableHighAccuracy: true,

            timeout: 10000,

            maximumAge: 0

        }

    );

}


/* =====================================
   📤 SHARE LOCATION
===================================== */

function shareLocation() {

    // Check browser support

    if (!navigator.geolocation) {

        alert(
            "❌ Location is not supported by your browser."
        );

        return;
    }


    // Request location

    navigator.geolocation.getCurrentPosition(

        async function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            // Google Maps link

            const mapURL =
                `https://www.google.com/maps?q=${latitude},${longitude}`;


            /* =================================
               MOBILE SHARE
            ================================= */

            if (
                navigator.share
            ) {

                try {

                    await navigator.share({

                        title:
                            "NariAdhikar - My Location",

                        text:
                            "Please check my current location.",

                        url:
                            mapURL

                    });

                    console.log(
                        "Location shared successfully."
                    );

                }

                catch(error) {

                    console.log(
                        "Sharing cancelled:",
                        error
                    );

                }

                return;
            }


            /* =================================
               DESKTOP FALLBACK
            ================================= */

            if (
                navigator.clipboard
            ) {

                try {

                    await navigator.clipboard.writeText(
                        mapURL
                    );


                    alert(
                        "📍 Location link copied!\n\nYou can now paste and share it."
                    );

                }

                catch(error) {

                    console.log(
                        "Clipboard error:",
                        error
                    );


                    showLocationLink(
                        mapURL
                    );

                }

            }

            else {

                showLocationLink(
                    mapURL
                );

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


/* =====================================
   📋 SHOW LOCATION LINK
===================================== */

function showLocationLink(mapURL) {

    const userAnswer =
        prompt(
            "Copy this location link and share it:",
            mapURL
        );

}


/* =====================================
   🔊 TEXT TO SPEECH
===================================== */

function speakPage() {

    // Check browser support

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "🔊 Audio feature is not supported by your browser."
        );

        return;
    }


    // Stop previous speech

    stopSpeech();


    // Get page text

    const text =
        document.body.innerText;


    if (
        !text ||
        text.trim().length === 0
    ) {

        alert(
            "No text is available to read."
        );

        return;
    }


    // Create speech

    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    /* =================================
       GET SAVED LANGUAGE

       The language selector exists
       only on the Home page.

       Therefore we read the language
       from localStorage.
    ================================= */

    const language =
        localStorage.getItem(
            "nariLanguage"
        ) || "en";


    /* =================================
       SELECT VOICE LANGUAGE
    ================================= */

    if (
        language === "mr"
    ) {

        speech.lang =
            "mr-IN";

    }

    else if (
        language === "hi"
    ) {

        speech.lang =
            "hi-IN";

    }

    else {

        speech.lang =
            "en-IN";

    }


    // Speech speed

    speech.rate =
        0.9;


    // Voice pitch

    speech.pitch =
        1;


    // Volume

    speech.volume =
        1;


    // Speak

    window.speechSynthesis.speak(
        speech
    );

}


/* =====================================
   ⏹️ STOP AUDIO
===================================== */

function stopSpeech() {

    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();

    }

}


/* =====================================
   🔊 SPEAK SELECTED TEXT
===================================== */

function speakText(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "🔊 Audio is not supported by your browser."
        );

        return;
    }


    stopSpeech();


    if (
        !text ||
        text.trim() === ""
    ) {

        return;
    }


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    const language =
        localStorage.getItem(
            "nariLanguage"
        ) || "en";


    if (
        language === "mr"
    ) {

        speech.lang =
            "mr-IN";

    }

    else if (
        language === "hi"
    ) {

        speech.lang =
            "hi-IN";

    }

    else {

        speech.lang =
            "en-IN";

    }


    speech.rate =
        0.9;


    speech.pitch =
        1;


    speech.volume =
        1;


    window.speechSynthesis.speak(
        speech
    );

}


/* =====================================
   🌐 GET CURRENT LANGUAGE
===================================== */

function getCurrentLanguage() {

    return (
        localStorage.getItem(
            "nariLanguage"
        ) || "en"
    );

}


/* =====================================
   🌐 LANGUAGE CHANGE EVENT
=====================================

   IMPORTANT:

   The actual language changing is
   handled by language.js.

   We DO NOT create another
   changeLanguage() function here.

===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "🌸 NariAdhikar loaded successfully."
        );


        console.log(
            "Current language:",
            getCurrentLanguage()
        );

    }
);


/* =====================================
   📱 PAGE VISIBILITY
=====================================

   Stop audio when the user leaves
   the page/tab.
===================================== */

document.addEventListener(
    "visibilitychange",
    function() {

        if (
            document.hidden
        ) {

            stopSpeech();

        }

    }
);