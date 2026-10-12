/* =========================================
   🌸 NARIADHIKAR
   LEGAL RIGHTS JAVASCRIPT
========================================= */


/* =========================================
   GLOBAL VARIABLES
========================================= */

let selectedCategory = "all";

let searchText = "";


/* =========================================
   PAGE LOAD
========================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "🌸 NariAdhikar Legal Rights loaded."
        );


        initializeLegalRights();

    }
);


/* =========================================
   INITIALIZE
========================================= */

function initializeLegalRights() {

    setupSearch();

    setupCategories();

    setupReadMore();

    setupAudio();

    applyFilters();

}


/* =========================================
   🔎 SEARCH
========================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "rightsSearch"
        );


    const button =
        document.getElementById(
            "searchRights"
        );


    if (!input) {

        return;

    }


    /* =====================================
       SEARCH BUTTON
    ===================================== */

    if (button) {

        button.addEventListener(
            "click",
            function () {

                searchText =
                    input.value
                        .trim()
                        .toLowerCase();


                applyFilters();

            }
        );

    }


    /* =====================================
       ENTER KEY
    ===================================== */

    input.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Enter"
            ) {

                searchText =
                    input.value
                        .trim()
                        .toLowerCase();


                applyFilters();

            }

        }
    );


    /* =====================================
       LIVE SEARCH
    ===================================== */

    input.addEventListener(
        "input",
        function () {

            searchText =
                this.value
                    .trim()
                    .toLowerCase();


            applyFilters();

        }
    );

}


/* =========================================
   🌸 CATEGORY BUTTONS
========================================= */

function setupCategories() {

    const buttons =
        document.querySelectorAll(
            ".category-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    /* Remove active
                       from all buttons */

                    buttons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    /* Make clicked button active */

                    this.classList.add(
                        "active"
                    );


                    /* Get selected category */

                    selectedCategory =
                        this.dataset.category ||
                        "all";


                    applyFilters();

                }
            );

        }
    );

}


/* =========================================
   🔎 APPLY FILTERS
========================================= */

function applyFilters() {

    const cards =
        document.querySelectorAll(
            ".right-card"
        );


    let visibleCards = 0;


    cards.forEach(
        function (card) {

            const category =
                (
                    card.dataset.category ||
                    ""
                ).toLowerCase();


            const keywords =
                (
                    card.dataset.keywords ||
                    ""
                ).toLowerCase();


            const content =
                card.innerText
                    .toLowerCase();


            /* =================================
               CATEGORY
            ================================= */

            const categoryMatch =
                selectedCategory === "all" ||
                category === selectedCategory;


            /* =================================
               SEARCH
            ================================= */

            const searchMatch =
                searchText === "" ||
                keywords.includes(searchText) ||
                content.includes(searchText);


            /* =================================
               SHOW / HIDE
            ================================= */

            if (
                categoryMatch &&
                searchMatch
            ) {

                card.style.display =
                    "";

                visibleCards++;

            }

            else {

                card.style.display =
                    "none";

            }

        }
    );


    updateNoResults(
        visibleCards
    );

}


/* =========================================
   ❌ NO RESULTS
========================================= */

function updateNoResults(
    visibleCards
) {

    const message =
        document.getElementById(
            "noResults"
        );


    if (!message) {

        return;

    }


    if (
        visibleCards === 0
    ) {

        message.style.display =
            "block";

    }

    else {

        message.style.display =
            "none";

    }

}


/* =========================================
   📖 READ MORE
========================================= */

function setupReadMore() {

    const buttons =
        document.querySelectorAll(
            ".read-more-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    const card =
                        this.closest(
                            ".right-card"
                        );


                    if (!card) {

                        return;

                    }


                    const information =
                        card.querySelector(
                            ".more-info"
                        );


                    if (!information) {

                        return;

                    }


                    const isOpen =
                        information.style.display ===
                        "block";


                    if (isOpen) {

                        information.style.display =
                            "none";


                        this.innerHTML =
                            "📖 Read More";

                    }

                    else {

                        information.style.display =
                            "block";


                        this.innerHTML =
                            "📕 Read Less";

                    }

                }
            );

        }
    );

}


/* =========================================
   🔊 AUDIO
========================================= */

function setupAudio() {

    const buttons =
        document.querySelectorAll(
            ".listen-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {


                    const card =
                        this.closest(
                            ".right-card"
                        );


                    if (!card) {

                        return;

                    }


                    const title =
                        card.querySelector(
                            "h3"
                        );


                    const description =
                        card.querySelector(
                            ":scope > p"
                        );


                    const information =
                        card.querySelector(
                            ".more-info"
                        );


                    let text = "";


                    if (title) {

                        text +=
                            title.innerText +
                            ". ";

                    }


                    if (description) {

                        text +=
                            description.innerText +
                            ". ";

                    }


                    if (information) {

                        text +=
                            information.innerText;

                    }


                    speakLegalInformation(
                        text
                    );

                }
            );

        }
    );

}


/* =========================================
   🔊 SPEAK INFORMATION
========================================= */

function speakLegalInformation(
    text
) {

    if (
        !("speechSynthesis" in window)
    ) {

        alert(
            "🔊 Audio is not supported by your browser."
        );

        return;

    }


    /* Stop current speech */

    window.speechSynthesis.cancel();


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


    /* =====================================
       GET HOME PAGE LANGUAGE
    ===================================== */

    const language =
        localStorage.getItem(
            "nariLanguage"
        ) || "en";


    /* =====================================
       LANGUAGE
    ===================================== */

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


/* =========================================
   ⏹️ STOP AUDIO
========================================= */

function stopLegalAudio() {

    if (
        "speechSynthesis"
        in window
    ) {

        window.speechSynthesis.cancel();

    }

}


/* =========================================
   🛑 STOP AUDIO WHEN LEAVING PAGE
========================================= */

document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.hidden
        ) {

            stopLegalAudio();

        }

    }
);


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            stopLegalAudio();

        }

    }
);

// ==========================================
// DOMESTIC VIOLENCE MODAL
// ==========================================

function openDomesticViolence() {
    const modal = document.getElementById("domesticViolenceModal");

    if (!modal) return;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeDomesticViolence() {
    const modal = document.getElementById("domesticViolenceModal");

    if (!modal) return;

    modal.classList.remove("show");
    document.body.style.overflow = "";
}

// Close when clicking outside the modal
window.addEventListener("click", function(event) {

    const modal = document.getElementById("domesticViolenceModal");

    if (modal && event.target === modal) {
        closeDomesticViolence();
    }

});

// Close with ESC key
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeDomesticViolence();
    }

});

/* =========================================
   DOWRY INFORMATION MODAL
========================================= */

function openDowryInfo() {

    const modal =
        document.getElementById("dowryModal");

    if (!modal) {
        return;
    }

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeDowryInfo() {

    const modal =
        document.getElementById("dowryModal");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* Close when clicking outside popup */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("dowryModal");

    if (
        modal &&
        event.target === modal
    ) {

        closeDowryInfo();

    }

});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeDowryInfo();

    }

});

/* =========================================
   POSH ACT INFORMATION MODAL
========================================= */

function openPOSHInfo() {
    const modal = document.getElementById("poshModal");

    if (!modal) return;

    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closePOSHInfo() {
    const modal = document.getElementById("poshModal");

    if (!modal) return;

    modal.classList.remove("show");
    document.body.style.overflow = "";
}


/* Close when clicking outside the popup */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("poshModal");

    if (modal && event.target === modal) {
        closePOSHInfo();
    }

});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePOSHInfo();
    }

});

/* =========================================
   POSH LISTEN BUTTON
========================================= */

function speakPOSHInfo() {

    if (!("speechSynthesis" in window)) {
        alert("Text-to-speech is not supported in this browser.");
        return;
    }

    window.speechSynthesis.cancel();

    const text = `
        Workplace Safety.

        Women have protections against sexual harassment at the workplace.

        The Sexual Harassment of Women at Workplace,
        Prevention, Prohibition and Redressal Act, 2013,
        commonly known as the POSH Act,
        provides protection against sexual harassment
        at the workplace.

        The Act provides a mechanism for prevention
        and redressal of complaints and requires
        appropriate complaint committees at workplaces
        covered by the law.

        Women should know their workplace rights
        and the appropriate complaint mechanism
        available to them.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

/* =========================================
   PROPERTY & INHERITANCE RIGHTS MODAL
========================================= */

function openPropertyInfo() {

    const modal = document.getElementById("propertyModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closePropertyInfo() {

    const modal = document.getElementById("propertyModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* Close when clicking outside */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("propertyModal");

    if (modal && event.target === modal) {

        closePropertyInfo();

    }

});


/* Close with Escape */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closePropertyInfo();

    }

});


/* =========================================
   PROPERTY RIGHTS LISTEN BUTTON
========================================= */

function speakPropertyInfo() {

    if (!("speechSynthesis" in window)) {

        alert("Text-to-speech is not supported in this browser.");

        return;
    }

    window.speechSynthesis.cancel();

    const text = `
        Women's Property and Inheritance Rights.

        Women's property rights are property and inheritance
        rights enjoyed by women within a society.

        Property rights can include ownership,
        inheritance, access to land, and rights to use property.

        Land rights may arise through inheritance,
        transfers from the State, tenancy arrangements,
        or purchase of land.

        Access to property can support women's
        economic independence and security.

        Gender bias and traditional property practices
        can sometimes limit women's ownership and control
        over land and other resources.

        Lack of awareness, inadequate enforcement,
        administrative barriers and traditional attitudes
        can also make it difficult for women to exercise
        their property rights.

        Awareness of property and inheritance rights
        can help women understand their rights and
        seek appropriate legal assistance.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

/* =========================================
   CYBER ABUSE INFORMATION MODAL
========================================= */

function openCyberInfo() {

    const modal = document.getElementById("cyberModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeCyberInfo() {

    const modal = document.getElementById("cyberModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


/* Close when clicking outside */

window.addEventListener("click", function(event) {

    const modal = document.getElementById("cyberModal");

    if (modal && event.target === modal) {

        closeCyberInfo();

    }

});


/* Close with Escape */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeCyberInfo();

    }

});


/* =========================================
   CYBER ABUSE LISTEN BUTTON
========================================= */

function speakCyberInfo() {

    if (!("speechSynthesis" in window)) {

        alert("Text-to-speech is not supported in this browser.");

        return;
    }

    window.speechSynthesis.cancel();

    const text = `
        Protection from Cyber Abuse.

        Cyber crimes are offences that happen through
        computers, mobile devices, networks or the internet.

        Common forms include cyber stalking,
        cyber bullying, cyber harassment,
        identity theft, privacy violations,
        voyeurism and non-consensual sharing
        of intimate content.

        Under the current criminal-law framework,
        Bharatiya Nyaya Sanhita Section 75 deals
        with sexual harassment.

        Section 78 deals with stalking and includes
        monitoring a woman's internet, email or
        electronic communication.

        Section 77 deals with voyeurism.

        Section 351 deals with criminal intimidation.

        Section 79 deals with conduct intended to
        insult the modesty of a woman, including
        intrusion upon her privacy.

        The Information Technology Act contains
        provisions including Section 66C for identity theft,
        Section 66E for violation of privacy,
        Section 67 for obscene electronic material,
        Section 67A for sexually explicit electronic material,
        and Section 67B concerning material depicting
        children in sexually explicit acts or conduct
        covered by the provision.

        If you face cyber abuse, preserve evidence,
        secure your accounts, report harmful content
        where appropriate and seek legal or police assistance.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

function openChildMarriageInfo() {

    const modal = document.getElementById("childMarriageModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeChildMarriageInfo() {

    const modal = document.getElementById("childMarriageModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("childMarriageModal");

    if (modal && event.target === modal) {
        closeChildMarriageInfo();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeChildMarriageInfo();
    }

});


function speakChildMarriageInfo() {

    if (!("speechSynthesis" in window)) {

        alert("Text-to-speech is not supported in this browser.");

        return;
    }

    window.speechSynthesis.cancel();

    const text = `
        Protection Against Child Marriage.

        Child marriage is a marriage involving a person
        below the legal age of marriage.

        In India, the Prohibition of Child Marriage Act,
        2006 provides a legal framework for preventing
        child marriages and protecting children affected
        by them.

        Under the Act, a female below 18 years and a male
        below 21 years are considered children for the
        purpose of marriage.

        Persons who perform, conduct, direct or promote
        a child marriage may face legal consequences.

        If a child marriage is planned, appropriate
        authorities, police or child protection authorities
        can be contacted for help.

        Child marriage can affect a child's education,
        health, safety, independence and future opportunities.

        This information is for general legal awareness
        and is not legal advice.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

/* =================================
   POLICE & COMPLAINT SUPPORT
================================= */

function openPoliceSupportInfo() {

    const modal = document.getElementById("policeSupportModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closePoliceSupportInfo() {

    const modal = document.getElementById("policeSupportModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";
}


window.addEventListener("click", function(event) {

    const modal = document.getElementById("policeSupportModal");

    if (modal && event.target === modal) {
        closePoliceSupportInfo();
    }

});


document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePoliceSupportInfo();
    }

});


function speakPoliceSupportInfo() {

    if (!("speechSynthesis" in window)) {

        alert("Text-to-speech is not supported in this browser.");

        return;
    }

    window.speechSynthesis.cancel();

    const text = `
        Police and Complaint Support.

        Reporting an offence to the police can be an
        important step towards protection, investigation,
        justice and access to support.

        If there is an immediate threat to life or safety,
        move to a safe place where possible and contact
        emergency services. In India, emergency assistance
        can be reached through 112.

        For information relating to a cognisable offence,
        the Bharatiya Nagarik Suraksha Sanhita provides
        the framework for recording information by police.

        Zero FIR refers to the practice of registering
        information concerning a cognisable offence at
        a police station even when the offence falls
        outside its territorial jurisdiction.

        Preserve important evidence such as messages,
        screenshots, emails, photographs, medical reports,
        CCTV information and witness details.

        If a complaint is not appropriately recorded,
        appropriate remedies may be available through
        senior police authorities and other legal authorities.

        Eligible persons can also seek legal aid.

        This information is for general legal awareness
        and is not legal advice.
    `;

    const speech = new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);
}

/* =================================
   FINANCIAL & FAMILY SUPPORT
================================== */

function openFinancialSupportInfo() {

    const modal =
        document.getElementById("financialSupportModal");

    if (!modal) return;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


function closeFinancialSupportInfo() {

    const modal =
        document.getElementById("financialSupportModal");

    if (!modal) return;

    modal.classList.remove("show");

    document.body.style.overflow = "";

}


/* Close when clicking outside */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("financialSupportModal");

    if (modal && event.target === modal) {

        closeFinancialSupportInfo();

    }

});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeFinancialSupportInfo();

    }

});


/* =================================
   LISTEN
================================== */

function speakFinancialSupportInfo() {

    if (!("speechSynthesis" in window)) {

        alert(
            "Text-to-speech is not supported in this browser."
        );

        return;

    }

    window.speechSynthesis.cancel();

    const text = `

        Financial and Family Support.

        Women may have legal rights relating to
        family property, inheritance, maintenance,
        maternity protection and financial relief.

        The Hindu Succession Act, 1956 provides rules
        relating to inheritance and succession for
        persons covered by Hindu personal law.

        The Hindu Succession Amendment Act of 2005
        gave daughters equal coparcenary status
        with sons in the Hindu joint family system.

        Eligible wives, children and parents may have
        maintenance rights under applicable law.

        The Protection of Women from Domestic Violence
        Act, 2005 provides remedies and protections
        for women facing domestic violence, including
        monetary and economic relief in appropriate cases.

        Article 42 of the Constitution provides for
        just and humane conditions of work and
        maternity relief.

        The Maternity Benefit Act, 1961 is also
        legislation relating to maternity protection.

        Women also participate in employment,
        agriculture, business and other economic
        activities.

        This information is for general legal awareness
        and is not legal advice.

    `;

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;

    window.speechSynthesis.speak(speech);

}