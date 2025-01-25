from flask import Flask, request, jsonify, redirect
from tensorflow import keras
from dependencies import *
import numpy as np
import pickle

app = Flask(__name__)

@app.route('/classifyUnknown')
def classify():
    model = keras.models.load_model('Models/Classifier.keras')
    possiblePredictions = ['Potato', 'Tomato']
    
    data = request.get_json(force = True)
    url = data['url']
    
    image = processImage(url, 128)
    prediction = possiblePredictions[np.argmax(model.predict(image))]

    # print('predict'+prediction)
    veggie = globals().get('predict'+prediction)

    result = {'vegType': prediction, 'disease': veggie(url)}
    return jsonify(result)



@app.route('/potato')
def potato():
    data = request.get_json(force = True)
    url = data['url']
    return predictPotato(url)
    
@app.route('/tomato')
def tomato():
    data = request.get_json(force = True)
    url = data['url']
    return predictTomato(url)
    

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
 