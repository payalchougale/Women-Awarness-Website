/* =========================================
   NARIADHIKAR
   WOMEN CARE JAVASCRIPT
========================================= */


/* =========================================
   FIND HEALTHCARE
========================================= */

function findHealthcare() {

    if (!navigator.geolocation) {

        alert(
            "Location is not supported by your browser."
        );

        return;
    }


    navigator.geolocation.getCurrentPosition(

        function(position) {

            const latitude =
                position.coords.latitude;

            const longitude =
                position.coords.longitude;


            const mapURL =
                `https://www.google.com/maps/search/hospital/@${latitude},${longitude},14z`;


            window.open(
                mapURL,
                "_blank"
            );

        },


        function() {

            alert(
                "Please allow location access to find nearby healthcare."
            );

        }

    );

}



/* =========================================
   DOCTOR HELP
========================================= */

function findDoctor() {

    alert(
        "👩‍⚕️ Doctor Help\n\n" +

        "If you have a health concern, " +

        "please contact a qualified healthcare " +

        "professional or visit the nearest " +

        "healthcare facility.\n\n" +

        "Do not ignore serious or persistent symptoms."
    );

}



/* =========================================
   WOMEN HELPLINE
========================================= */

function openWomenHelpline() {

    const choice =
        confirm(
            "Women Helpline: 181\n\n" +

            "Press OK to call 181."
        );


    if (choice) {

        window.location.href =
            "tel:181";

    }

}



/* =========================================
   SEARCH CARE TOPICS
========================================= */

function searchCareTopics() {

    const input =
        document.getElementById(
            "careSearch"
        );


    const result =
        document.getElementById(
            "searchResult"
        );


    if (!input || !result) {
        return;
    }


    const query =
        input.value
            .trim()
            .toLowerCase();


    if (query === "") {

        result.innerHTML =
            "⚠️ Please enter a health topic.";

        return;
    }


    const topics = {

        "period":
            "🩸 Menstrual health information is available in the Menstrual Health section.",

        "periods":
            "🩸 Menstrual health information is available in the Menstrual Health section.",

        "menstrual":
            "🩸 Menstrual health information is available in the Menstrual Health section.",

        "mental":
            "🧠 Mental wellbeing information is available in the Mental Wellbeing section.",

        "pregnancy":
            "🤰 Pregnancy care information is available in the Pregnancy Care section.",

        "nutrition":
            "🥗 Nutrition information is available in the Nutrition section.",

        "food":
            "🥗 Nutrition information is available in the Nutrition section.",

        "checkup":
            "🩺 Regular healthcare checkups are discussed in the Regular Checkups section.",

        "health":
            "💗 Explore all the Women Care information cards below."

    };


    let found = false;


    for (
        const topic in topics
    ) {

        if (
            query.includes(topic)
        ) {

            result.innerHTML =
                topics[topic];

            found = true;

            break;

        }

    }


    if (!found) {

        result.innerHTML =
            "🔎 We couldn't find that topic. Try searching for period, mental health, pregnancy, nutrition or checkup.";

    }

}



/* =========================================
   CARE INFORMATION
========================================= */

function showCareInfo(type) {

    let message = "";


    if (type === "menstrual") {

        message =
            "🩸 Menstrual Health\n\n" +

            "Periods are a normal part of reproductive health. " +

            "Maintaining menstrual hygiene and paying attention " +

            "to unusual or persistent concerns is important.\n\n" +

            "If something concerns you, speak with a qualified " +

            "healthcare professional.";

    }


    else if (type === "mental") {

        message =
            "🧠 Mental Wellbeing\n\n" +

            "Stress, sadness, anxiety and other emotional " +

            "difficulties deserve attention.\n\n" +

            "Talking with a trusted person or qualified " +

            "mental-health professional can be a useful step.";

    }


    else if (type === "pregnancy") {

        message =
            "🤰 Pregnancy Care\n\n" +

            "Pregnancy care should involve guidance from " +

            "qualified healthcare professionals.\n\n" +

            "Regular healthcare visits and following " +

            "professional advice are important.";

    }


    else if (type === "nutrition") {

        message =
            "🥗 Nutrition\n\n" +

            "A balanced diet and adequate hydration are " +

            "important parts of overall wellbeing.\n\n" +

            "For individual dietary needs, consult a " +

            "qualified healthcare or nutrition professional.";

    }


    else if (type === "checkup") {

        message =
            "🩺 Regular Checkups\n\n" +

            "Healthcare checkups can help identify " +

            "potential health concerns.\n\n" +

            "If you are concerned about your health, " +

            "consider speaking with a healthcare professional.";

    }


    else if (type === "selfcare") {

        message =
            "💗 Self Care\n\n" +

            "Rest, emotional wellbeing, healthy habits " +

            "and personal safety are all important.\n\n" +

            "You deserve to ask for help when you need it.";

    }


    alert(message);

}



/* =========================================
   AUDIO / TEXT TO SPEECH
========================================= */

function speakWomenCare() {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "🔊 Audio is not supported by this browser."
        );

        return;
    }


    stopWomenCareSpeech();


    const text =
        document.body.innerText;


    const speech =
        new SpeechSynthesisUtterance(
            text
        );


    const language =
        document.getElementById(
            "languageSelect"
        );


    if (
        language &&
        language.value === "mr"
    ) {

        speech.lang =
            "mr-IN";

    }

    else if (
        language &&
        language.value === "hi"
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
   STOP AUDIO
========================================= */

function stopWomenCareSpeech() {

    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();

    }

}



/* =========================================
   FAQ
========================================= */

function toggleFAQ(button) {

    const answer =
        button.nextElementSibling;


    if (!answer) {
        return;
    }


    const isOpen =
        answer.classList.contains(
            "show"
        );


    /* Close all FAQ answers */

    document
        .querySelectorAll(
            ".faq-answer"
        )
        .forEach(
            function(item) {

                item.classList.remove(
                    "show"
                );

            }
        );


    document
        .querySelectorAll(
            ".faq-question span"
        )
        .forEach(
            function(icon) {

                icon.innerText = "+";

            }
        );


    /* Open selected answer */

    if (!isOpen) {

        answer.classList.add(
            "show"
        );


        const icon =
            button.querySelector(
                "span"
            );


        if (icon) {

            icon.innerText =
                "−";

        }

    }

}



/* =========================================
   LANGUAGE MEMORY
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const select =
            document.getElementById(
                "languageSelect"
            );


        const savedLanguage =
            localStorage.getItem(
                "nariLanguage"
            );


        if (
            select &&
            savedLanguage
        ) {

            select.value =
                savedLanguage;

        }


        if (select) {

            select.addEventListener(
                "change",
                function() {

                    localStorage.setItem(
                        "nariLanguage",
                        this.value
                    );

                }
            );

        }

    }
);