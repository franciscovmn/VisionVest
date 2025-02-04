import { defineConfig } from 'vite';

export default defineConfig({
  base: '/visionvest',
  build: {
    rollupOptions: {
      input: {
        main: '/visionvest/index.html',
        agressivo: '/visionvest/src/pages/agressivo.html',
        conservador: '/visionvest/src/pages/conservador.html',
        moderado: '/visionvest/src/pages/moderado.html',
        qualseuperfil: '/visionvest/src/pages/qualseuperfil.html',
        calculadora_cripto: '/visionvest/src/pages/calculadora_conversor_cript.html',
        calculadora_reserva: '/visionvest/src/pages/calculadora_reserva_de_emergencia.html',
        calculadora_poupanca_selic: '/visionvest/src/pages/calculadora_poupança_selic.html',
        calculadora_juroscompostos: '/visionvest/src/pages/calculadora_juroscompostos.html'
      },
    }
  },
});