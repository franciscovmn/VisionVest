(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();const n=[{title:"Juros Compostos",description:"Calcule o efeito dos juros com o passar do tempo",link:"src/pages/calculadora_juroscompostos.html",iconColor:"text-blue-500",iconPath:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Reserva de Emergência",description:"Descubra em quanto tempo você pode construir uma reserva segura",link:"src/pages/calculadora_reserva_de_emergencia.html",iconColor:"text-green-500",iconPath:"M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"},{title:"Conversor de Criptomoedas",description:"Converta valores entre reais e criptomoedas",link:"src/pages/calculadora_conversor_cripto.html",iconColor:"text-yellow-500",iconPath:"M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{title:"Poupança x Selic",description:"Compare o rendimento entre poupança e taxa Selic",link:"src/pages/calculadora_poupança_selic.html",iconColor:"text-purple-500",iconPath:"M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"}];function l(e){return`
      <a href="${e.link}" class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4">
        <svg class="w-8 h-8 ${e.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${e.iconPath}"></path>
        </svg>
        <div>
          <h2 class="text-xl font-semibold mb-4">${e.title}</h2>
          <p class="text-gray-600">${e.description}</p>
        </div>
      </a>
    `}function c(e){return`
    <a href="${e.link}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-bold mb-4 text-center">${e.title}</h3>
          <p class="text-gray-600 mb-4">${e.description}</p>
        </div>
    </a>
  `}const d=[{title:"CONSERVADOR",description:"Prioriza a segurança e a estabilidade do capital investido, evitando grandes oscilações e aceitando retornos menores em troca de menor risco.",link:"src/pages/conservador.html"},{title:"MODERADO",description:"Busca um equilíbrio entre segurança e rentabilidade, aceitando certo nível de risco para obter melhores ganhos, sem abrir mão da proteção parcial do capital.",link:"src/pages/moderado.html"},{title:"AGRESSIVO",description:"Está disposto a assumir altos riscos em busca de maior rentabilidade, tolerando oscilações no curto prazo para alcançar ganhos expressivos no longo prazo.",link:"src/pages/agressivo.html"}];function m(){const e=document.createElement("footer");e.className="bg-green-600 text-white py-2 mt-auto",e.innerHTML=`
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
    `,document.body.appendChild(e)}function p(){const e=document.createElement("header");e.className="bg-green-600 text-white h-[20vh] flex items-center",e.innerHTML=`
        <nav class="h-16 flex items-center justify-between bg-green-700 px-4 w-full">
            <div class="h-full flex items-center">
                <a href="/" class="flex items-center">
                    <img src="/logo.png" alt="Logo" class="h-20 w-auto object-contain">
                    <h1 class="visionvest-title text-6xl lg:text-7xl mt-2">VISIONVEST</h1>
                </a>
            </div>

            <div class="hidden md:flex space-x-8">
                <a href="/#calculadoras" class="hover:text-green-200">Calculadoras</a>
                <a href="src/pages/qualseuperfil.html" class="hover:text-green-200">Descubra o seu perfil de Investimento</a>
            </div>
        </nav>
    `,document.body.prepend(e);const r=document.createElement("div");r.className="tradingview-widget-container h-[10vh] bg-white",r.innerHTML=`
        <div class="tradingview-widget-container__widget"></div>
        <script src="tradingview/tradingview-widget.js"><\/script>
    `,e.insertAdjacentElement("afterend",r)}document.addEventListener("DOMContentLoaded",()=>{p(),m();const e=document.querySelector(".calculadoras"),r=document.querySelector(".perfis");e&&(e.classList.add("grid","grid-cols-1","md:grid-cols-2","gap-6"),e.innerHTML=n.map(a=>l(a)).join("")),r&&(r.innerHTML=d.map(a=>c(a)).join(""))});
