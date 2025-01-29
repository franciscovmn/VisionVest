const { createApp } = Vue
            
createApp({
    data() {
        return {
            amount: 0,
            selectedCurrency: 'BRL',
            usdAmount: '0.00',
            brlAmount: '0.00',
            cryptoValues: {
                btc: '0.00000000',
                eth: '0.00000000',
                sol: '0.00000000',
                xrp: '0.00000000'
            },
            loading: false
        }
    },
    methods: {
        async convert() {
            if (!this.amount || this.amount <= 0) return
            
            this.loading = true
            const usdRate = 5.9;
            
            if (this.selectedCurrency === 'BRL') {
                this.usdAmount = (this.amount / usdRate).toFixed(2);
                this.convertAmount = this.amount;
            } else {
                this.brlAmount = (this.amount * usdRate).toFixed(2);
                this.convertAmount = this.amount * usdRate;
            }

            try {
                // Simulated conversion rates
                const rates = {
                    btc: 0.0000017,
                    eth: 0.00054,
                    sol: 0.0074,
                    xrp: 0.55
                }

                this.cryptoValues = {
                    btc: (this.convertAmount * rates.btc).toFixed(8),
                    eth: (this.convertAmount * rates.eth).toFixed(8),
                    sol: (this.convertAmount * rates.sol).toFixed(8),
                    xrp: (this.convertAmount * rates.xrp).toFixed(8)
                }
            } catch (error) {
                console.error('Error converting:', error)
            } finally {
                this.loading = false
            }
        }
    }
}).mount('#app')