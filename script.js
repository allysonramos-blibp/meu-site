// Botão "Voltar ao Topo"
window.addEventListener("scroll", function () {
    const backToTopButton = document.getElementById("backToTop");
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Rola suavemente para o topo quando o botão é clicado
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Exibe um alerta ao clicar nos links dos projetos
const projectLinks = document.querySelectorAll(".project-link");

projectLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Evita o redirecionamento imediato
        alert("Você está sendo redirecionado para o repositório do projeto!");
        window.location.href = link.href; // Redireciona após o alerta
    });
});

// Contador animado
const counter = document.getElementById("counter");
if (counter) {
    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 200;
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };
    updateCounter();
}

// Alternância de Modo Escuro/Claro
const toggleThemeButton = document.getElementById("toggleTheme");
toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    // Muda o texto do botão conforme o tema
    if (document.body.classList.contains("dark-mode")) {
        toggleThemeButton.textContent = "☀️ Modo Claro";
    } else {
        toggleThemeButton.textContent = "🌙 Modo Escuro";
    }
});

// Efeito Fade-in ao rolar a página
const fadeInElements = document.querySelectorAll(".fade-in");

const handleScroll = () => {
    fadeInElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            el.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", handleScroll);
handleScroll(); // Executa ao carregar a página

// Animação de Digitação Melhorada
document.addEventListener("DOMContentLoaded", function () {
    const text = "Bem-vindo ao meu portfólio!";
    const typingElement = document.getElementById("typing");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }

    typingElement.textContent = "";
    type();
});

// Mensagem de Boas-vindas Personalizada
const visitorName = prompt("Qual é o seu nome?");
if (visitorName) {
    alert(`Olá, ${visitorName}! Seja bem-vindo ao meu portfólio.`);
}
