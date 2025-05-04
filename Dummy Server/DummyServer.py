from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image


app = Flask(__name__)
CORS(app)

@app.route('/dummyPred', methods=['POST'])
def DumPred():

    print(request.files)

    if 'image' not in request.files:

        print("No Image Uploaded")
        return(jsonify({'error':'No image uploaded'}), 400)
    file = request.files['image']

    try:
        image = Image.open(file.stream)
        # image.save('some.png')

        return jsonify({
            "Plant": "Tomato",
            "Disease": "Healthy",
            "Prediction": "98%"
        })
    
    except Exception as e:
        print("Second Exception")
        return(jsonify({"error":f"Error Reading Image ({str(e)})"}), 400)
    

app.run(debug=True)