function calculateArbitrage() {
    const odds1 = parseFloat(document.getElementById('odds1').value);
    const oddsDraw = parseFloat(document.getElementById('oddsDraw').value);
    const odds2 = parseFloat(document.getElementById('odds2').value);

    if (odds1 <= 0 || oddsDraw <= 0 || odds2 <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    const totalInvestment = 100; // Defina o valor total que você deseja investir (pode ser alterado conforme sua preferência)
    const totalOdds = 1 / odds1 + 1 / oddsDraw + 1 / odds2;
    const betAmount1 = (totalInvestment / (odds1 * totalOdds)).toFixed(2);
    const betAmountDraw = (totalInvestment / (oddsDraw * totalOdds)).toFixed(2);
    const betAmount2 = (totalInvestment / (odds2 * totalOdds)).toFixed(2);

    document.getElementById('betAmount1').textContent = betAmount1;
    document.getElementById('betAmountDraw').textContent = betAmountDraw;
    document.getElementById('betAmount2').textContent = betAmount2;
    document.getElementById('result').classList.remove('hidden');
}
