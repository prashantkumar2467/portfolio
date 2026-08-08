// ================= MOBILE MENU =================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

}


// Close mobile menu after clicking a link

document.querySelectorAll(".mobile-link").forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {
            mobileMenu.classList.add("hidden");
        }

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        const subject = encodeURIComponent(
            "Portfolio Contact - " + name
        );

        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        window.location.href =
            `mailto:prashantkr.2467@gmail.com?subject=${subject}&body=${body}`;

    });

}


// ================= CURRENT YEAR =================

const yearElement = document.getElementById("currentYear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}