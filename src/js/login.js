export function exibirTelaLogin() {
    const loginModal = document.createElement("div");
    loginModal.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50";

    loginModal.innerHTML = `
        <div class="bg-white p-8 rounded shadow-md w-96 relative">
            <h2 class="text-xl font-bold mb-4 text-center">Login</h2>
            <form id="loginForm">
                <label class="block mb-2">Nome:</label>
                <input type="text" id="username" class="w-full p-2 border rounded mb-2" required>

                <label class="block mb-2">Senha:</label>
                <input type="password" id="password" class="w-full p-2 border rounded mb-2" required>

                <p id="errorMessage" class="text-red-600 text-sm text-center hidden mb-2"></p>

                <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Entrar</button>
            </form>

            <p class="mt-4 text-center">
                Não tem uma conta? <a href="#" id="registerLink" class="text-green-600 hover:underline">Cadastre-se</a>
            </p>

            <button id="backButton" class="mt-4 w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-600">Voltar para a Página Inicial</button>
        </div>
    `;

    document.body.appendChild(loginModal);

    document.getElementById("loginForm").addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const errorMessage = document.getElementById("errorMessage");

        const user = JSON.parse(localStorage.getItem(username));

        if (user && user.password === password) {
            localStorage.setItem("loggedInUser", username);
            document.body.removeChild(loginModal);
            window.location.reload();
        } else {
            errorMessage.textContent = "Nome ou senha incorretos.";
            errorMessage.classList.remove("hidden");
        }
    });

    document.getElementById("registerLink").addEventListener("click", () => {
        document.body.removeChild(loginModal);
        import("./register.js").then((module) => {
            module.exibirTelaCadastro();
        });
    });

    document.getElementById("backButton").addEventListener("click", () => {
        document.body.removeChild(loginModal);
    });
}
