function loadTradingViewWidget() {
    // Evita carregar o widget mais de uma vez
    if (document.getElementById("tradingview-widget-script")) return;

    const script = document.createElement("script");
    script.id = "tradingview-widget-script"; // Evita múltiplas adições
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "symbols": [
            { "proName": "FOREXCOM:SPXUSD", "title": "S&P 500 Index" },
            { "proName": "FOREXCOM:NSXUSD", "title": "US 100 Cash CFD" },
            { "proName": "FX_IDC:EURUSD", "title": "EUR to USD" },
            { "proName": "BITSTAMP:BTCUSD", "title": "Bitcoin" },
            { "proName": "BITSTAMP:ETHUSD", "title": "Ethereum" }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "en"
    }`;

    const externalScript = document.createElement("script");
    externalScript.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    externalScript.async = true;

    // Insere o script dentro do widget container
    const container = document.querySelector(".tradingview-widget-container__widget");
    if (container) {
        container.appendChild(script);
        container.appendChild(externalScript);
    } else {
        console.error("Elemento .tradingview-widget-container__widget não encontrado.");
    }
}

// Aguarda o carregamento do DOM antes de rodar o script
document.addEventListener("DOMContentLoaded", loadTradingViewWidget);
