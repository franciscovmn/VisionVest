export function calculadoraCards(tiposcalc) {
    return `
      <a href="${tiposcalc.link}" class="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex items-start gap-4">
        <svg class="w-8 h-8 ${tiposcalc.iconColor}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${tiposcalc.iconPath}"></path>
        </svg>
        <div>
          <h2 class="text-xl font-semibold mb-4">${tiposcalc.title}</h2>
          <p class="text-gray-600">${tiposcalc.description}</p>
        </div>
      </a>
    `;
}
