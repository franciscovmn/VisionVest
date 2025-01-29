import { getSDK } from "https://webdraw.com/webdraw-sdk";

const { createApp, ref, computed, onMounted } = Vue;

createApp({
    setup() {
        const email = ref('');
        const searchQuery = ref('');
        const allSections = ref([]); 

        onMounted(async () => {
            const sdk = await getSDK();
            allSections.value = document.querySelectorAll('section');
        });

        // Filtragem dinâmica de elementos (busca)
        const filteredContent = computed(() => {
            if (!searchQuery.value) {
                allSections.value.forEach(section => section.classList.remove('hidden'));
                return;
            }

            allSections.value.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (text.includes(searchQuery.value.toLowerCase())) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });

        const subscribeNewsletter = async () => {
            if (!email.value) return;
            email.value = '';
            alert('Obrigado por se inscrever!');
        };

        return {
            email,
            subscribeNewsletter,
            searchQuery,
            filteredContent
        };
    }
}).mount('body'); // Monte a aplicação no <body> para que funcione globalmente
