document.getElementById('calcular').addEventListener('click', function () {
    const capital = parseFloat(document.getElementById('capital').value);
    const aporte = parseFloat(document.getElementById('aporte').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tipoTaxa = document.getElementById('tipoTaxa').value;
    const periodo = parseFloat(document.getElementById('periodo').value);
    const tipoPeriodo = document.getElementById('tipoPeriodo').value;

    let taxaMensal;
    if (tipoTaxa === 'anual') {
        taxaMensal = taxa / 12 / 100;
    } else {
        taxaMensal = taxa / 100;
    }

    let totalMeses;
    if (tipoPeriodo === 'anos') {
        totalMeses = periodo * 12;
    } else {
        totalMeses = periodo;
    }

    let montanteAtual = capital;
    let totalInvestido = capital;
    let totalJurosAcumulados = 0;

    const labels = [];
    const dadosMontante = [];
    const dadosInvestido = [];
    const tabelaResultados = [];

    for (let i = 1; i <= totalMeses; i++) {
        const juros = montanteAtual * taxaMensal;
        montanteAtual += juros + aporte;
        totalInvestido += aporte;
        totalJurosAcumulados = montanteAtual - totalInvestido;

        labels.push(`Mês ${i}`);
        dadosMontante.push(montanteAtual);
        dadosInvestido.push(totalInvestido);

        tabelaResultados.push({
            mes: i,
            juros: juros.toFixed(2),
            totalInvestido: totalInvestido.toFixed(2),
            totalJuros: totalJurosAcumulados.toFixed(2),
            totalAcumulado: montanteAtual.toFixed(2),
        });
    }

    // Exibir os resultados no resumo
    document.getElementById('valorFinal').textContent = `R$ ${montanteAtual.toFixed(2)}`;
    document.getElementById('valorInvestido').textContent = `R$ ${totalInvestido.toFixed(2)}`;
    document.getElementById('totalJuros').textContent = `R$ ${totalJurosAcumulados.toFixed(2)}`;

    // Atualizar gráfico
    atualizarGrafico(labels, dadosMontante, dadosInvestido);

    // Preencher tabela
    preencherTabela(tabelaResultados);
});

document.getElementById('limpar').addEventListener('click', function () {
    document.getElementById('capital').value = '';
    document.getElementById('aporte').value = '';
    document.getElementById('taxa').value = '';
    document.getElementById('tipoTaxa').selectedIndex = 0;
    document.getElementById('periodo').value = '';
    document.getElementById('tipoPeriodo').selectedIndex = 0;
    document.getElementById('valorFinal').textContent = '-';
    document.getElementById('valorInvestido').textContent = '-';
    document.getElementById('totalJuros').textContent = '-';
    document.getElementById('tabelaBody').innerHTML = '';
    if (grafico) grafico.destroy();
});

// Função para criar o gráfico
let grafico;
function atualizarGrafico(labels, dadosMontante, dadosInvestido) {
    const ctx = document.getElementById('graficoEvolucao').getContext('2d');
    if (grafico) grafico.destroy();

    grafico = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Total Acumulado',
                    data: dadosMontante,
                    borderColor: 'red',
                    borderWidth: 2,
                    fill: false,
                },
                {
                    label: 'Total Investido',
                    data: dadosInvestido,
                    borderColor: 'black',
                    borderWidth: 2,
                    fill: false,
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: true },
            },
            scales: {
                x: { title: { display: true, text: 'Mês' } },
                y: { title: { display: true, text: 'Valor (R$)' } },
            },
        },
    });
}

// Função para preencher a tabela
function preencherTabela(resultados) {
    const tabelaBody = document.getElementById('tabelaBody');
    tabelaBody.innerHTML = '';
    resultados.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.mes}</td>
            <td>R$ ${row.juros}</td>
            <td>R$ ${row.totalInvestido}</td>
            <td>R$ ${row.totalJuros}</td>
            <td>R$ ${row.totalAcumulado}</td>
        `;
        tabelaBody.appendChild(tr);
    });
}
