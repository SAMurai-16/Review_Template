from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.conf import settings
import requests

@api_view(['POST'])
def generate_content(request):
    prompt = request.data.get('prompt')
    if not prompt:
        return Response({'error': 'Prompt is required'}, status=400)

    API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key={settings.GEMINI_API_KEY}"

    

    headers = {
        "Content-Type": "application/json"
    }


    payload = {
        "contents": [
            {
                "parts": [
                    {
                        "text": prompt
                    }
                ]
            }
        ]
    }

    try:
        response = requests.post(API_URL, headers=headers, json=payload)
        response.raise_for_status()
        data = response.json()


        generated_text = data.get("candidates", [{}])[0].get("content", "")

        return Response({'content': generated_text})

    except requests.exceptions.RequestException as e:
        return Response({'error': str(e)}, status=500)
