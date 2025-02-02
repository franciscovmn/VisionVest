(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const h=[{title:"Juros Compostos",description:"Calcule o efeito dos juros com o passar do tempo",link:"src/pages/calculadora_juroscompostos.html",iconColor:"text-blue-500",iconPath:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Reserva de Emergência",description:"Descubra em quanto tempo você pode construir uma reserva segura",link:"src/pages/calculadora_reserva_de_emergencia.html",iconColor:"text-green-500",iconPath:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"},{title:"Conversor de Criptomoedas",description:"Converta valores entre reais e criptomoedas",link:"src/pages/calculadora_conversor_cripto.html",iconColor:"text-yellow-500",iconPath:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Poupança x Selic",description:"Compare o rendimento entre poupança e taxa Selic",link:"src/pages/calculadora_poupança_selic.html",iconColor:"text-purple-500",iconPath:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}];function f(e){return`
      <a href="${e.link}" class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4">
        <svg class="w-8 h-8 ${e.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${e.iconPath}"></path>
        </svg>
        <div>
          <h2 class="text-xl font-semibold mb-4">${e.title}</h2>
          <p class="text-gray-600">${e.description}</p>
        </div>
      </a>
    `}function y(e){return`
    <a href="${e.link}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-bold mb-4 text-center">${e.title}</h3>
          <p class="text-gray-600 mb-4">${e.description}</p>
        </div>
    </a>
  `}const b=[{title:"CONSERVADOR",description:"Prioriza a segurança e a estabilidade do capital investido, evitando grandes oscilações e aceitando retornos menores em troca de menor risco.",link:"src/pages/conservador.html"},{title:"MODERADO",description:"Busca um equilíbrio entre segurança e rentabilidade, aceitando certo nível de risco para obter melhores ganhos, sem abrir mão da proteção parcial do capital.",link:"src/pages/moderado.html"},{title:"AGRESSIVO",description:"Está disposto a assumir altos riscos em busca de maior rentabilidade, tolerando oscilações no curto prazo para alcançar ganhos expressivos no longo prazo.",link:"src/pages/agressivo.html"}];function x(){const e=document.createElement("footer");e.className="bg-green-600 text-white py-2 mt-auto",e.innerHTML=`
        <div class="container mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">A EMPRESA PARA INVESTIMENTOS</h3>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Paraíba</h4>
                    <p>email@gmail.com</p>
                    <p>+55 (83)99999-9999</p>
                    <p>Endereço</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Rio de Janeiro</h4>
                    <p>email@gmail.com</p>
                    <p>+55 (21)99999-9999</p>
                    <p>Endereço</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Newsletter</h4>
                    <p class="mb-4">Quer garantir os melhores investimentos?</p>
                    <form id="newsletter-form" class="flex">
                        <input type="email" placeholder="Seu e-mail" class="p-2 rounded-l text-gray-800 w-full">
                        <button type="submit" class="bg-white text-green-600 px-4 py-2 rounded-r font-semibold hover:bg-green-100">
                            Assinar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `,document.body.appendChild(e)}const S="modulepreload",w=function(e){return"/"+e},p={},E=function(n,a,l){let t=Promise.resolve();if(a&&a.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),s=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));t=Promise.allSettled(a.map(i=>{if(i=w(i),i in p)return;p[i]=!0;const c=i.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${u}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":S,c||(d.as="script"),d.crossOrigin="",d.href=i,s&&d.setAttribute("nonce",s),document.head.appendChild(d),c)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${i}`)))})}))}function r(o){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o}return t.then(o=>{for(const s of o||[])s.status==="rejected"&&r(s.reason);return n().catch(r)})};function C(){const e=document.createElement("header");e.className="bg-green-600 text-white h-[20vh] flex items-center relative",e.innerHTML=`
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
        
    `,document.body.prepend(e),L()}function L(){const e=document.getElementById("userButton"),n=document.getElementById("userCard"),a=document.getElementById("userName"),l=document.getElementById("userEmail"),t=document.getElementById("userPhone"),r=document.getElementById("logoutButton"),o=localStorage.getItem("loggedInUser");if(o){const s=JSON.parse(localStorage.getItem(o));s&&(e.textContent=s.name,a.textContent=s.name,l.textContent=s.email,t.textContent=s.phone,e.addEventListener("click",()=>{n.classList.toggle("hidden")}),r.addEventListener("click",()=>{localStorage.removeItem("loggedInUser"),window.location.reload()}),document.addEventListener("click",i=>{!e.contains(i.target)&&!n.contains(i.target)&&n.classList.add("hidden")}))}else e.addEventListener("click",I)}function I(){E(()=>import("./login-CNX5RlD2.js"),[]).then(e=>{e.exibirTelaLogin()})}function P(){document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("tradingview-widget");if(e){const n=`
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                    <div class="tradingview-widget-copyright">
                        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
                            <span class="blue-text">Track all markets on TradingView</span>
                        </a>
                    </div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
                    {
                        "symbols": [
                            {
                                "proName": "FOREXCOM:SPXUSD",
                                "title": "S&P 500 Index"
                            },
                            {
                                "proName": "FOREXCOM:NSXUSD",
                                "title": "US 100 Cash CFD"
                            },
                            {
                                "proName": "FX_IDC:EURUSD",
                                "title": "EUR to USD"
                            },
                            {
                                "proName": "BITSTAMP:BTCUSD",
                                "title": "Bitcoin"
                            },
                            {
                                "proName": "BITSTAMP:ETHUSD",
                                "title": "Ethereum"
                            }
                        ],
                        "showSymbolLogo": true,
                        "isTransparent": false,
                        "displayMode": "adaptive",
                        "colorTheme": "light",
                        "locale": "en"
                    }
                    <\/script>
                </div>
            `;e.innerHTML=n}else console.error("Elemento com id 'tradingview-widget' não encontrado!")})}document.addEventListener("DOMContentLoaded",()=>{C(),x(),P();const e=document.querySelector(".calculadoras"),n=document.querySelector(".perfis");e&&(e.classList.add("grid","grid-cols-1","md:grid-cols-2","gap-6"),e.innerHTML=h.map(a=>f(a)).join("")),n&&(n.innerHTML=b.map(a=>y(a)).join("")),N()});function N(){const e=document.querySelector("#loginModal"),n=document.querySelector("#registerModal"),a=document.querySelector("#loginButton"),l=document.querySelector("#logoutButton");document.querySelector("#usernameDisplay");let t=JSON.parse(localStorage.getItem("loggedUser"))||null;t&&g(t),a&&a.addEventListener("click",()=>{e.style.display="flex"}),document.querySelector("#loginForm").addEventListener("submit",r=>{r.preventDefault();const o=document.querySelector("#loginUsername").value,s=document.querySelector("#loginPassword").value,c=JSON.parse(localStorage.getItem("users")||"[]").find(u=>u.name===o&&u.password===s);c?(localStorage.setItem("loggedUser",JSON.stringify(c)),g(c),e.style.display="none"):alert("Usuário ou senha inválidos!")}),document.querySelector("#registerForm").addEventListener("submit",r=>{r.preventDefault();const o=document.querySelector("#registerName").value,s=document.querySelector("#registerPhone").value,i=document.querySelector("#registerEmail").value,c=document.querySelector("#registerPassword").value,u=JSON.parse(localStorage.getItem("users")||"[]");if(u.some(m=>m.name===o||m.email===i)){alert("Nome de usuário ou e-mail já cadastrados!");return}const d={name:o,phone:s,email:i,password:c};u.push(d),localStorage.setItem("users",JSON.stringify(u)),alert("Cadastro realizado com sucesso! Agora faça login."),n.style.display="none"}),l&&l.addEventListener("click",()=>{localStorage.removeItem("loggedUser"),g(null)})}function g(e){const n=document.querySelector("#loginButton"),a=document.querySelector("#userDropdown"),l=document.querySelector("#usernameDisplay");e?(n.style.display="none",a.style.display="block",l.textContent=e.name):(n.style.display="block",a.style.display="none")}export{E as _};
