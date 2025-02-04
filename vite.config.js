import { defineConfig } from 'vite';

export default defineConfig({
  base: '/visionvest/', // Certifique-se de que a barra no final está correta
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        agressivo: 'src/pages/agressivo.html',
        conservador: 'src/pages/conservador.html',
        moderado: 'src/pages/moderado.html',
        qualseuperfil: 'src/pages/qualseuperfil.html',
        calculadora_cripto: 'src/pages/calculadora_conversor_cripto.html',
        calculadora_reserva: 'src/pages/calculadora_reserva_de_emergencia.html',
        calculadora_poupanca_selic: 'src/pages/calculadora_poupança_selic.html',
        calculadora_juroscompostos: 'src/pages/calculadora_juroscompostos.html'
      },
    }
  },
});
