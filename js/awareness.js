// ========================================
// NARIADHIKAR AWARENESS PAGE
// ========================================


// ========================================
// CATEGORY FILTER
// ========================================

function filterAwareness(category, button) {

    const cards =
        document.querySelectorAll(
            ".awareness-card"
        );

    const buttons =
        document.querySelectorAll(
            ".awareness-filter"
        );


    buttons.forEach(btn => {

        btn.classList.remove("active");

    });


    button.classList.add("active");


    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}



// ========================================
// SEARCH
// ========================================

function searchAwareness() {

    const search =
        document
        .getElementById("awarenessSearch")
        .value
        .toLowerCase();


    const cards =
        document.querySelectorAll(
            ".awareness-card"
        );


    cards.forEach(card => {

        const title =
            card.dataset.title
            .toLowerCase();


        const content =
            card.innerText
            .toLowerCase();


        if (
            title.includes(search) ||
            content.includes(search)
        ) {

            card.style.display =
                "block";

        } else {

            card.style.display =
                "none";

        }

    });

}



// ========================================
// TEXT TO SPEECH
// ========================================

function speakText(text) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "Audio is not supported in this browser."
        );

        return;

    }


    window.speechSynthesis.cancel();


    const speech =
        new SpeechSynthesisUtterance(text);


    speech.rate = 0.9;

    speech.pitch = 1;


    window.speechSynthesis.speak(
        speech
    );

}



// ========================================
// AWARENESS INFORMATION
// ========================================

const awarenessInformation = {

    // ====================================
    // 1. LEGAL RIGHTS
    // ====================================

    "Know Your Legal Rights": {

        image:
            "images/legal-awareness.jpg",

        imageAlt:
            "Women learning about legal rights",

        intro:
            "Understanding your legal rights can help you recognise available protections and make informed decisions when you face a legal or social problem.",

        section1Title:
            "⚖️ Important Areas of Rights",

        section1: [

            "Right to equality and protection from discrimination.",

            "Protection from certain forms of domestic violence and harassment.",

            "Legal protections relating to women at the workplace.",

            "Rights and protections relating to family and property matters.",

            "Access to appropriate legal assistance and support services."
        ],

        section2Title:
            "📌 When You May Need Help",

        section2:
            "You may want to seek appropriate support if you experience violence, harassment, discrimination, threats, abuse or another situation where you believe your legal rights may have been violated.",

        section3Title:
            "🤝 Where You Can Seek Support",

        section3: [

            "Police or other appropriate emergency authorities when immediate safety is involved.",

            "Legal Services Authorities for information about legal assistance.",

            "Appropriate government departments or authorities.",

            "Workplace complaint mechanisms where applicable.",

            "A qualified legal professional for advice about your specific situation."
        ],

        note:
            "Legal rules can depend on the facts and circumstances. Always verify important legal information through official government sources or a qualified legal professional."
    },


    // ====================================
    // 2. PERSONAL SAFETY
    // ====================================

    "Personal Safety": {

        image:
            "images/safety-awareness.jpg",

        imageAlt:
            "Women learning about personal safety",

        intro:
            "Personal safety awareness means understanding possible risks, planning ahead and knowing how to seek help when you feel unsafe.",

        section1Title:
            "🛡️ Simple Safety Practices",

        section1: [

            "Keep your phone charged when travelling or going to unfamiliar places.",

            "Keep important emergency contacts easily accessible.",

            "Tell a trusted person about your plans when appropriate.",

            "Stay aware of your surroundings, especially in unfamiliar places.",

            "Use trusted transport and support services when needed."
        ],

        section2Title:
            "🚨 If You Feel Unsafe",

        section2:
            "If possible, move towards a safe or populated location and contact someone you trust. In an immediate emergency, contact the appropriate emergency service.",

        section3Title:
            "📞 Emergency Planning",

        section3: [

            "Save important emergency numbers in your phone.",

            "Keep trusted family members or friends informed when appropriate.",

            "Know the location of nearby hospitals, police stations or other support services.",

            "Consider having an emergency plan for situations that may require quick action."
        ],

        note:
            "Safety situations are different for everyone. Choose actions that are appropriate and safe for your circumstances."
    },


    // ====================================
    // 3. HEALTH AWARENESS
    // ====================================

    "Health Awareness": {

        image:
            "images/health-awareness.jpg",

        imageAlt:
            "Women learning about health awareness",

        intro:
            "Taking care of your health includes paying attention to physical, reproductive and emotional wellbeing and seeking professional help when needed.",

        section1Title:
            "🏥 Healthy Habits",

        section1: [

            "Eat a balanced and varied diet whenever possible.",

            "Get adequate sleep and rest.",

            "Stay physically active according to your abilities.",

            "Maintain appropriate personal hygiene.",

            "Pay attention to changes in your body and wellbeing."
        ],

        section2Title:
            "🩺 Preventive Care",

        section2:
            "Regular healthcare can help you discuss concerns, understand your health and identify issues that may need professional attention. Preventive care can vary according to age, health history and individual needs.",

        section3Title:
            "💗 When to Seek Professional Help",

        section3: [

            "Persistent or unusual symptoms.",

            "Sudden or severe changes in your health.",

            "Symptoms that interfere with daily activities.",

            "Concerns relating to menstrual, reproductive or pregnancy health.",

            "Ongoing stress, anxiety, low mood or other mental wellbeing concerns."
        ],

        note:
            "Online information is general information and does not replace examination, diagnosis or treatment from a qualified healthcare professional."
    },


    // ====================================
    // 4. EDUCATION & CAREER
    // ====================================

    "Education and Career": {

        image:
            "images/career-awareness.jpg",

        imageAlt:
            "Women learning and developing career skills",

        intro:
            "Education and skill development can help women explore academic, employment, entrepreneurship and other career opportunities.",

        section1Title:
            "🎓 Education & Skills",

        section1: [

            "Explore subjects and career fields that match your interests.",

            "Develop technical, digital and communication skills.",

            "Look for scholarships, training programmes and internships.",

            "Build projects and practical experience related to your field.",

            "Continue learning as your career interests develop."
        ],

        section2Title:
            "💼 Career Opportunities",

        section2:
            "Women can explore employment, internships, freelancing, entrepreneurship and other professional opportunities according to their qualifications and interests.",

        section3Title:
            "🔎 Before Applying",

        section3: [

            "Check eligibility requirements carefully.",

            "Verify application deadlines.",

            "Use official websites for important information.",

            "Be careful with organisations asking for unusual payments or sensitive information.",

            "Keep copies of important application documents."
        ],

        note:
            "Always verify scholarships, internships, jobs and training opportunities through the official organisation or institution before sharing personal information or making payments."
    },


    // ====================================
    // 5. FINANCIAL AWARENESS
    // ====================================

    "Financial Awareness": {

        image:
            "images/finance-awareness.jpg",

        imageAlt:
            "Women learning about financial awareness",

        intro:
            "Financial awareness helps you understand basic money management, banking safety and ways to protect yourself from financial fraud.",

        section1Title:
            "💰 Basic Financial Habits",

        section1: [

            "Keep track of your income and expenses.",

            "Save money when possible according to your circumstances.",

            "Understand the basic features and charges of your bank account.",

            "Keep important financial documents safely.",

            "Learn about financial products before using them."
        ],

        section2Title:
            "🔐 Protect Your Banking Information",

        section2:
            "Never share your ATM PIN, password, OTP or other confidential banking credentials with unknown people. Banks and legitimate service providers should not require you to disclose confidential authentication information to unknown callers.",

        section3Title:
            "🚨 Watch for Financial Scams",

        section3: [

            "Be careful with unexpected calls asking for money or banking details.",

            "Do not click suspicious payment or banking links.",

            "Be cautious about investment offers that promise unrealistic returns.",

            "Verify messages and requests through official channels.",

            "If you suspect fraud, contact your bank and use the appropriate official reporting channels."
        ],

        note:
            "Never share passwords, PINs or OTPs with another person, even if they claim to represent a bank or organisation."
    },


    // ====================================
    // 6. ONLINE SAFETY
    // ====================================

    "Online Safety": {

        image:
            "images/cyber-awareness.jpg",

        imageAlt:
            "Women learning about online and cyber safety",

        intro:
            "Online safety is important when using social media, messaging apps, email, online banking and other digital services.",

        section1Title:
            "🔐 Protect Your Account",

        section1: [

            "Use strong and unique passwords.",

            "Enable two-factor authentication whenever available.",

            "Never share passwords, OTPs or PINs with others.",

            "Review privacy and security settings on your accounts.",

            "Log out of accounts when using shared or public devices."
        ],

        section2Title:
            "⚠️ Be Careful Online",

        section2:
            "Be cautious with unexpected messages, suspicious links, unknown attachments and requests for personal or financial information. Verify information through trusted or official sources before taking action.",

        section3Title:
            "🚨 If Something Goes Wrong",

        section3: [

            "Save screenshots, messages or other relevant evidence when it is safe to do so.",

            "Block or report abusive accounts where appropriate.",

            "Change compromised passwords immediately.",

            "Contact your bank if financial information may have been exposed.",

            "Use appropriate cybercrime reporting channels for suspected online fraud or cybercrime."
        ],

        note:
            "Think carefully before sharing personal information online. Information posted online can be copied or shared by others."
    }

};



// ========================================
// CREATE BULLET LIST
// ========================================

function createAwarenessList(items) {

    if (!items || items.length === 0) {

        return "";

    }


    return `

        <ul class="awareness-info-list">

            ${items.map(item => `

                <li>

                    <span class="awareness-check">
                        ✓
                    </span>

                    <span>
                        ${item}
                    </span>

                </li>

            `).join("")}

        </ul>

    `;

}



// ========================================
// READ MORE MODAL
// ========================================

function showAwareness(title, text) {

    // Remove existing modal
    const oldModal =
        document.getElementById(
            "awarenessModal"
        );


    if (oldModal) {

        oldModal.remove();

    }


    // Get information
    const info =
        awarenessInformation[title];


    // Fallback if title is not found
    if (!info) {

        createSimpleAwarenessModal(
            title,
            text
        );

        return;

    }


    // ====================================
    // CREATE MODAL
    // ====================================

    const modal =
        document.createElement("div");


    modal.id =
        "awarenessModal";


    modal.innerHTML = `

        <div class="awareness-modal-overlay">


            <div class="awareness-modal-box">


                <!-- CLOSE -->

                <button
                    class="awareness-modal-close"
                    aria-label="Close">

                    ×

                </button>



                <!-- TITLE -->

                <h2 class="awareness-modal-title">

                    ${title}

                </h2>



                <!-- INTRO -->

                <p class="awareness-modal-intro">

                    ${info.intro}

                </p>



                <!-- IMAGE + FIRST INFORMATION -->

                <div class="awareness-modal-main">


                    <div class="awareness-modal-image">

                        <img
                            src="${info.image}"
                            alt="${info.imageAlt}">

                    </div>



                    <div class="awareness-modal-key-info">

                        <h3>
                            ${info.section1Title}
                        </h3>

                        ${createAwarenessList(
                            info.section1
                        )}

                    </div>


                </div>



                <!-- SECTION 2 -->

                <div class="awareness-modal-section">

                    <h3>

                        ${info.section2Title}

                    </h3>


                    <p>

                        ${info.section2}

                    </p>

                </div>



                <!-- SECTION 3 -->

                <div class="awareness-modal-section">

                    <h3>

                        ${info.section3Title}

                    </h3>


                    ${createAwarenessList(
                        info.section3
                    )}

                </div>



                <!-- IMPORTANT NOTE -->

                <div class="awareness-modal-note">

                    <strong>
                        💡 Remember:
                    </strong>

                    <span>
                        ${info.note}
                    </span>

                </div>



                <!-- LISTEN -->

                <button
                    class="awareness-modal-listen">

                    🔊 Listen

                </button>


            </div>

        </div>

    `;


    document.body.appendChild(modal);


    // ====================================
    // CLOSE BUTTON
    // ====================================

    modal
        .querySelector(
            ".awareness-modal-close"
        )
        .addEventListener(
            "click",
            closeAwareness
        );



    // ====================================
    // LISTEN BUTTON
    // ====================================

    modal
        .querySelector(
            ".awareness-modal-listen"
        )
        .addEventListener(
            "click",
            function () {

                const textToSpeak =

                    title +
                    ". " +

                    info.intro +
                    ". " +

                    info.section2 +
                    ". " +

                    info.note;


                speakText(
                    textToSpeak
                );

            }
        );



    // ====================================
    // CLICK OUTSIDE TO CLOSE
    // ====================================

    modal
        .querySelector(
            ".awareness-modal-overlay"
        )
        .addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    event.currentTarget
                ) {

                    closeAwareness();

                }

            }
        );



    // Stop page scrolling
    document.body.style.overflow =
        "hidden";

}



// ========================================
// FALLBACK SIMPLE MODAL
// ========================================

function createSimpleAwarenessModal(
    title,
    text
) {

    const modal =
        document.createElement("div");


    modal.id =
        "awarenessModal";


    modal.innerHTML = `

        <div class="awareness-modal-overlay">

            <div class="awareness-modal-box">

                <button
                    class="awareness-modal-close">

                    ×

                </button>


                <h2 class="awareness-modal-title">

                    ${title}

                </h2>


                <p class="awareness-modal-intro">

                    ${text}

                </p>


                <button
                    class="awareness-modal-listen">

                    🔊 Listen

                </button>

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal
        .querySelector(
            ".awareness-modal-close"
        )
        .addEventListener(
            "click",
            closeAwareness
        );


    modal
        .querySelector(
            ".awareness-modal-listen"
        )
        .addEventListener(
            "click",
            function () {

                speakText(
                    title +
                    ". " +
                    text
                );

            }
        );


    modal
        .querySelector(
            ".awareness-modal-overlay"
        )
        .addEventListener(
            "click",
            function (event) {

                if (
                    event.target ===
                    event.currentTarget
                ) {

                    closeAwareness();

                }

            }
        );


    document.body.style.overflow =
        "hidden";

}



// ========================================
// CLOSE MODAL
// ========================================

function closeAwareness() {

    const modal =
        document.getElementById(
            "awarenessModal"
        );


    if (modal) {

        modal.remove();

    }


    // Stop speech
    if (
        "speechSynthesis" in window
    ) {

        window.speechSynthesis.cancel();

    }


    // Restore scrolling
    document.body.style.overflow =
        "";

}