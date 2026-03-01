// Menu mobile + lien actif
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const links = [...document.querySelectorAll(".menu a")];

function setActive(hash) {
    links.forEach(a => a.classList.toggle("active", a.getAttribute("href") === hash));
}

burger?.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
});

links.forEach(a => {
    a.addEventListener("click", () => {
        menu.classList.remove("open");
        burger?.setAttribute("aria-expanded", "false");
        setActive(a.getAttribute("href"));
    });
});

// Active link selon scroll (simple)
const sections = links
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

window.addEventListener("scroll", () => {
    const y = window.scrollY + 140;
    let current = "#accueil";
    for (const s of sections) {
        if (s.offsetTop <= y) current = "#" + s.id;
    }
    setActive(current);
});

// Année
document.getElementById("year").textContent = new Date().getFullYear();