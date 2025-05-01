import pickle
tomato = {0: 'Bacterial Spot', 1: 'Early Blight', 2: 'Late Blight', 3: 'Target Spot', 4: 'Yellow Leaf Curl Virus', 5: 'Mosaic Virus', 6: 'Healthy'}
with open('tomato.label', 'wb') as file:
    pickle.dump(tomato, file, pickle.HIGHEST_PROTOCOL)