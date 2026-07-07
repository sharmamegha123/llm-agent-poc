import requests

response = requests.post(
    "http://localhost:3000/chat",
    json={
        "prompt": "What's the weather in Delhi?"
    }
)

print(response.json())