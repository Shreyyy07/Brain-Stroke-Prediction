<h1>Project Overview</h1>
The Brain Stroke Prediction project aims to predict the likelihood of a brain stroke occurring based on a range of health and lifestyle factors. These factors include age, hypertension, heart disease, smoking, and diabetes. By leveraging machine learning algorithms, the project explores how these factors influence stroke risk and investigates the effectiveness of different predictive models.

<h2>Objectives</h2>
* Identify key risk factors: The project investigates the role of health conditions 
  (hypertension, heart disease, diabetes), lifestyle habits (smoking), and demographic factors 
  (age) in predicting the risk of a brain stroke.<br>
* Model building and evaluation: The project uses several machine learning models to predict 
  the likelihood of a stroke:<br>
- Hidden Markov Models (HMM): Used to capture sequential data and predict stroke risk over time.<br>
- Decision Trees (CART): A simple yet effective model to predict stroke risk based on the input 
  features.<br>
- Random Forests: An ensemble method used to improve prediction accuracy by combining multiple 
  decision trees.<br>
  
<h2>Dataset</h2>
The dataset used for this project contains medical and lifestyle data relevant to stroke prediction. It includes the following features:

- Age: The age of the individual.<br>
- Hypertension: Whether the individual has hypertension (0: No, 1: Yes).<br>
- Heart Disease: Whether the individual has heart disease (0: No, 1: Yes).<br>
- Smoking: Whether the individual smokes (0: No, 1: Yes).<br>
- Diabetes: Whether the individual has diabetes (0: No, 1: Yes).<br>
- Stroke: The target variable (0: No stroke, 1: Stroke).<br>

<h2>Models Used</h2>
1. Hidden Markov Models (HMM)
The HMM is used to model sequential data and predict the likelihood of a stroke over time, considering changes in health conditions.

2. Decision Trees (CART)
A classification algorithm that splits data into subsets based on feature values. It is simple, interpretable, and effective for stroke prediction.

3. Random Forests
An ensemble learning method that creates multiple decision trees and aggregates their predictions to improve the accuracy and robustness of the model.

<h2>Results & Evaluation</h2>
The models were evaluated based on their accuracy, precision, recall, and F1-score. The performance of each model was compared, and Random Forests showed the highest accuracy among all models.

<h2>Future Improvements</h2>
- Additional Features: Incorporating more features, such as family history, can improve the 
  accuracy of predictions.<br>
- Model Tuning: Hyperparameter tuning can be performed to further enhance model performance.<br>
- Deployment: The model can be deployed as a web application where users can input their 
  details and get a prediction on the likelihood of having a stroke.
