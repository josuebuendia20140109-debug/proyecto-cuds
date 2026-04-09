let chartInstance = null;

function actualizarGrafica() {
    const ctx = document.getElementById('Grafica').getContext('2d');

 

    const conteo = {};
    Grafica.forEach(registro => {
        conteo[registro] = (conteo[registro] || 0) + 1;
    });

    const etiquetas = Object.keys(conteo);
    const valores = Object.values(conteo);

    if (chartInstance) {
        chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: etiquetas,
            datasets: [{
                data: valores,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0']
            }]
        }
    });
}