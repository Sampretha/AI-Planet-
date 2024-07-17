from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

OLLAMA_URL = os.getenv("OLLAMA_URL", "http://localhost:8000")

@app.route('/generate', methods=['POST'])
def generate_text():
    data = request.json
    prompt = data.get('prompt', '')

    response = requests.post(f"{OLLAMA_URL}/generate", json={"prompt": prompt})
    response_data = response.json()

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
