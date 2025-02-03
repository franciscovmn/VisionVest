import { tiposCalculadora } from './cards-calculadoras/dataCalculadora.js';
import { calculadoraCards } from './cards-calculadoras/calculadoraCards.js';
import { perfilCards } from './cards-perfil/perfilCards.js';
import { perfis } from './cards-perfil/dataPerfis.js';
import { carregarFooter } from "./footer.js";
import { carregarHeader } from "./header.js";

document.addEventListener("DOMContentLoaded", () => {
    carregarHeader();
    carregarFooter();

    const calculadora = document.querySelector('.calculadoras');
    const perfisinvestimento = document.querySelector('.perfis');

    if (calculadora) {
        calculadora.classList.add('grid', 'grid-cols-1', 'md:grid-cols-2', 'gap-6');
        calculadora.innerHTML = tiposCalculadora.map((tiposcalc) => calculadoraCards(tiposcalc)).join('');
    }

    if (perfisinvestimento) {
        perfisinvestimento.innerHTML = perfis.map((tiposperfil) => perfilCards(tiposperfil)).join('');
    }
});