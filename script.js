async function predictStroke() {
    const age = document.getElementById('age').value;
    const hypertension = document.getElementById('hypertension').value;
    const heart_disease = document.getElementById('heart_disease').value;
    const avg_glucose_level = document.getElementById('avg_glucose_level').value;
    const bmi = document.getElementById('bmi').value;

    const response = await fetch('https://your-api-url/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            age: age,
            hypertension: hypertension,
            heart_disease: heart_disease,
            avg_glucose_level: avg_glucose_level,
            bmi: bmi
        })
    });

    const result = await response.json();

    // Display the result
    const resultDiv = document.getElementById('result');
    if (result.prediction === 1) {
        resultDiv.textContent = "High Stroke Risk";
        resultDiv.style.color = "red";
    } else {
        resultDiv.textContent = "Low Stroke Risk";
        resultDiv.style.color = "green";
    }
}
