import { SDK } from "https://webdraw.com/webdraw-sdk@v1";
        
const { createApp } = Vue;

createApp({
    data() {
        return {
            initialAmount: 0,
            monthlyAmount: 0,
            interestRate: 0,
            interestPeriod: 'monthly',
            period: 0,
            periodType: 'months',
            showResults: false,
            totalInvested: 0,
            totalAmount: 0,
            totalInterest: 0,
            monthlyResults: [],
            sdk: null
        }
    },
    mounted() {
        this.sdk = SDK;
    },
    methods: {
        async calculate() {
            if (!this.initialAmount || !this.monthlyAmount || !this.interestRate || !this.period) {
                this.showResults = false;
                return;
            }

            const months = this.periodType === 'years' ? this.period * 12 : this.period;
            const rate = this.interestPeriod === 'yearly' ? 
                (Math.pow(1 + this.interestRate/100, 1/12) - 1) : 
                this.interestRate/100;

            let currentAmount = this.initialAmount;
            this.monthlyResults = [];
            this.totalInvested = this.initialAmount;

            for (let i = 1; i <= months; i++) {
                const monthInterest = currentAmount * rate;
                currentAmount += monthInterest + this.monthlyAmount;
                this.totalInvested += this.monthlyAmount;

                this.monthlyResults.push({
                    invested: this.totalInvested,
                    total: currentAmount,
                    interest: currentAmount - this.totalInvested
                });
            }

            this.totalAmount = currentAmount;
            this.totalInterest = this.totalAmount - this.totalInvested;
            this.showResults = true;
        },
        reset() {
            this.initialAmount = 0;
            this.monthlyAmount = 0;
            this.interestRate = 0;
            this.period = 0;
            this.showResults = false;
            this.monthlyResults = [];
        },
        formatCurrency(value) {
            return value.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        }
    }
}).mount('#app')