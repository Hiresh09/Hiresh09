document.getElementById("year").innerText =
"\u00A9 " + new Date().getFullYear() + " Hiresh Jawanjal";

const typingText = [
"Aspiring Front-End Developer",
"Creative Web Designer",
"Focused on Clean, Modern Interfaces"
];

const detailContent = {
"project-portfolio": {
kicker: "Project",
title: "Animated Portfolio Website",
body: [
"This project presents personal skills and work in a clean, modern format. It focuses on strong first impressions, smooth scroll reveal animations, responsive sections, and polished layout spacing.",
"The main goal was to create a recruiter-friendly portfolio that feels professional while still showing creativity through motion and design."
],
points: [
"Built using HTML, CSS, and JavaScript",
"Responsive across desktop and mobile devices",
"Uses animation and section-based storytelling",
"Designed to improve personal branding online"
]
},
"project-landing": {
kicker: "Project",
title: "Creative Landing Page UI",
body: [
"This landing page was built as a front-end design practice project. It focuses on hero layout balance, modern card styling, and transitions that make the experience feel premium.",
"The project helped strengthen design thinking and attention to spacing, typography, and interface consistency."
],
points: [
"Practice in premium section design",
"Improved responsive layout skills",
"Focused on hover states and visual interaction",
"Useful as a showcase for UI styling ability"
]
},
"project-resume": {
kicker: "Project",
title: "Resume Portfolio Redesign",
body: [
"This project transforms a basic resume page into a fully developed portfolio website with stronger content structure, better section hierarchy, and interactive detail views.",
"It is designed to help present skills, certificates, and achievements in a more impressive way for recruiters and hiring managers."
],
points: [
"Modern hero section with clear call-to-action buttons",
"Dedicated sections for projects, education, certificates, and achievements",
"Interactive modal detail system for richer presentation",
"Print-friendly layout for resume export"
]
},
"certificate-web": {
kicker: "Certificate",
title: "Web Development Certificate",
body: [
"Use this card to showcase a web development certificate from your course platform, college, or training institute. It is suitable for any certificate related to HTML, CSS, responsive design, or front-end basics.",
"If you have an actual certificate URL, you can later replace this informational card with a direct verification link."
],
points: [
"Add certificate issuer name",
"Add completion month and year",
"Add credential or verification link if available",
"Keep the certificate title short and clear"
]
},
"certificate-js": {
kicker: "Certificate",
title: "JavaScript Fundamentals",
body: [
"This section is meant to highlight JavaScript learning achievements, especially beginner and intermediate certificates that demonstrate programming foundations.",
"It supports your resume by showing practical commitment to learning interactive web development."
],
points: [
"Mention variables, functions, DOM, and logic practice",
"Include platform name if available",
"Add issue date for stronger credibility",
"Replace this info with your real certificate details later"
]
},
"achievement-portfolio": {
kicker: "Achievement",
title: "Built a Personal Portfolio Presence",
body: [
"Creating a personal resume website is an important milestone because it turns your skills into something visible and professional. It shows initiative, presentation ability, and real application of front-end knowledge."
],
points: [
"Demonstrates self-driven project building",
"Improves recruiter visibility",
"Creates a central place to show projects and strengths"
]
},
"achievement-design": {
kicker: "Achievement",
title: "Strengthened Front-End Design Quality",
body: [
"This achievement reflects progress in making websites not only functional, but also visually stronger. Better alignment, spacing, color use, and section hierarchy all contribute to a more polished final result."
],
points: [
"Improved readability and layout flow",
"Practiced professional portfolio presentation",
"Focused on clean and consistent interface design"
]
},
"achievement-learning": {
kicker: "Achievement",
title: "Committed to Continuous Learning",
body: [
"Consistent practice is one of the strongest achievements for an early developer. Every new project, redesign, and interface improvement increases technical skill and confidence."
],
points: [
"Builds confidence through repetition",
"Shows long-term seriousness about development",
"Supports growth toward internship and job readiness"
]
}
};

let currentPhraseIndex = 0;
let currentCharIndex = 0;
let deleting = false;

function typeHeadline() {
const currentText = typingText[currentPhraseIndex];
const typingNode = document.querySelector(".typing");

typingNode.textContent = currentText.substring(0, currentCharIndex);

if (!deleting && currentCharIndex === currentText.length) {
deleting = true;
setTimeout(typeHeadline, 1200);
return;
}

if (deleting && currentCharIndex === 0) {
deleting = false;
currentPhraseIndex = (currentPhraseIndex + 1) % typingText.length;
}

currentCharIndex += deleting ? -1 : 1;
setTimeout(typeHeadline, deleting ? 45 : 95);
}

typeHeadline();

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("show");
}
});
}, { threshold: 0.15 });

sections.forEach((section) => observer.observe(section));

const modal = document.getElementById("detailModal");
const modalTitle = document.getElementById("modalTitle");
const modalKicker = document.getElementById("modalKicker");
const modalBody = document.getElementById("modalBody");
const closeModalButton = document.getElementById("closeModal");

function closeModal() {
modal.classList.remove("open");
modal.setAttribute("aria-hidden", "true");
document.body.style.overflow = "";
}

function openModal(detailKey) {
const detail = detailContent[detailKey];
if (!detail) {
return;
}

modalKicker.textContent = detail.kicker;
modalTitle.textContent = detail.title;

const paragraphs = detail.body.map((item) => "<p>" + item + "</p>").join("");
const points = detail.points.map((item) => "<li>" + item + "</li>").join("");

modalBody.innerHTML = paragraphs + "<ul>" + points + "</ul>";
modal.classList.add("open");
modal.setAttribute("aria-hidden", "false");
document.body.style.overflow = "hidden";
}

document.querySelectorAll(".detail-button").forEach((button) => {
button.addEventListener("click", () => {
openModal(button.dataset.detail);
});
});

closeModalButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
if (event.target.dataset.close === "true") {
closeModal();
}
});

window.addEventListener("keydown", (event) => {
if (event.key === "Escape" && modal.classList.contains("open")) {
closeModal();
}
});

document.getElementById("downloadResume").addEventListener("click", () => {
window.print();
});
