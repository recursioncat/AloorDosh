from tensorflow.keras.preprocessing import image
import numpy as np
import keras
import pickle

def processImage(path, size):
    img = image.load_img(path, target_size=(size, size))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array

def predictPotato(url):
    model = keras.models.load_model('Models/Potatoes.keras')
    image = processImage(url, 128)
    prediction = model.predict(image)

    with open('Labels/potato.label', 'rb') as file:
        labels = pickle.load(file)
    
    return str(labels[np.argmax(prediction)])

def predictTomato(url):
    model = keras.models.load_model('Models/Tomato.keras')
    image = processImage(url, 128)
    prediction = model.predict(image)

    with open('Labels/tomato.label', 'rb') as file:
        labels = pickle.load(file)
    
    return str(labels[np.argmax(prediction)])
