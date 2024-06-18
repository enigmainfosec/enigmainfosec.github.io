const
    companyTitle2 = document.querySelector(".companyTitle2"),
    companyTitle2Mobile = document.querySelector(".companyTitle2Mobile"),
    companyText1 = document.querySelector(".companyText1"),
    companyText2 = document.querySelector(".companyText2"),
    companyText3 = document.querySelector(".companyText3"),
    service1Text0 = document.querySelector(".service1Text0"),
    service1Text1 = document.querySelector(".service1Text1"),
    service1Text2 = document.querySelector(".service1Text2"),
    service1Text3 = document.querySelector(".service1Text3"),
    service1Text4 = document.querySelector(".service1Text4"),
    service1Text5 = document.querySelector(".service1Text5"),
    service1Text6 = document.querySelector(".service1Text6"),
    service1Text7 = document.querySelector(".service1Text7"),
    service1Text8 = document.querySelector(".service1Text8"),
    service2Text1 = document.querySelector(".service2Text1"),
    service2Text2 = document.querySelector(".service2Text2"),
    service2Text3 = document.querySelector(".service2Text3"),
    service2Text4 = document.querySelector(".service2Text4");
    service2Text5 = document.querySelector(".service2Text5");
    service2Text6 = document.querySelector(".service2Text6");
    service2Text7 = document.querySelector(".service2Text7");

    lang = localStorage.getItem("lang") || "english";

const dataCompany = {
    english: {
        companyTitle2: "Trust, Confidenciality, Integrity",
        companyText1: "At our company, we take pride in our dedication to excellence and our proficiency in working with leading technology brands. ",
        companyText2: "Our commitment to staying at the forefront of innovation allows us to offer our clients cutting-edge solutions that drive success and growth. ",
    },
    português: {
        companyTitle2: "Confiança, Confidencialidade, Integridade",
        companyText1: "Na nossa empresa, temos orgulho da nossa dedicação e excelência em trabalhar com marcas líderes em tecnologia.",
        companyText2: "O nosso compromisso em permanecer na vanguarda da inovação permite-nos oferecer aos nossos clientes soluções que impulsionam o sucesso e o seu crescimento. ",
    }
}

const dataService1 = {
    english: {
        service1Text0: "At ENIGMA INFOSEC, We Offer the Following IT Services:",
        service1Text1: "System Administration: Managing and optimizing your IT infrastructure for smooth operations.",
        service1Text2: "Cloud Integration: Seamless integration with AWS, Azure, or Google Cloud for flexibility.",
        service1Text3: "Compliance Support: Navigating regulatory requirements to ensure industry standards are met.",
        service1Text4: "Disaster Recovery: Creating plans for quick recovery and minimal downtime.",
        service1Text5: "Virtualization: Maximizing resource utilization and reducing hardware costs.",
        service1Text6: "Consulting & Advisory: Expert advice on IT strategy and solutions.",
        service1Text7: "24/7 Support: Round-the-clock assistance for uninterrupted operations.",
        service1Text8: "Managed & Unmanaged Services: Comprehensive IT management or specific service offerings based on your needs."
    },
    português: {
        service1Text0: "Na ENIGMA INFOSEC, oferecemos os seguintes serviços de TI:",
        service1Text1: "Administração do sistema: gestão e otimização da sua infraestrutura de IT para operações com um bom funcionamento.",
        service1Text2: "Integração na Cloud: integração perfeita com AWS, Azure ou Google Cloud para flexibilidade.",
        service1Text3: "Compliance Support: Verificamos os requisitos regulatórios para garantir que os padrões do setor são atendidos.",
        service1Text4: "Disaster Recovery: Criação de planos para recuperação rápida e tempo de inatividade mínimo.",
        service1Text5: "Virtualização: Maximizar a utilização de recursos e reduzir os custos de hardware.",
        service1Text6: "Consultoria & Assessoria: Aconselhamento especializado em estratégias e soluções de IT.",
        service1Text7: "Suporte 24/7: Assistência 24 horas por dia para operações ininterruptas",
        service1Text8: "Serviços automatizados & não automatizados: gestão compreensiva de IT e ofertas de serviços específicos com base nas suas necessidades."
    }
}

const dataService2 = {
    english: {
        service2Text1: "At ENIGMA INFOSEC, We Offer the Following CSaaS Services:",
        service2Text2: "Vulnerability Management as a Service (VMaaS)",
        service2Text3: "Stay ahead with ENIGMA INFOSEC's VMaaS, offering continuous network and application scanning to identify and address vulnerabilities proactively. Benefit from expert analysis, comprehensive reporting, and customized solutions tailored to your organization's needs.",
        service2Text4: "Penetration Testing as a Service (PTaaS)",
        service2Text5: "Assess your security posture with Enigma InfoSec's PTaaS. Our certified penetration testers simulate real-world cyber-attacks, providing detailed reports with actionable recommendations to strengthen your defenses and ensure compliance with industry regulations.",
        service2Text6: "Cybersecurity Operations Center as a Service (SOCaaS)",
        service2Text7: "Gain 24/7 security monitoring and incident response with ENIGMA INFOSEC's SOCaaS. Our dedicated team monitors your environment around the clock, detects security incidents in real-time, and initiates rapid response measures to mitigate risks. Stay informed with actionable threat intelligence insights and ensure regulatory compliance with comprehensive reporting."
    },
    português: {
        service2Text1: "Na ENIGMA INFOSEC, oferecemos os seguintes serviços CSaaS:",
        service2Text2: "Vulnerability Management as a Service (VMaaS)",
        service2Text3: "Fique à frente com o servico VMaaS da nossa empresa, que oferece monitorização contínua de redes e aplicativos para identificar e resolver vulnerabilidades de forma proativa. Beneficie-se de análises especializadas, relatórios abrangentes e soluções personalizadas adaptadas às necessidades da sua organização.",
        service2Text4: "Penetration Testing as a Service (PTaaS)",
        service2Text5: "Avalie sua postura de segurança com o nosso serviço PTaaS. Os nossos técnicos certificados simulam ataques cibernéticos, fornecendo relatórios detalhados com recomendações práticas para fortalecer suas defesas e garantir a conformidade com as regulamentações do setor.",
        service2Text6: "Cybersecurity Operations Center as a Service (SOCaaS)",
        service2Text7: "Obtenha monitorização de segurança 24 horas por dia, 7 dias por semana e resposta a incidentes com o SOCaaS da nossa empresa. A nossa equipa dedicada monitora seu ambiente 24 horas por dia, detecta incidentes de segurança em tempo real e inicia medidas de resposta rápida para mitigar riscos. Mantenha-se informado com insights acionáveis de inteligência contra ameaças e garanta a conformidade regulatória com relatórios abrangentes."
    }
}

changeCompanyLang(lang, companyTitle2, companyText1, companyText2, companyText3);
function changeCompanyLang(lang, companyTitle2, companyText1, companyText2, companyText3) {
    companyTitle2.textContent = dataCompany[lang].companyTitle2
    companyTitle2Mobile.textContent = dataCompany[lang].companyTitle2
    companyText1.textContent = dataCompany[lang].companyText1
    companyText2.textContent = dataCompany[lang].companyText2
    companyText3.textContent = dataCompany[lang].companyText3
}

changeService1Lang(lang, service1Text0, service1Text1, service1Text2, service1Text3, service1Text4, service1Text5, service1Text6, service1Text7, service1Text8);
function changeService1Lang(lang, service1Text0, service1Text1, service1Text2, service1Text3, service1Text4, 
    service1Text5, service1Text6, service1Text7, service1Text8)
    {
    service1Text0.textContent = dataService1[lang].service1Text0
    service1Text1.textContent = dataService1[lang].service1Text1
    service1Text2.textContent = dataService1[lang].service1Text2
    service1Text3.textContent = dataService1[lang].service1Text3
    service1Text4.textContent = dataService1[lang].service1Text4
    service1Text5.textContent = dataService1[lang].service1Text5
    service1Text6.textContent = dataService1[lang].service1Text6
    service1Text7.textContent = dataService1[lang].service1Text7
    service1Text8.textContent = dataService1[lang].service1Text8
}


changeService2Lang(lang, service2Text1, service2Text2, service2Text3, service2Text4, service2Text5, service2Text6, service2Text7);
function changeService2Lang(lang, service2Text1, service2Text2, service2Text3, service2Text4, service2Text5, service2Text6, service2Text7){
    service2Text1.textContent = dataService2[lang].service2Text1
    service2Text2.textContent = dataService2[lang].service2Text2
    service2Text3.textContent = dataService2[lang].service2Text3
    service2Text4.textContent = dataService2[lang].service2Text4
    service2Text5.textContent = dataService2[lang].service2Text5
    service2Text6.textContent = dataService2[lang].service2Text6
    service2Text7.textContent = dataService2[lang].service2Text7
}

