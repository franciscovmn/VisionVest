const { createApp } = Vue

        createApp({
            data() {
                return {
                    aporteInicial: 0,
                    aporteMensal: 0,
                    taxaJuros: 0,
                    periodo: 0,
                    tipoTaxa: 'mensal',
                    tipoPeriodo: 'meses',
                    mostrarResultados: false,
                    resultados: {
                        valorTotalFinal: 0,
                        valorTotalInvestido: 0,
                        totalJuros: 0,
                        meses: []
                    }
                }
            },
            methods: {
                calcular() {
                    if (!this.aporteInicial || !this.aporteMensal || !this.taxaJuros || !this.periodo) {
                        return;
                    }

                    const periodoEmMeses = this.tipoPeriodo === 'anos' ? this.periodo * 12 : this.periodo
                    let totalAcumulado = this.aporteInicial
                    let totalInvestido = this.aporteInicial
                    this.resultados.meses = []

                    const taxaMensal = this.tipoTaxa === 'anual' 
                        ? (Math.pow(1 + this.taxaJuros/100, 1/12) - 1) * 100
                        : this.taxaJuros

                    for (let i = 0; i < periodoEmMeses; i++) {
                        const jurosDoMes = totalAcumulado * (taxaMensal / 100)
                        totalAcumulado += jurosDoMes + this.aporteMensal
                        totalInvestido += this.aporteMensal

                        this.resultados.meses.push({
                            totalInvestido: totalInvestido,
                            totalJuros: totalAcumulado - totalInvestido,
                            totalAcumulado: totalAcumulado
                        })
                    }

                    this.resultados.valorTotalFinal = totalAcumulado
                    this.resultados.valorTotalInvestido = totalInvestido
                    this.resultados.totalJuros = totalAcumulado - totalInvestido
                    this.mostrarResultados = true
                },
                limpar() {
                    this.aporteInicial = 0
                    this.aporteMensal = 0
                    this.taxaJuros = 0
                    this.periodo = 0
                    this.mostrarResultados = false
                },
                formatarMoeda(valor) {
                    return valor.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
                }
            }
        }).mount('#app')