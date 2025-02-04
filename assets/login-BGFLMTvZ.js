const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/register-wuCY2x7A.js","assets/index-BdlPKhwb.js","assets/index-CEbEv4QQ.css"])))=>i.map(i=>d[i]);
import{_ as a}from"./index-BdlPKhwb.js";function l(){const e=document.createElement("div");e.className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",e.innerHTML=`
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
    `,document.body.appendChild(e),document.getElementById("loginForm").addEventListener("submit",t=>{t.preventDefault();const o=document.getElementById("username").value,d=document.getElementById("password").value,n=document.getElementById("errorMessage"),r=JSON.parse(localStorage.getItem(o));r&&r.password===d?(localStorage.setItem("loggedInUser",o),document.body.removeChild(e),window.location.reload()):(n.textContent="Nome ou senha incorretos.",n.classList.remove("hidden"))}),document.getElementById("registerLink").addEventListener("click",()=>{document.body.removeChild(e),a(()=>import("./register-wuCY2x7A.js"),__vite__mapDeps([0,1,2])).then(t=>{t.exibirTelaCadastro()})}),document.getElementById("backButton").addEventListener("click",()=>{document.body.removeChild(e)})}export{l as exibirTelaLogin};
