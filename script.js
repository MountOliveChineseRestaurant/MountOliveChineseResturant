// =====================
// TRANSLATIONS
// =====================
const translations = {
    en: {
        headerTitle: "Mount Olive Chinese Restaurant",
        nav: {
            about: "About",
            announcements: "Announcements",
            menu: "Menu",
            contact: "Contact"
        },
        about: {
            heading: "About",
            description: "Welcome to Mount Olive Chinese Restaurant.",
            hoursHeading: "Hours"
        },
        announcements: {
            todayTitle: "Today's Schedule",
            closed: "We are closed today.",
            open: "We are open today from",
            specialDatesTitle: "Special Dates",
            specialDatesMessage: "Nothing here for now, check back later.",
            closureTitle: "Upcoming Closure",
            closureMessage: "We will be closing early on December 28th at 7:30 PM. "
        },
        menu: {
            heading: "Menu",
            translateBtn: "Traducir al Español",
            image1: "https://raw.githubusercontent.com/MountOliveChineseResturant/MountOliveChineseResturant/main/English%20ver%20menu%20part%201.png",
            image2: "https://raw.githubusercontent.com/MountOliveChineseResturant/MountOliveChineseResturant/main/English%20ver%20menu%20part%202.png"
        },
        contact: {
            heading: "Contact Us",
            address: "Address:",
            phone: "Phone:"
        }
    },
    es: {
        headerTitle: "Restaurante Chino Mount Olive",
        nav: {
            about: "Acerca de",
            announcements: "Anuncios",
            menu: "Menú",
            contact: "Contacto"
        },
        about: {
            heading: "Acerca de",
            description: "Bienvenidos al Restaurante Chino Mount Olive.",
            hoursHeading: "Horario"
        },
        announcements: {
            todayTitle: "Horario de Hoy",
            closed: "Estamos cerrados hoy.",
            open: "Estamos abiertos hoy de",
            specialDatesTitle: "Fechas Especiales",
            specialDatesMessage: "Nada por ahora, vuelve más tarde.",
            closureTitle: "Cierre Próximo",
            closureMessage: "Cerraremos antes de lo habitual el 28 de diciembre, a las 7:30 PM."
        },
        menu: {
            heading: "Menú",
            translateBtn: "Translate to English",
            image1: "https://raw.githubusercontent.com/MountOliveChineseResturant/MountOliveChineseResturant/main/Spanish%20ver%20menu%20part%201.png",
            image2: "https://raw.githubusercontent.com/MountOliveChineseResturant/MountOliveChineseResturant/main/Spanish%20ver%20menu%20part%202.png"
        },
        contact: {
            heading: "Contáctenos",
            address: "Dirección:",
            phone: "Teléfono:"
        }
    }
};

// =====================
// OPERATING HOURS
// =====================
const hours = {
    Sunday: "12:00 PM – 10:00 PM",
    Monday: "Closed",
    Tuesday: "11:00 AM – 10:00 PM",
    Wednesday: "11:00 AM – 10:00 PM",
    Thursday: "11:00 AM – 10:00 PM",
    Friday: "11:00 AM – 10:30 PM",
    Saturday: "11:00 AM – 10:30 PM"
};
const days = Object.keys(hours);

// =====================
// SMOOTH SCROLLING
// =====================
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: "smooth"
        });
    });
});

// =====================
// GET TODAY'S SCHEDULE
// =====================
function getTodaySchedule() {
    const today = new Date().getDay();
    return hours[days[today]];
}

// =====================
// SET LANGUAGE FUNCTION
// =====================
function setLanguage(lang) {
    const t = translations[lang];

    // Header
    document.getElementById("header-title").textContent = t.headerTitle;

    // Nav
    document.getElementById("nav-about").textContent = t.nav.about;
    document.getElementById("nav-announcements").textContent = t.nav.announcements;
    document.getElementById("nav-menu").textContent = t.nav.menu;
    document.getElementById("nav-contact").textContent = t.nav.contact;

    // About
    document.getElementById("about-heading").textContent = t.about.heading;
    document.getElementById("about-description").textContent = t.about.description;
    document.getElementById("hours-heading").textContent = t.about.hoursHeading;

    // Announcements
    const schedule = getTodaySchedule();
    document.getElementById("announcement-title-1").textContent = t.announcements.todayTitle;
    document.getElementById("announcement-content-1").textContent =
        schedule === "Closed"
            ? t.announcements.closed
            : `${t.announcements.open} ${schedule}.`;

    document.getElementById("special-dates-title").textContent = t.announcements.specialDatesTitle;
    document.getElementById("special-dates-message").textContent = t.announcements.specialDatesMessage;

    document.getElementById("closure-title").textContent = t.announcements.closureTitle;
    document.getElementById("closure-message").textContent = t.announcements.closureMessage;

    // Menu
    document.getElementById("menu-heading").textContent = t.menu.heading;
    document.getElementById("translate-btn").textContent = t.menu.translateBtn;
    document.getElementById("menu-image-1").src = t.menu.image1;
    document.getElementById("menu-image-2").src = t.menu.image2;

    // Contact
    document.getElementById("contact-heading").textContent = t.contact.heading;
    document.getElementById("contact-address").childNodes[0].nodeValue = t.contact.address + " ";
    document.getElementById("contact-phone").childNodes[0].nodeValue = t.contact.phone + " ";
}

// =====================
// TRANSLATE BUTTON EVENT
// =====================
document.getElementById("translate-btn").addEventListener("click", () => {
    const isEnglish = document.getElementById("translate-btn").textContent.includes("Español");
    setLanguage(isEnglish ? "es" : "en");
});

// =====================
// INITIAL PAGE LOAD
// =====================
setLanguage("en");
