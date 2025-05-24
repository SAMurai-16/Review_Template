# AI Content Generator — Django Backend & React Frontend

This project implements an AI-powered content generation tool featuring:

- **Multi-step dynamic prompt creation** on the React frontend
- **Backend API** built with Django REST Framework
- **Integration with Google Gemini API** for text generation (non-streaming)
- **Content display in a rich text editor (TipTap)** on the frontend

---

## Features (Current Version)

- **Multi-step form UI:** Collects user input across several steps to build a rich prompt
- **Backend proxy API:** Receives prompts via POST, sends to Google Gemini API, and returns full generated content
- **Content rendering:** Output displayed inside a read-only TipTap editor

---

# Setup & Running the Project

### Prerequisites
- Python 3.x
- Node.js & npm
- Google Gemini API key with access to the generativelanguage API

### Backend Setup

1. Clone the repository and navigate to the backend folder:
   ```bash
   git clone https://github.com/SAMurai-16/Review_Template.git
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   pip install -r requirements.txt

   ```
3. Add your Gemini API key to your Django settings (settings.py):
   ```bash
   GEMINI_API_KEY = "<your_google_gemini_api_key>"
   ```

4. Run Django development server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the React App:
   ```bash
   npm start
   ```




 





