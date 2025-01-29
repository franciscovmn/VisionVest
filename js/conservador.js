const { createApp } = Vue
            
createApp({
    data() {
        return {
            initialAmount: 0,
            monthlyAmount: 0,
            period: 0,
            periodType: 'months',
            savingsTotal: 0,
            selicTotal: 0,
            loading: false,
            showResults: false,
            isValid: false
        }
    },
    computed: {
        formattedSavingsTotal() {
            return this.formatCurrency(this.savingsTotal)
        },
        formattedSelicTotal() {
            return this.formatCurrency(this.selicTotal)
        },
        formattedDifference() {
            return this.formatCurrency(this.selicTotal - this.savingsTotal)
        }
    },
    methods: {
        calculate() {
            if (!this.initialAmount || !this.period || !this.monthlyAmount) {
                alert('Por favor, preencha todos os campos obrigatórios')
                return
            } else {
                this.isValid = true
            }

            const months = this.periodType === 'years' ? this.period * 12 : this.period
            const savingsRate = 0.0717 / 12 // 7.17% ao ano
            const selicRate = 0.105 / 12 // 10.5% ao ano

            this.savingsTotal = this.calculateTotal(this.initialAmount, this.monthlyAmount, months, savingsRate)
            this.selicTotal = this.calculateTotal(this.initialAmount, this.monthlyAmount, months, selicRate)
            this.showResults = true
        },
        calculateTotal(initial, monthly, months, rate) {
            let total = initial
            for (let i = 0; i < months; i++) {
                total = total * (1 + rate) + monthly
            }
            return total
        },
        clear() {
            this.initialAmount = 0
            this.monthlyAmount = 0
            this.period = 0
            this.savingsTotal = 0
            this.selicTotal = 0
            this.showResults = false
            this.isValid = false
        },
        formatCurrency(value) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(value)
        }
    }
}).mount('#app')