from flask import Flask, request, jsonify
from flask_cors import CORS

import pandas as pd 
from io import StringIO
from analysis import get_analysis

app = Flask(__name__)
CORS(app)

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"


@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'})
    
    print("file: ", file)

    # Process the uploaded file
    data = file.read()

    # Convert bytes to string
    data_str = data.decode('utf-8')

    # Create a file-like object from the string
    file_obj = StringIO(data_str)

    df = pd.read_csv(file_obj)
    analysis = get_analysis(df)

    return jsonify({"msg" : "file uploaded successfully"})
