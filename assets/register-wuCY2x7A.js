const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-BGFLMTvZ.js","assets/index-BdlPKhwb.js","assets/index-CEbEv4QQ.css"])))=>i.map(i=>d[i]);
import{_ as x}from"./index-BdlPKhwb.js";function w(){const t=document.createElement("div");t.className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",t.innerHTML=`
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
    `,document.body.appendChild(t),document.getElementById("registerForm").addEventListener("submit",m=>{m.preventDefault();const r=document.getElementById("registerName").value,n=document.getElementById("registerEmail").value,c=document.getElementById("registerBirthdate").value,u=document.getElementById("registerPhone").value,o=document.getElementById("registerPassword").value,e=document.getElementById("message"),l=JSON.parse(localStorage.getItem(r));if(l&&l.password===o){e.textContent="Senha já existe para esse usuário, crie outra senha",e.className="text-red-600 text-sm text-center mt-2",e.classList.remove("hidden");return}const s=new Date(c),a=new Date,d=a.getFullYear()-s.getFullYear(),i=a.getMonth()-s.getMonth(),b=a.getDate()-s.getDate();if(!(d>18||d===18&&(i>0||i===0&&b>=0))){e.textContent="Menor de 18 anos",e.className="text-red-600 text-sm text-center mt-2",e.classList.remove("hidden");return}if(!/^[^\s@]+@[^\s@]+\.(com|br)$/.test(n)){e.textContent="Formato incorreto",e.className="text-red-600 text-sm text-center mt-2",e.classList.remove("hidden");return}const g={name:r,email:n,phone:u,password:o};localStorage.setItem(r,JSON.stringify(g)),e.textContent="Cadastro realizado",e.className="text-green-600 text-sm text-center mt-2",e.classList.remove("hidden"),setTimeout(()=>{document.body.removeChild(t),x(()=>import("./login-BGFLMTvZ.js"),__vite__mapDeps([0,1,2])).then(p=>{p.exibirTelaLogin()})},2e3)}),document.getElementById("backToMenu").addEventListener("click",()=>{document.body.removeChild(t)})}export{w as exibirTelaCadastro};
