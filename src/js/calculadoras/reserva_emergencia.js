const { createApp } = Vue

createApp({
    data() {
        return {
            employmentType: 'clt',
            salary: 0,
            fixedCost: 0,
            savingsPercentage: 0,
            showResults: false,
            emergencyFund: 0,
            monthsToComplete: 0,
            multipliers: {
                'public': 6,
                'clt': 8,
                'autonomous': 12
            }
        }
    },
    computed: {
        isFormValid() {
            return this.salary > 0 && this.fixedCost > 0 && this.savingsPercentage > 0;
        }
    },
    methods: {
        calculate() {
            // Calculate emergency fund
            this.emergencyFund = this.fixedCost * this.multipliers[this.employmentType]

            // Calculate months to complete
            const monthlySavings = (this.salary * this.savingsPercentage) / 100
            this.monthsToComplete = monthlySavings > 0 
                ? Math.ceil(this.emergencyFund / monthlySavings)
                : Infinity

            this.showResults = true
        },
        clearForm() {
            this.salary = 0;
            this.fixedCost = 0;
            this.savingsPercentage = 0;
            this.showResults = false;
            this.emergencyFund = 0;
            this.monthsToComplete = 0;
        }
    }
}).mount('#app')