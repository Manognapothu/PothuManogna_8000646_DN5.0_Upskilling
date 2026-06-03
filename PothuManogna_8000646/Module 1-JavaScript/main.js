// =======================================
// JavaScript Basics & Setup
// =======================================

console.log("Welcome to the Community Portal");

window.addEventListener("load", () => {

    alert("Welcome to the Community Portal");

});

// =======================================
// Syntax, Data Types & Operators
// =======================================

const portalName = "Community Event Portal";

const todayDate = "2026-05-28";

let availableSeats = 50;

let eventInfo =
    `${portalName} | Date: ${todayDate} | Seats: ${availableSeats}`;

console.log(eventInfo);

// =======================================
// Event Class & Prototype
// =======================================

class Event {

    constructor(name, category, date, seats) {

        this.name = name;

        this.category = category;

        this.date = date;

        this.seats = seats;
    }
}

// Prototype Method

Event.prototype.checkAvailability = function () {

    return this.seats > 0;
};

// =======================================
// Arrays & CRUD Operations
// =======================================

let events = [

    new Event(
        "Music Festival",
        "Music",
        "2026-06-15",
        5
    ),

    new Event(
        "Food Carnival",
        "Food",
        "2026-07-10",
        0
    ),

    new Event(
        "Tech Meetup",
        "Tech",
        "2026-08-20",
        10
    )
];

// Add Event using push()

function addEvent(
    name,
    category,
    date,
    seats = 20
) {

    events.push(
        new Event(name, category, date, seats)
    );
}

addEvent(
    "Workshop on Baking",
    "Food",
    "2026-09-01",
    15
);

// Filter music events

let musicEvents =
    events.filter(event =>
        event.category === "Music"
    );

console.log("Music Events:", musicEvents);

// Map method

let formattedEvents =
    events.map(event =>
        `Workshop/Event: ${event.name}`
    );

console.log(formattedEvents);

// =======================================
// Closures
// =======================================

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            `Total Registrations: ${totalRegistrations}`
        );
    };
}

const trackMusicRegistrations =
    registrationTracker();

// =======================================
// DOM Manipulation
// =======================================

const eventContainer =
    document.querySelector("#eventContainer");

function displayEvents(eventList) {

    eventContainer.innerHTML = "";

    eventList.forEach(event => {

        // Conditionals

        let currentDate = new Date();

        let eventDate = new Date(event.date);

        if(eventDate < currentDate ||
           event.seats <= 0) {

            return;
        }

        const card =
            document.createElement("div");

        card.classList.add("event-box");

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>
                Category: ${event.category}
            </p>

            <p>
                Date: ${event.date}
            </p>

            <p>
                Available Seats:
                <span id="${event.name}">
                    ${event.seats}
                </span>
            </p>

            <button onclick="registerUser('${event.name}')">
                Register
            </button>

            <button onclick="cancelRegistration('${event.name}')">
                Cancel
            </button>
        `;

        eventContainer.appendChild(card);

        // Object.entries()

        Object.entries(event).forEach(([key, value]) => {

            console.log(`${key}: ${value}`);

        });

    });
}

// =======================================
// Register User with Error Handling
// =======================================

function registerUser(eventName) {

    try {

        let selectedEvent =
            events.find(
                event => event.name === eventName
            );

        if(!selectedEvent) {

            throw new Error(
                "Event not found"
            );
        }

        if(selectedEvent.seats <= 0) {

            throw new Error(
                "No seats available"
            );
        }

        // decrement seats

        selectedEvent.seats--;

        trackMusicRegistrations();

        displayEvents(events);

        alert(
            `Registered for ${eventName}`
        );

    }

    catch(error) {

        alert(error.message);

        console.error(error);

    }
}

// Cancel Registration

function cancelRegistration(eventName) {

    let selectedEvent =
        events.find(
            event => event.name === eventName
        );

    selectedEvent.seats++;

    displayEvents(events);
}

// =======================================
// Higher Order Function
// =======================================

function filterEventsByCategory(
    category,
    callback
) {

    let filteredEvents =
        [...events].filter(
            event =>
                category === "All" ||
                event.category === category
        );

    callback(filteredEvents);
}

// =======================================
// Event Handling
// =======================================

// onchange filter

document
.getElementById("categoryFilter")
.onchange = function () {

    filterEventsByCategory(
        this.value,
        displayEvents
    );
};

// keydown search

document
.getElementById("searchInput")
.addEventListener(
    "keydown",
    function () {

        let keyword =
            this.value.toLowerCase();

        let filtered =
            events.filter(event =>
                event.name
                .toLowerCase()
                .includes(keyword)
            );

        displayEvents(filtered);
    }
);

// =======================================
// Working with Forms
// =======================================

const form =
    document.getElementById("eventForm");

form.addEventListener(
    "submit",
    async function(event) {

        event.preventDefault();

        console.log(
            "Form submission started"
        );

        // Form elements

        const {
            name,
            email,
            eventType
        } = form.elements;

        let valid = true;

        // Name validation

        if(name.value.trim() === "") {

            document
            .getElementById("nameError")
            .innerText =
                "Name is required";

            valid = false;
        }

        else {

            document
            .getElementById("nameError")
            .innerText = "";
        }

        // Email validation

        if(email.value.trim() === "") {

            document
            .getElementById("emailError")
            .innerText =
                "Email is required";

            valid = false;
        }

        else {

            document
            .getElementById("emailError")
            .innerText = "";
        }

        // Event validation

        if(eventType.value === "") {

            document
            .getElementById("eventError")
            .innerText =
                "Select an event";

            valid = false;
        }

        else {

            document
            .getElementById("eventError")
            .innerText = "";
        }

        if(!valid) {

            return;
        }

        const userData = {

            name: name.value,

            email: email.value,

            event: eventType.value
        };

        console.log(
            "Payload:",
            userData
        );

        // =======================================
        // AJAX & Fetch API
        // =======================================

        document
        .getElementById("loadingSpinner")
        .style.display = "block";

        try {

            // Simulated Delay

            await new Promise(resolve =>
                setTimeout(resolve, 2000)
            );

            // Fetch POST

            let response =
                await fetch(
                    "https://jsonplaceholder.typicode.com/posts",
                    {

                        method: "POST",

                        headers: {

                            "Content-Type":
                            "application/json"
                        },

                        body: JSON.stringify(userData)
                    }
                );

            if(response.ok) {

                document
                .getElementById("confirmationMessage")
                .innerText =
                    "Registration Successful!";

                console.log(
                    "Registration success"
                );
            }

            else {

                throw new Error(
                    "Registration failed"
                );
            }
        }

        catch(error) {

            document
            .getElementById("confirmationMessage")
            .innerText =
                "Registration Failed";

            console.error(error);
        }

        finally {

            document
            .getElementById("loadingSpinner")
            .style.display = "none";
        }
    }
);

// =======================================
// Fetch Events Using Promises
// =======================================

function fetchEventsPromise() {

    fetch(
        "https://jsonplaceholder.typicode.com/users"
    )

    .then(response => response.json())

    .then(data => {

        console.log(
            "Fetched Data:",
            data
        );

    })

    .catch(error => {

        console.error(error);

    });
}

fetchEventsPromise();

// =======================================
// Async/Await Example
// =======================================

async function fetchEventsAsync() {

    try {

        document
        .getElementById("loadingSpinner")
        .style.display = "block";

        let response =
            await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

        let data =
            await response.json();

        console.log(
            "Async/Await Data:",
            data.slice(0, 5)
        );
    }

    catch(error) {

        console.error(error);

    }

    finally {

        document
        .getElementById("loadingSpinner")
        .style.display = "none";
    }
}

fetchEventsAsync();

// =======================================
// jQuery
// =======================================

$("#registerBtn").click(function () {

    $(".event-box").fadeOut(500)
                   .fadeIn(500);
});

// =======================================
// Initial Display
// =======================================

displayEvents(events);

// =======================================
// Debugging Notes
// =======================================

console.log(
    "Use Chrome DevTools Console & Network tab for debugging."
);

debugger;