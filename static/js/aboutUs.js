const 
    title = document.querySelector(".title"),
    companyText1 = document.querySelector(".companyText1"),
    companyText2 = document.querySelector(".companyText2"),
    companyText3 = document.querySelector(".companyText3"),
    companyText4 = document.querySelector(".companyText4"),
    contactTextTitle = document.querySelector(".contactTextTitle");
lang = localStorage.getItem("lang") || "english";

const data = {
    english: {
        title: "ABOUT US",
        companyText1: "At ENIGMA INFOSEC, we are dedicated to safeguarding your digital world with precision and expertise. As a leading provider of IT professional services, we specialize in delivering robust, reliable and secure solutions tailored to meet the unique needs of our clients.",
        companyText2: "Our team of certified IT professionals combines extensive industry knowledge with innovative technologies to offer a comprehensive suite of managed and unmanaged services. Whether it's system administration, cybersecurity, cloud integration or compliance support, we have the expertise to ensure your IT infrastructure is optimized, protected, and aligned with your business goals.",
        companyText3: "With a customer-centric approach, we prioritize building long-term relationships based on trust, transparency, and exceptional service. We understand that every business is unique, which is why we take the time to understand your specific challenges and objectives to deliver personalized solutions that drive success.",
        companyText4: "At our company, we believe that your obstacles should end when we begin. Let us partner with you to navigate the complexities of the digital landscape and empower your business with reliable and secure IT solutions. Choose us as your trusted IT partner, and experience the ENIGMA INFOSEC difference.",
        contactTextTitle: "Contacts"
    },
    português: {
        title: "SOBRE NÓS",
        companyText1: "Na ENIGMA INFOSEC, estamos dedicados a proteger o seu mundo digital com precisão e experiência. Como fornecedor de serviços profissionais IT, especializamo-nos em fornecer soluções robustas, confiáveis e seguras, adaptadas para atender às necessidades exclusivas dos nossos clientes.",
        companyText2: "A nossa equipa de profissionais certificados combina um conhecimento extenso da indústria com tecnologias inovadores para oferecer um conjunto abrangente de serviços automatizados e não automatizados. Quer se trate de administração, cibersegurança, integração na cloud ou compliance support. Temos a experiência necessária para garantir que a sua infraestrutura está otimizada, protegida e alinhada com os seus objetivos.",
        companyText3: "Com uma abordagem centrada no cliente, priorizamos a construção de relacionamentos de longo prazo baseados na confiança, transparência e serviço excecional. Entendemos que cada negócio é único, pelo que dedicamos tempo para entender os seus desafios e objetivos específicos para fornecer soluções personalizadas que impulsionam o sucesso.",
        companyText4: "Na nossa empresa, acreditamos que os seus obstáculos devem terminar onde começamos. Deixe-nos trabalhar consigo de forma a navegar as complexidades do mundo digital e fortalecer a sua empresa com soluções de IT confiáveis e seguras. Escolha-nos como o seu parceiro confiável de IT e experimente a diferença ENIGMA INFOSEC.",
        contactTextTitle: "Contactos"
    }
}

changeLang(lang, title, companyText1, companyText2, companyText3, companyText4, contactTextTitle);

function changeLang(lang, title, companyText1, companyText2, companyText3, companyText4, contactTextTitle) {
    title.textContent = data[lang].title
    companyText1.textContent = data[lang].companyText1
    companyText2.textContent = data[lang].companyText2
    companyText3.textContent = data[lang].companyText3
    companyText4.textContent = data[lang].companyText4
    contactTextTitle.textContent = data[lang].contactTextTitle
}

