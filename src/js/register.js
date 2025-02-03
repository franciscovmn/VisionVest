export function exibirTelaCadastro() {
    const registerModal = document.createElement("div");
    registerModal.className = "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50";

    registerModal.innerHTML = `
        <div class="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 class="text-xl font-bold mb-4 text-center">Cadastro</h2>
            <form id="registerForm">
                <label class="block mb-2">Nome:</label>
                <input type="text" id="registerName" class="w-full p-2 border rounded mb-2" required>

                <label class="block mb-2">Email:</label>
                <input type="email" id="registerEmail" class="w-full p-2 border rounded mb-2" required>

                <label class="block mb-2">Data de Nascimento:</label>
                <input type="date" id="registerBirthdate" class="w-full p-2 border rounded mb-2" required>

                <label class="block mb-2">Telefone:</label>
                <input type="tel" id="registerPhone" class="w-full p-2 border rounded mb-2" required>

                <label class="block mb-2">Senha:</label>
                <input type="password" id="registerPassword" class="w-full p-2 border rounded mb-2" required>

                <p id="message" class="text-center text-sm mt-2 hidden"></p>

                <button type="submit" class="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Cadastrar</button>
                <button type="button" id="backToMenu" class="w-full bg-gray-500 text-white py-2 rounded mt-2 hover:bg-gray-600">Voltar ao Menu</button>
            </form>
        </div>
    `;

    document.body.appendChild(registerModal);

    document.getElementById("registerForm").addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("registerName").value;
        const email = document.getElementById("registerEmail").value;
        const birthdate = document.getElementById("registerBirthdate").value;
        const phone = document.getElementById("registerPhone").value;
        const password = document.getElementById("registerPassword").value;
        const messageElement = document.getElementById("message");

        const existingUser = JSON.parse(localStorage.getItem(name));
        if (existingUser && existingUser.password === password) {
            messageElement.textContent = "Senha já existe para esse usuário, crie outra senha";
            messageElement.className = "text-red-600 text-sm text-center mt-2";
            messageElement.classList.remove("hidden");
            return;
        }

        const birthDate = new Date(birthdate);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        const isAdult = age > 18 || (age === 18 && (monthDiff > 0 || (monthDiff === 0 && dayDiff >= 0)));

        if (!isAdult) {
            messageElement.textContent = "Menor de 18 anos";
            messageElement.className = "text-red-600 text-sm text-center mt-2";
            messageElement.classList.remove("hidden");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.(com|br)$/;
        if (!emailRegex.test(email)) {
            messageElement.textContent = "Formato incorreto";
            messageElement.className = "text-red-600 text-sm text-center mt-2";
            messageElement.classList.remove("hidden");
            return;
        }

        const newUser = { name, email, phone, password };
        localStorage.setItem(name, JSON.stringify(newUser));

        messageElement.textContent = "Cadastro realizado";
        messageElement.className = "text-green-600 text-sm text-center mt-2";
        messageElement.classList.remove("hidden");

        setTimeout(() => {
            document.body.removeChild(registerModal);
            import("./login.js").then((module) => {
                module.exibirTelaLogin();
            });
        }, 2000);
    });

    document.getElementById("backToMenu").addEventListener("click", () => {
        document.body.removeChild(registerModal);
    });
}
