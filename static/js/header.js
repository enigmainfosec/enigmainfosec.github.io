const langs = document.querySelector(".langs"),
    link = document.querySelectorAll(".language"),

    home = document.querySelector("#homeHead"),
    homeMobile = document.querySelector("#mobileHomeHead"),
    services = document.querySelector(".servicesHead"),
    aboutUs = document.querySelector(".aboutUsHead"),
    mobileAboutUsHead = document.querySelector(".mobileAboutUsHead"),
    service1 = document.querySelector(".service1head"),
    mobileService1 = document.querySelector(".mobileServ1head"),
    languageDrop = document.querySelector(".languageHead");

let lang = localStorage.getItem("lang") || "english";
let index = parseInt(localStorage.getItem("langIndex")) || 0;

const dataHead = {
    english: {
        home: "Homepage",
        services: "Services",
        aboutUs: "About Us",
        service1: "IT Professional Services",
        languageDrop: "Language"
    },
    português: {
        home: "Página Inicial",
        services: "Serviços",
        aboutUs: "Sobre Nós",
        service1: "Serviços Profissionais IT",
        languageDrop: "Linguagem"
    }
}

langs.querySelector(".active").classList.remove("active");
link[index].classList.add("active");
changeLangHead(lang, home, services, aboutUs, service1, languageDrop);

link.forEach((el, i) => el.addEventListener("click", () => {
    langs.querySelector(".active").classList.remove("active");
    el.classList.add("active");
    const attr = el.dataset.lang;

    if (i==2) {
        i=0;
    } else if (i==3){
        i=1
    }

    localStorage.setItem("lang", attr);
    localStorage.setItem("langIndex", i);

    location.reload();
})
)

function changeLangHead(lang, home, services, aboutUs, service1, languageDrop) {
    home.textContent = dataHead[lang].home
    mobileHomeHead.textContent = dataHead[lang].home
    services.textContent = dataHead[lang].services
    aboutUs.textContent = dataHead[lang].aboutUs
    mobileAboutUsHead.textContent = dataHead[lang].aboutUs
    service1.textContent = dataHead[lang].service1
    mobileService1.textContent = dataHead[lang].service1
    languageDrop.textContent = dataHead[lang].languageDrop
}



