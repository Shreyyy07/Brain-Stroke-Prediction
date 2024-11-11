from flask import Flask, request, jsonify
import joblib
import pickle
import numpy as np

app = Flask(__name__)
model = pickle.load(open('model.joblib', 'rb'))

# Load the trained model
model = joblib.load('model.joblib')

@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the request
    data = request.get_json()

    # Extract the features from the JSON request
    input_features = np.array(data["input_data"]).reshape(1, -1)

    # Make a prediction
    prediction = model.predict(age: age,
            hypertension: hypertension,
            heart_disease: heart_disease,
            avg_glucose_level: avg_glucose_level,
            bmi: bmi)

    # Return the prediction as JSON
    return jsonify({"prediction": int(prediction[0])})

if __name__ == '__main__':
    app.run(debug=True)
