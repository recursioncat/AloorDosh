from tensorflow.keras.preprocessing import image
import numpy as np

def processImage(path, size):
    img = image.load_img(path, target_size=(size, size))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array