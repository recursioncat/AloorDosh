from flask import Flask, request, jsonify
from tensorflow import keras
from dependencies import processImage
import numpy as np
import pickle

app = Flask(__name__)


@app.route('/potato')
def potato():
    model = keras.models.load_model('Models/Potatoes.keras')
    data = request.get_json(force = True)
    url = data['url']
    
    image = processImage(url, 128)
    prediction = model.predict(image)
    
    with open('Labels/otato.label', 'rb') as file:
        labels = pickle.load(file)
    
    return str(labels[np.argmax(prediction)])
    
    
@app.route('/tomato')
def tomato():
    model = keras.models.load_model('Models/Tomato.keras')
    data = request.get_json(force = True)
    url = data['url']
    
    image = processImage(url, 128)
    prediction = model.predict(image)
    
    with open('Labels/tomato.label', 'rb') as file:
        labels = pickle.load(file)
    
    return str(labels[np.argmax(prediction)])
    

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8000, debug=True)
 