export function carregarHeader() {
    const header = document.createElement("header");
    header.className = "bg-green-600 text-white h-[20vh] flex items-center";
    header.innerHTML = `
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
    `;

    document.body.prepend(header);

    const tradingViewContainer = document.createElement("div");
    tradingViewContainer.className = "tradingview-widget-container h-[10vh] bg-white";
    tradingViewContainer.innerHTML = `
        <div class="tradingview-widget-container__widget"></div>
        <script src="tradingview/tradingview-widget.js"></script>
    `;

    header.insertAdjacentElement("afterend", tradingViewContainer);
}
