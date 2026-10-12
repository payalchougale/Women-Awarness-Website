/* =========================================
   NARIADHIKAR AI LEGAL ASSISTANT
   COMMON ASSISTANT FOR ALL PAGES
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    createAIAssistant();

});


/* =========================================
   CREATE AI ASSISTANT
========================================= */

function createAIAssistant() {

    const assistantHTML = `

        <!-- AI FLOATING BUTTON -->

        <button
            id="aiAssistantButton"
            class="ai-assistant-button"
            onclick="toggleAIAssistant()">

            🤖

            <span>
                AI Legal Assistant
            </span>

        </button>


        <!-- AI CHAT WINDOW -->

        <div
            id="aiAssistantBox"
            class="ai-assistant-box">


            <!-- HEADER -->

            <div class="ai-header">

                <div>

                    <strong>
                        🤖 NariAdhikar AI
                    </strong>

                    <small>
                        Legal Awareness Assistant
                    </small>

                </div>


                <button
                    onclick="toggleAIAssistant()"
                    class="ai-close">

                    ✕

                </button>

            </div>


            <!-- CHAT -->

            <div
                id="aiChatMessages"
                class="ai-chat-messages">

                <div class="ai-message">

                    🌸 <strong>Namaste!</strong>

                    <br><br>

                    I am the NariAdhikar Legal
                    Awareness Assistant.

                    <br><br>

                    I can help you understand
                    women's rights and guide you
                    towards appropriate support.

                    <br><br>

                    <strong>
                        You can ask me:
                    </strong>

                    <br><br>

                    • What are my rights?

                    <br>

                    • I am facing harassment.

                    <br>

                    • I need legal help.

                    <br>

                    • Where can I get support?

                </div>

            </div>


            <!-- QUICK QUESTIONS -->

            <div class="ai-quick-buttons">

                <button
                    onclick="askAI('What are my basic rights?')">

                    ⚖️ My Rights

                </button>

                <button
                    onclick="askAI('I am facing harassment')">

                    🛡️ Harassment

                </button>

                <button
                    onclick="askAI('I need legal help')">

                    👩‍⚖️ Legal Help

                </button>

                <button
                    onclick="askAI('I am in danger')">

                    🚨 Emergency

                </button>

            </div>


            <!-- INPUT -->

            <div class="ai-input-area">

                <input
                    type="text"
                    id="aiUserInput"
                    placeholder="Type your problem..."
                    onkeydown="handleAIEnter(event)">


                <button
                    onclick="startAIVoice()"
                    title="Voice">

                    🎙️

                </button>


                <button
                    onclick="sendAIMessage()"
                    title="Send">

                    ➤

                </button>

            </div>


            <!-- DISCLAIMER -->

            <div class="ai-disclaimer">

                ⚠️ This assistant provides general
                legal awareness information.
                It is not a substitute for a qualified
                lawyer or emergency service.

            </div>

        </div>

    `;


    document.body.insertAdjacentHTML(
        "beforeend",
        assistantHTML
    );

}


/* =========================================
   OPEN / CLOSE ASSISTANT
========================================= */

function toggleAIAssistant() {

    const box =
        document.getElementById(
            "aiAssistantBox"
        );


    if (!box) return;


    box.classList.toggle("show");

}



/* =========================================
   SEND MESSAGE
========================================= */

function sendAIMessage() {

    const input =
        document.getElementById(
            "aiUserInput"
        );


    if (!input) return;


    const message =
        input.value.trim();


    if (message === "") {

        return;

    }


    addUserMessage(message);


    input.value = "";


    setTimeout(function () {

        const response =
            getLegalResponse(message);


        addAIMessage(response);

    }, 500);

}



/* =========================================
   ENTER KEY
========================================= */

function handleAIEnter(event) {

    if (event.key === "Enter") {

        sendAIMessage();

    }

}



/* =========================================
   QUICK QUESTION
========================================= */

function askAI(question) {

    const input =
        document.getElementById(
            "aiUserInput"
        );


    if (input) {

        input.value = question;

        sendAIMessage();

    }

}



/* =========================================
   USER MESSAGE
========================================= */

function addUserMessage(message) {

    const chat =
        document.getElementById(
            "aiChatMessages"
        );


    if (!chat) return;


    const div =
        document.createElement("div");


    div.className =
        "user-message";


    div.innerText =
        message;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}



/* =========================================
   AI MESSAGE
========================================= */

function addAIMessage(message) {

    const chat =
        document.getElementById(
            "aiChatMessages"
        );


    if (!chat) return;


    const div =
        document.createElement("div");


    div.className =
        "ai-message";


    div.innerHTML =
        message;


    chat.appendChild(div);


    chat.scrollTop =
        chat.scrollHeight;

}



/* =========================================
   LEGAL RESPONSE SYSTEM
========================================= */

function getLegalResponse(message) {

    const text =
        message.toLowerCase();


    /* EMERGENCY */

    if (
        text.includes("danger") ||
        text.includes("emergency") ||
        text.includes("attack") ||
        text.includes("threat")
    ) {

        return `

            🚨 <strong>Your safety comes first.</strong>

            <br><br>

            If you are in immediate danger,
            contact emergency services or move
            to a safe location if possible.

            <br><br>

            You can also open the
            <strong>Emergency</strong> section
            of NariAdhikar.

            <br><br>

            📍 You can use the
            <strong>Rural Safety</strong> page
            to find nearby support locations.

        `;

    }


    /* HARASSMENT */

    if (
        text.includes("harass") ||
        text.includes("harassment")
    ) {

        return `

            🛡️ <strong>Harassment Awareness</strong>

            <br><br>

            Harassment is not something you
            have to silently accept.

            <br><br>

            If you feel safe doing so, tell a
            trusted person and keep relevant
            information or evidence.

            <br><br>

            You can also seek help from an
            appropriate legal or women's support
            service.

        `;

    }


    /* DOMESTIC VIOLENCE */

    if (
        text.includes("husband") ||
        text.includes("domestic") ||
        text.includes("violence") ||
        text.includes("beating")
    ) {

        return `

            💗 <strong>You deserve safety.</strong>

            <br><br>

            Violence or abuse within a household
            should not be ignored.

            <br><br>

            If you are in immediate danger,
            contact emergency services or move
            to a safe place if possible.

            <br><br>

            Consider speaking with a trusted
            person and contacting an appropriate
            women's support or legal service.

        `;

    }


    /* BASIC RIGHTS */

    if (
        text.includes("rights") ||
        text.includes("right")
    ) {

        return `

            ⚖️ <strong>Women's Rights</strong>

            <br><br>

            Women in India have constitutional
            and legal protections relating to
            equality, dignity, safety and
            protection from discrimination.

            <br><br>

            Visit the
            <strong>Legal Rights</strong>
            section of NariAdhikar to learn
            more.

        `;

    }


    /* LEGAL HELP */

    if (
        text.includes("legal") ||
        text.includes("lawyer") ||
        text.includes("law")
    ) {

        return `

            👩‍⚖️ <strong>Legal Assistance</strong>

            <br><br>

            You can seek assistance from a
            qualified lawyer, legal-aid service,
            women's support organisation or
            appropriate government authority.

            <br><br>

            NariAdhikar's
            <strong>Legal Rights</strong> section
            can help you understand the topic
            before seeking professional advice.

        `;

    }


    /* CAREER */

    if (
        text.includes("career") ||
        text.includes("job") ||
        text.includes("employment")
    ) {

        return `

            💼 <strong>Career Support</strong>

            <br><br>

            Women can explore education,
            vocational training, employment,
            entrepreneurship and other career
            opportunities.

            <br><br>

            Visit the
            <strong>Career</strong> section
            of NariAdhikar.

        `;

    }


    /* DEFAULT */

    return `

        🌸 <strong>I understand.</strong>

        <br><br>

        I can provide general information about
        women's legal rights and awareness.

        <br><br>

        Try asking:

        <br><br>

        ⚖️ "What are my rights?"

        <br>

        🛡️ "I am facing harassment"

        <br>

        👩‍⚖️ "I need legal help"

        <br>

        🚨 "I am in danger"

    `;

}



/* =========================================
   VOICE INPUT
========================================= */

function startAIVoice() {

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;


    if (!SpeechRecognition) {

        alert(
            "Voice input is not supported in this browser."
        );

        return;

    }


    const recognition =
        new SpeechRecognition();


    recognition.lang =
        getCurrentLanguage();


    recognition.start();


    recognition.onresult =
        function(event) {

            const text =
                event.results[0][0].transcript;


            const input =
                document.getElementById(
                    "aiUserInput"
                );


            if (input) {

                input.value =
                    text;

            }

        };

}



/* =========================================
   LANGUAGE
========================================= */

function getCurrentLanguage() {

    const savedLanguage =
        localStorage.getItem(
            "nariLanguage"
        );


    if (savedLanguage === "mr") {

        return "mr-IN";

    }


    if (savedLanguage === "hi") {

        return "hi-IN";

    }


    return "en-IN";

}