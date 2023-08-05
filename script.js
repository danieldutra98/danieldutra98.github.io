function calculateArbitrage() {
    const odds1 = parseFloat(document.getElementById('odds1').value);
    const odds2 = parseFloat(document.getElementById('odds2').value);
    const betAmount1 = parseFloat(document.getElementById('betAmount1').value);

    if (odds1 <= 0 || odds2 <= 0 || betAmount1 <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const arbitrageAmount = (betAmount1 * odds1) / odds2;

    document.getElementById('arbitrageAmount').textContent = arbitrageAmount.toFixed(2);
    document.getElementById('result').classList.remove('hidden');
}
