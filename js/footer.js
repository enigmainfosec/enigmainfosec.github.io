const 
footerContactUs = document.querySelector(".footerContactUs"),
servicesFooter = document.querySelector(".servicesFooter");
service1foot = document.querySelector(".service1foot");
lang = localStorage.getItem("lang") || "english";

const dataFoot = {
    english: {
        footerContactUs: "Contact Us",
        servicesFooter: "Services",
        service1foot: "IT Professional Services",  
    },
    português: {
        footerContactUs: "Contacte-nos",
        servicesFooter: "Serviços",
        service1foot: "Serviços Profissionais IT",
    }
}

changeLang(lang, footerContactUs, servicesFooter, service1foot);

function changeLang(lang, footerContactUs, servicesFooter, service1foot, ){
    footerContactUs.textContent = dataFoot[lang].footerContactUs
    servicesFooter.textContent = dataFoot[lang].servicesFooter
    service1foot.textContent = dataFoot[lang].service1foot
}


