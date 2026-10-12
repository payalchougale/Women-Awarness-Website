/* =====================================
   NARIADHIKAR ONLINE HELP
===================================== */


/* =====================================
   LEGAL HELP
===================================== */

function openLegalHelp() {

    const message = `
⚖️ Legal Help

You can start by learning about your legal
rights and identifying the type of problem
you are facing.

For example:

• Domestic violence
• Workplace harassment
• Property and inheritance
• Marriage-related issues
• Child-related legal matters
• Online harassment
• Discrimination

For immediate danger, please use the
Emergency section.

For detailed information, visit the
Legal Rights page.
    `;

    alert(message);

}


/* =====================================
   SUBMIT HELP
===================================== */

function submitHelp() {

    const category =
        document.getElementById(
            "helpCategory"
        ).value;


    const age =
        document.getElementById(
            "ageGroup"
        ).value;


    const problem =
        document.getElementById(
            "problem"
        ).value.trim();


    const result =
        document.getElementById(
            "helpResult"
        );


    /* CHECK CATEGORY */

    if (category === "") {

        result.style.display = "block";

        result.innerHTML =
            "⚠️ Please select the type of help you need.";

        return;

    }


    /* CHECK PROBLEM */

    if (problem === "") {

        result.style.display = "block";

        result.innerHTML =
            "⚠️ Please describe your problem in a few words.";

        return;

    }


    /* SHOW RESULT */

    result.style.display = "block";


    let guidance = "";


    if (category === "legal") {

        guidance = `
        ⚖️ You selected Legal / Rights.

        Start by reading the Legal Rights
        section or use AI Legal Assistance
        for general information.

        Remember: general website information
        is not a substitute for advice from a
        qualified lawyer.
        `;

    }


    else if (category === "safety") {

        guidance = `
        🛡️ You selected Safety Support.

        If you are currently in danger,
        move to a safer location if possible
        and contact appropriate emergency
        services or a trusted person.

        You can also open the Rural Safety
        section to explore nearby support.
        `;

    }


    else if (category === "health") {

        guidance = `
        👩‍⚕️ You selected Women Care.

        Please consider contacting a qualified
        healthcare professional for medical
        concerns.

        You can visit the Women Care page
        for general information.
        `;

    }


    else if (category === "career") {

        guidance = `
        💼 You selected Career / Education.

        Explore the Career page for education,
        skills, employment and self-employment
        opportunities.
        `;

    }


    else if (category === "family") {

        guidance = `
        💗 You selected Family / Relationship.

        You do not have to handle a difficult
        situation alone.

        Consider speaking with a trusted person,
        counsellor, legal professional or
        appropriate support service.
        `;

    }


    else {

        guidance = `
        💗 Thank you for sharing your concern.

        Start by identifying whether you need
        legal, safety, health, career or other
        support.

        You can also explore the other sections
        of NariAdhikar.
        `;

    }


    result.innerHTML = guidance;


    /* SCROLL TO RESULT */

    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}


/* =====================================
   AUDIO / TEXT TO SPEECH
===================================== */

function speakHelpPage() {

    if (!("speechSynthesis" in window)) {

        alert(
            "Audio is not supported by your browser."
        );

        return;

    }


    stopHelpSpeech();


    const text = `

    Online Help and Support.

    You are not alone.

    NariAdhikar provides information
    to help women understand their
    options and find appropriate support.

    You can get legal help,
    women care information,
    safety support,
    emergency help,
    AI legal assistance,
    and nearby support information.

    If you are facing a problem,
    you can describe it in simple words.

    Do not share passwords,
    bank details or OTPs.

    If you are in immediate danger,
    use the emergency section.

    `;


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

        speech.lang = "mr-IN";

    }

    else if (
        languageSelect &&
        languageSelect.value === "hi"
    ) {

        speech.lang = "hi-IN";

    }

    else {

        speech.lang = "en-IN";

    }


    speech.rate = 0.9;

    speech.pitch = 1;


    window.speechSynthesis.speak(
        speech
    );

}


/* =====================================
   STOP AUDIO
===================================== */

function stopHelpSpeech() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

}


/* =====================================
   PAGE LOAD
===================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        console.log(
            "NariAdhikar Online Help loaded."
        );

    }
);