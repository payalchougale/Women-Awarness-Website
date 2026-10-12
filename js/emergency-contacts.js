/* =========================================
   CHECK LOGIN
========================================= */

document.addEventListener("DOMContentLoaded", async function () {

    try {

        const response = await fetch("/api/me");

        const data = await response.json();


        if (!data.loggedIn) {

            alert(
                "Please login first to manage emergency contacts."
            );

            window.location.href = "login.html";

            return;
        }


        loadEmergencyContacts();

    } catch (error) {

        console.error("Login check error:", error);

        alert(
            "Unable to connect to the server. Please make sure the NariAdhikar server is running."
        );

        window.location.href = "login.html";
    }

});



/* =========================================
   SAVE EMERGENCY CONTACT
========================================= */

async function saveEmergencyContact() {

    const name =
        document.getElementById("contactName").value.trim();

    const relationship =
        document.getElementById("relationship").value;

    const phone =
        document.getElementById("contactPhone").value.trim();


    /* -----------------------------------------
       VALIDATION
    ----------------------------------------- */

    if (name === "") {

        alert("Please enter contact name.");

        return;
    }


    if (relationship === "") {

        alert("Please select relationship.");

        return;
    }


    if (phone === "") {

        alert("Please enter phone number.");

        return;
    }


    if (!/^[0-9]{10}$/.test(phone)) {

        alert(
            "Please enter a valid 10-digit phone number."
        );

        return;
    }


    /* -----------------------------------------
       SEND CONTACT TO BACKEND
    ----------------------------------------- */

    try {

        const response = await fetch(
            "/api/emergency-contacts",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({

                    contact_name: name,

                    phone: phone,

                    relation: relationship

                })
            }
        );


        const data = await response.json();


        /* -----------------------------------------
           CHECK RESPONSE
        ----------------------------------------- */

        if (!response.ok) {

            if (response.status === 401) {

                alert(
                    "Your login session has expired. Please login again."
                );

                window.location.href =
                    "login.html";

                return;
            }


            alert(
                data.message ||
                "Unable to save emergency contact."
            );

            return;
        }


        /* -----------------------------------------
           SUCCESS
        ----------------------------------------- */

        alert(
            "Emergency contact saved successfully!"
        );


        document.getElementById("contactName").value =
            "";

        document.getElementById("relationship").value =
            "";

        document.getElementById("contactPhone").value =
            "";


        loadEmergencyContacts();


    } catch (error) {

        console.error(
            "Save contact error:",
            error
        );


        alert(
            "Cannot connect to the server. Make sure npm start is running."
        );

    }

}



/* =========================================
   LOAD CONTACTS
========================================= */

async function loadEmergencyContacts() {

    const contactsList =
        document.getElementById("contactsList");


    if (!contactsList) {

        return;
    }


    try {

        const response = await fetch(
            "/api/emergency-contacts"
        );


        const data = await response.json();


        /* -----------------------------------------
           NOT LOGGED IN
        ----------------------------------------- */

        if (response.status === 401) {

            alert(
                "Please login first to manage emergency contacts."
            );

            window.location.href =
                "login.html";

            return;
        }


        /* -----------------------------------------
           SERVER ERROR
        ----------------------------------------- */

        if (!response.ok) {

            contactsList.innerHTML = `

                <div class="no-contact">

                    Unable to load emergency contacts.

                </div>

            `;

            return;
        }


        const contacts =
            data.contacts || [];


        /* -----------------------------------------
           NO CONTACTS
        ----------------------------------------- */

        if (contacts.length === 0) {

            contactsList.innerHTML = `

                <div class="no-contact">

                    No emergency contacts added yet.

                </div>

            `;

            return;
        }


        /* -----------------------------------------
           DISPLAY CONTACTS
        ----------------------------------------- */

        contactsList.innerHTML = "";


        contacts.forEach(function (contact) {

            const card =
                document.createElement("div");

            card.className =
                "contact-card";


            card.innerHTML = `

                <div class="contact-info">

                    <h3>
                        👤 ${escapeHTML(contact.contact_name)}
                    </h3>

                    <p>
                        Relationship:
                        ${escapeHTML(contact.relation || "Not specified")}
                    </p>

                    <p>
                        📞 ${escapeHTML(contact.phone)}
                    </p>

                </div>


                <div class="contact-buttons">

                    <a
                        href="tel:${escapeHTML(contact.phone)}"
                        class="call-contact-btn">

                        📞 Call

                    </a>


                    <button
                        type="button"
                        class="delete-contact-btn"
                        onclick="deleteContact(${contact.id})">

                        🗑️ Delete

                    </button>

                </div>

            `;


            contactsList.appendChild(card);

        });


    } catch (error) {

        console.error(
            "Load contacts error:",
            error
        );


        contactsList.innerHTML = `

            <div class="no-contact">

                Cannot connect to the server.

                <br><br>

                Please make sure npm start is running.

            </div>

        `;

    }

}



/* =========================================
   DELETE CONTACT
========================================= */

async function deleteContact(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this contact?"
        );


    if (!confirmDelete) {

        return;
    }


    try {

        const response = await fetch(
            `/api/emergency-contacts/${id}`,
            {
                method: "DELETE"
            }
        );


        const data =
            await response.json();


        /* -----------------------------------------
           LOGIN EXPIRED
        ----------------------------------------- */

        if (response.status === 401) {

            alert(
                "Your login session has expired. Please login again."
            );

            window.location.href =
                "login.html";

            return;
        }


        /* -----------------------------------------
           DELETE ERROR
        ----------------------------------------- */

        if (!response.ok) {

            alert(
                data.message ||
                "Unable to delete contact."
            );

            return;
        }


        /* -----------------------------------------
           SUCCESS
        ----------------------------------------- */

        alert(
            "Emergency contact deleted successfully."
        );


        loadEmergencyContacts();


    } catch (error) {

        console.error(
            "Delete contact error:",
            error
        );


        alert(
            "Cannot connect to the server."
        );

    }

}



/* =========================================
   LOGOUT
========================================= */

async function logoutUser() {

    const confirmLogout =
        confirm(
            "Are you sure you want to logout?"
        );


    if (!confirmLogout) {

        return;
    }


    try {

        const response =
            await fetch(
                "/api/logout",
                {
                    method: "POST"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {

            alert(
                data.message ||
                "Unable to logout."
            );

            return;
        }


        window.location.href =
            "login.html";


    } catch (error) {

        console.error(
            "Logout error:",
            error
        );


        alert(
            "Cannot connect to the server."
        );

    }

}



/* =========================================
   SECURITY
   ESCAPE HTML
========================================= */

function escapeHTML(value) {

    const div =
        document.createElement("div");

    div.textContent =
        value == null ? "" : String(value);

    return div.innerHTML;

}