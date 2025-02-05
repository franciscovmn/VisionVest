import { tiposCalculadora } from './cards-calculadoras/dataCalculadora.js';
import { calculadoraCards } from './cards-calculadoras/calculadoraCards.js';
import { perfilCards } from './cards-perfil/perfilCards.js';
import { perfis } from './cards-perfil/dataPerfis.js';
import { carregarFooter } from "./footer.js";
import { carregarHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
    if (!window.location.pathname.includes("qualseuperfiil.html")) {
        carregarHeader();
    }
    carregarFooter();
    
    const calculadora = document.querySelector('.calculadoras');
    const perfisinvestimento = document.querySelector('.perfis');

    if (calculadora) {
        calculadora.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6');
        calculadora.innerHTML = tiposCalculadora.map((tiposcalc) => calculadoraCards(tiposcalc)).join('');
    }

    if (perfisinvestimento) {
        perfisinvestimento.innerHTML = perfis.map((tiposperfil) => perfilCards(tiposperfil)).join('');
    }

    iniciarSistemaDeLogin();
});


function iniciarSistemaDeLogin() {
    const loginModal = document.querySelector("#loginModal");
    const registerModal = document.querySelector("#registerModal");
    const loginButton = document.querySelector("#loginButton");
    const logoutButton = document.querySelector("#logoutButton");
    const usernameDisplay = document.querySelector("#usernameDisplay");

    let loggedInUser = JSON.parse(localStorage.getItem("loggedUser")) || null;

    if (loggedInUser) {
        atualizarHeaderComUsuario(loggedInUser);
    }

    if (loginButton) {
        loginButton.addEventListener("click", () => {
            loginModal.style.display = "flex";
        });
    }

    document.querySelector("#loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.querySelector("#loginUsername").value;
        const password = document.querySelector("#loginPassword").value;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((u) => u.name === username && u.password === password);

        if (user) {
            localStorage.setItem("loggedUser", JSON.stringify(user));
            atualizarHeaderComUsuario(user);
            loginModal.style.display = "none";
        } else {
            alert("Usuário ou senha inválidos!");
        }
    });

    document.querySelector("#registerForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.querySelector("#registerName").value;
        const phone = document.querySelector("#registerPhone").value;
        const email = document.querySelector("#registerEmail").value;
        const password = document.querySelector("#registerPassword").value;

        const users = JSON.parse(localStorage.getItem("users") || "[]");

        if (users.some((u) => u.name === name || u.email === email)) {
            alert("Nome de usuário ou e-mail já cadastrados!");
            return;
        }

        const newUser = { name, phone, email, password };
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        alert("Cadastro realizado com sucesso! Agora faça login.");
        registerModal.style.display = "none";
    });

    if (logoutButton) {
        logoutButton.addEventListener("click", () => {
            localStorage.removeItem("loggedUser");
            atualizarHeaderComUsuario(null);
        });
    }
}

function atualizarHeaderComUsuario(user) {
    const loginButton = document.querySelector("#loginButton");
    const userDropdown = document.querySelector("#userDropdown");
    const usernameDisplay = document.querySelector("#usernameDisplay");

    if (user) {
        loginButton.style.display = "none";
        userDropdown.style.display = "block";
        usernameDisplay.textContent = user.name;
    } else {
        loginButton.style.display = "block";
        userDropdown.style.display = "none";
    }
}
