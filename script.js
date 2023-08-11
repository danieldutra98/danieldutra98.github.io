document.getElementById('calculateButton').addEventListener('click', calculateNextNumber);

function calculateNextNumber() {
    const sequenceInput = document.getElementById('sequenceInput').value;
    const numbers = sequenceInput.split(',').map(Number);

    if (numbers.length > 0) {
        const lastNumber = numbers[numbers.length - 1];
        const nextNumber = lastNumber + 1;

        document.getElementById('nextNumber').textContent = `Próximo Número: ${nextNumber}`;
    } else {
        document.getElementById('nextNumber').textContent = 'Insira uma sequência de números válida.';
    }
}
