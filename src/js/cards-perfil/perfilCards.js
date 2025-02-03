export function perfilCards(tiposperfil) {
  return `
    <a href="${tiposperfil.link}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div>
          <h3 class="text-xl font-bold mb-4 text-center">${tiposperfil.title}</h3>
          <p class="text-gray-600 mb-4">${tiposperfil.description}</p>
        </div>
    </a>
  `;
}
