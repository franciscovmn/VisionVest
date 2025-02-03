export function carregarHeader() {
    const header = document.createElement("header");
    header.className = "bg-green-600 text-white h-[20vh] flex items-center relative";

    header.innerHTML = `
        <nav class="h-16 flex items-center justify-between bg-green-700 px-4 w-full">
            <div class="h-full flex items-center">
                <a href="/" class="flex items-center">
                    <img src="/logo.svg" alt="Logo" class="h-20 w-auto object-contain">
                    <h1 class="visionvest-title text-6xl lg:text-7xl mt-2">VISIONVEST</h1>
                </a>
            </div>

            <div class="hidden md:flex space-x-8 relative">
                <div class="hidden md:flex space-x-8 items-center relative">
                    <a href="#calculadoras" class="text-navbar hover:text-green-200">Calculadoras</a>
                    <a href="src/pages/qualseuperfil.html" class="text-navbar hover:text-green-200">Perfis de Investimento</a>
                    <button id="userButton" class="text-navbar bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-green-100">
                        Login
                    </button>
                </div>

                <div id="userCard" class="hidden absolute right-0 mt-14 w-48 bg-white rounded-lg shadow-xl py-2">
                    <div class="px-4 py-2 text-sm text-gray-700">
                        <p><strong>Nome:</strong> <span id="userName"></span></p>
                        <p><strong>Email:</strong> <span id="userEmail"></span></p>
                        <p><strong>Telefone:</strong> <span id="userPhone"></span></p>
                    </div>
                    <button id="logoutButton" class="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                        Sair
                    </button>
                </div>
            </div>
        </nav>
        
    `;

    document.body.prepend(header);
    verificarUsuario();
}

function verificarUsuario() {
    const userButton = document.getElementById("userButton");
    const userCard = document.getElementById("userCard");
    const userNameSpan = document.getElementById("userName");
    const userEmailSpan = document.getElementById("userEmail");
    const userPhoneSpan = document.getElementById("userPhone");
    const logoutButton = document.getElementById("logoutButton");

    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
        const userData = JSON.parse(localStorage.getItem(loggedInUser));

        if (userData) {
            userButton.textContent = userData.name;
            userNameSpan.textContent = userData.name;
            userEmailSpan.textContent = userData.email;
            userPhoneSpan.textContent = userData.phone;

            userButton.addEventListener("click", () => {
                userCard.classList.toggle("hidden");
            });

            logoutButton.addEventListener("click", () => {
                localStorage.removeItem("loggedInUser");
                window.location.reload();
            });

            document.addEventListener("click", (event) => {
                if (!userButton.contains(event.target) && !userCard.contains(event.target)) {
                    userCard.classList.add("hidden");
                }
            });
        }
    } else {
        userButton.addEventListener("click", exibirTelaLogin);
    }
}

function exibirTelaLogin() {
    import("./login.js").then((module) => {
        module.exibirTelaLogin();
    });
}
