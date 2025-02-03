import { SDK } from "https://webdraw.com/webdraw-sdk@v1";

        const { createApp } = Vue;

        createApp({
            data() {
                return {
                    questions: [
                        {
                            text: "Qual é seu objetivo principal ao investir?",
                            options: [
                                { text: "Preservar meu patrimônio com segurança", value: "conservador" },
                                { text: "Crescimento moderado com riscos controlados", value: "moderado" },
                                { text: "Maximizar retornos, aceitando riscos maiores", value: "agressivo" }
                            ]
                        },
                        {
                            text: "Por quanto tempo pretende manter seus investimentos?",
                            options: [
                                { text: "Menos de 2 anos", value: "conservador" },
                                { text: "Entre 2 e 5 anos", value: "moderado" },
                                { text: "Mais de 5 anos", value: "agressivo" }
                            ]
                        },
                        {
                            text: "Como você reage a perdas temporárias?",
                            options: [
                                { text: "Não aceito perdas", value: "conservador" },
                                { text: "Aceito pequenas oscilações", value: "moderado" },
                                { text: "Entendo que são naturais do mercado", value: "agressivo" }
                            ]
                        }
                    ],
                    answers: [],
                    profile: null,
                    profileDescription: ""
                }
            },
            methods: {
                async calculateProfile() {
                    if (this.answers.length < this.questions.length) {
                        alert("Por favor, responda todas as questões");
                        return;
                    }

                    const counts = this.answers.reduce((acc, val) => {
                        acc[val] = (acc[val] || 0) + 1;
                        return acc;
                    }, {});

                    const profile = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
                    this.profile = profile.charAt(0).toUpperCase() + profile.slice(1);

                    const sdk = SDK;
                    const response = await sdk.fetch("https://webdraw.com/api/generate?task=text", {
                        method: "POST",
                        body: JSON.stringify({
                            model: "anthropic:claude-3-5-haiku-20241022",
                            messages: [{
                                role: "user",
                                content: `Gere uma descrição concisa (máximo 2 frases) para um perfil de investidor ${profile}.`
                            }]
                        })
                    });

                    const data = JSON.parse(response.body);
                    this.profileDescription = data.text;
                }
            }
        }).mount('#app')