const { createApp } = Vue

createApp({
    data() {
        return {
            initialAmount: 0,
            monthlyAmount: 0,
            period: 0,
            periodType: 'months',
            selicRate: 0.135,
            savingsRate: 0.069,
            selicAmount: 0,
            savingsAmount: 0,
            difference: 0,
            monthlyResults: [],
            showResults: false
        }
    },
    computed: {
        isValidForm() {
            return this.initialAmount > 0 && this.monthlyAmount > 0 && this.period > 0;
        },
        calculatedMonths() {
            return this.periodType === 'years' ? this.period * 12 : this.period;
        }
    },
    methods: {
        calculate() {
            if (!this.isValidForm) {
                alert('Por favor, preencha todos os campos antes de calcular');
                return;
            }

            this.showResults = true;
            this.monthlyResults = []
            let currentSelicAmount = this.initialAmount
            let currentSavingsAmount = this.initialAmount
            
            for (let i = 0; i < this.calculatedMonths; i++) {
                currentSelicAmount = currentSelicAmount * (1 + this.selicRate/12) + this.monthlyAmount
                currentSavingsAmount = currentSavingsAmount * (1 + this.savingsRate/12) + this.monthlyAmount
                
                this.monthlyResults.push({
                    selic: currentSelicAmount,
                    savings: currentSavingsAmount
                })
            }
            
            this.selicAmount = currentSelicAmount
            this.savingsAmount = currentSavingsAmount
            this.difference = currentSelicAmount - currentSavingsAmount
        },
        clear() {
            this.initialAmount = 0
            this.monthlyAmount = 0
            this.period = 0
            this.periodType = 'months'
            this.selicAmount = 0
            this.savingsAmount = 0
            this.difference = 0
            this.showResults = false
            this.monthlyResults = []
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(value)
        }
    }
}).mount('#app')