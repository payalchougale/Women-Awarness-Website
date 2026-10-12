// ========================================
// NARIADHIKAR CAREER PAGE
// ========================================

// ========================================
// CURRENT CAREER TYPE
// ========================================

let currentCareerType = "";


// ========================================
// CAREER INFORMATION
// ========================================

const careerInformation = {

    education: {
        icon: "🎓",
        title: "Education",
        intro:
            "Education can help women build knowledge, confidence and skills for further study and career opportunities.",

        points: [
            "Explore diploma, degree and postgraduate programmes.",
            "Consider certificate and skill-based courses related to your interests.",
            "Look for scholarships and education-support opportunities.",
            "Online and distance learning can be useful when regular study is difficult.",
            "Choose recognised institutions and verify course details before applying."
        ],

        examples: [
            "College and university programmes",
            "Professional certification courses",
            "Online learning",
            "Vocational training",
            "Scholarships and education support"
        ],

        next:
            "Start by identifying the subject or field you enjoy. Then compare recognised courses, eligibility, duration and costs before applying."
    },


    digital: {
        icon: "💻",
        title: "Digital Skills",
        intro:
            "Digital skills are useful for education, employment, communication, online services and many modern workplaces.",

        points: [
            "Learn basic computer operation and file management.",
            "Improve typing, email and online communication skills.",
            "Learn word processing, spreadsheets and presentations.",
            "Develop internet safety and digital privacy awareness.",
            "Explore coding, design, data, digital marketing or other technology areas."
        ],

        examples: [
            "Computer basics",
            "Microsoft Office / productivity tools",
            "Coding and programming",
            "Graphic design",
            "Digital marketing",
            "Data and technology skills"
        ],

        next:
            "Choose one digital skill that matches your interests and practise it regularly through small projects or exercises."
    },


    jobs: {
        icon: "💼",
        title: "Jobs",
        intro:
            "Women can explore employment opportunities based on their education, skills, experience and interests.",

        points: [
            "Prepare a clear resume containing your education and relevant skills.",
            "Build a professional profile and portfolio where appropriate.",
            "Search for opportunities through verified job platforms and official employment services.",
            "Check job descriptions, eligibility, location and application deadlines carefully.",
            "Never pay an employer simply to receive a job offer."
        ],

        examples: [
            "Private-sector jobs",
            "Government employment opportunities",
            "Internships",
            "Apprenticeships",
            "Remote or online work",
            "Entry-level positions"
        ],

        next:
            "Identify the type of work you want, prepare your resume and apply only through trustworthy and verified sources."
    },


    business: {
        icon: "🏪",
        title: "Self Employment",
        intro:
            "Self-employment can include small businesses, local services, freelancing, home-based work and entrepreneurship.",

        points: [
            "Identify a useful product or service you can provide.",
            "Understand your customers and local demand.",
            "Start with a realistic budget and simple business plan.",
            "Learn basic pricing, record keeping and customer communication.",
            "Check relevant registration, licensing and tax requirements before starting a business."
        ],

        examples: [
            "Home-based food business",
            "Tailoring and clothing services",
            "Beauty and personal-care services",
            "Handicrafts",
            "Freelancing",
            "Online services",
            "Small local businesses"
        ],

        next:
            "Start small. Identify one skill you can offer, understand your potential customers and calculate basic costs before investing money."
    },


    rural: {
        icon: "🌾",
        title: "Rural Opportunities",
        intro:
            "Women in rural areas can explore opportunities connected with agriculture, local businesses, crafts, services and skill development.",

        points: [
            "Explore agriculture and allied activities based on local conditions.",
            "Develop skills related to handicrafts, food processing or local services.",
            "Consider self-help groups and community-based opportunities.",
            "Look for local skill-development and employment programmes.",
            "Use official government portals to verify schemes, training and eligibility."
        ],

        examples: [
            "Agriculture-related activities",
            "Dairy and livestock activities",
            "Handicrafts",
            "Food processing",
            "Tailoring",
            "Local service businesses",
            "Skill-development programmes"
        ],

        next:
            "Check opportunities available in your area and compare eligibility, training requirements, costs and expected responsibilities."
    },


    finance: {
        icon: "💰",
        title: "Financial Independence",
        intro:
            "Financial awareness can help women understand budgeting, saving, banking and responsible financial planning.",

        points: [
            "Create a simple monthly budget.",
            "Track income and regular expenses.",
            "Build a saving habit according to your circumstances.",
            "Learn how bank accounts and digital payments work.",
            "Protect PINs, passwords, OTPs and other sensitive information.",
            "Be cautious of investment, loan and job-related scams."
        ],

        examples: [
            "Budget planning",
            "Saving",
            "Banking awareness",
            "Digital payment safety",
            "Emergency savings",
            "Financial record keeping"
        ],

        next:
            "Begin by tracking your monthly income and expenses. Then set a realistic savings goal and review it regularly."
    }

};


// ========================================
// SHOW CAREER INFORMATION
// ========================================

function showCareerInfo(type) {

    const info = careerInformation[type];

    if (!info) {
        return;
    }

    const modal = document.getElementById("careerInfo");

    if (!modal) {
        return;
    }

    const title = document.getElementById("infoTitle");
    const text = document.getElementById("infoText");
    const icon = document.getElementById("careerInfoIcon");

    if (!title || !text) {
        return;
    }

    // Save currently opened career category
    currentCareerType = type;

    // Set icon and title
    title.textContent = info.title;

    if (icon) {
        icon.textContent = info.icon;
    }

    // Create popup content
    text.innerHTML = `

        <div class="career-modal-intro">
            ${info.intro}
        </div>

        <div class="career-modal-grid">

            <div class="career-modal-section">

                <h3>✅ What You Can Do</h3>

                <ul>
                    ${info.points.map(point => `
                        <li>
                            <span>✓</span>
                            ${point}
                        </li>
                    `).join("")}
                </ul>

            </div>


            <div class="career-modal-section">

                <h3>💡 Examples</h3>

                <ul>
                    ${info.examples.map(example => `
                        <li>
                            <span>•</span>
                            ${example}
                        </li>
                    `).join("")}
                </ul>

            </div>

        </div>


        <div class="career-modal-next">

            <strong>🧭 Suggested Next Step</strong>

            <p>
                ${info.next}
            </p>

        </div>

    `;

    // Open modal
    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


// ========================================
// CLOSE CAREER INFORMATION
// ========================================

function closeCareerInfo() {

    const modal =
        document.getElementById("careerInfo");

    if (!modal) {
        return;
    }

    modal.classList.remove("show");

    document.body.style.overflow = "";

    stopCareerInfoSpeech();
}


// ========================================
// CLICK OUTSIDE MODAL
// ========================================

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("careerInfo");

    if (
        modal &&
        event.target === modal
    ) {
        closeCareerInfo();
    }

});


// ========================================
// ESCAPE KEY
// ========================================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCareerInfo();
    }

});


// ========================================
// TEXT TO SPEECH
// ========================================

function speakCareerInfo() {

    const info =
        careerInformation[currentCareerType];

    if (!info) {
        return;
    }

    if (!("speechSynthesis" in window)) {

        alert(
            "Audio is not supported in this browser."
        );

        return;
    }

    // Stop previous speech
    window.speechSynthesis.cancel();

    const text = [

        info.title,

        info.intro,

        "What you can do.",

        info.points.join(". "),

        "Examples.",

        info.examples.join(", "),

        "Suggested next step.",

        info.next

    ].join(". ");

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.rate = 0.9;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}


// ========================================
// STOP SPEECH
// ========================================

function stopCareerInfoSpeech() {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }
}


// ========================================
// CAREER FINDER
// ========================================

function findCareer() {

    const interest =
        document.getElementById("interest");

    const skill =
        document.getElementById("skill");

    const environment =
        document.getElementById("environment");

    const result =
        document.getElementById("careerResult");


    if (
        !interest ||
        !skill ||
        !environment ||
        !result
    ) {
        return;
    }


    if (
        interest.value === "" ||
        skill.value === "" ||
        environment.value === ""
    ) {

        result.style.display = "block";

        result.innerHTML = `

            <h4>🌸 Complete the Questions</h4>

            <p>
                Please select an answer for
                each question to explore
                career areas.
            </p>

        `;

        return;
    }


    let title = "";
    let description = "";


    if (interest.value === "education") {

        title = "🎓 Education & Teaching";

        description =
            "You may enjoy areas involving learning, teaching, training, education or knowledge sharing.";

    }

    else if (interest.value === "technology") {

        title = "💻 Technology & Digital Careers";

        description =
            "You may explore programming, web development, digital services, data, cybersecurity or other technology-related areas.";

    }

    else if (interest.value === "business") {

        title = "🏪 Business & Entrepreneurship";

        description =
            "You may explore entrepreneurship, small businesses, sales, services and business management.";

    }

    else if (interest.value === "creative") {

        title = "🎨 Creative Careers";

        description =
            "You may explore design, content creation, media, communication, fashion or other creative areas.";

    }

    else {

        title = "💼 Professional Careers";

        description =
            "You can explore career options that match your education, skills and interests.";

    }


    result.style.display = "block";

    result.innerHTML = `

        <h4>${title}</h4>

        <p>
            ${description}
        </p>

        <p>

            <strong>Next step:</strong>

            Build one relevant skill,
            practise through a small project
            and explore verified opportunities.

        </p>

    `;


    result.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}