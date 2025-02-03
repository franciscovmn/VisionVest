export function carregarFooter() {
    const footer = document.createElement("footer");
    footer.className = "bg-green-600 text-white py-2 mt-auto";
    footer.innerHTML = `
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
    `;
    document.body.appendChild(footer);
}
