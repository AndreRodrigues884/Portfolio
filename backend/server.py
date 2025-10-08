# backend/app.py
from fastapi import FastAPI
from pydantic import BaseModel
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware
import os

# ======== Load personal data ========
csv_path = os.path.join(os.path.dirname(__file__), "personal_data.csv")
data = pd.read_csv(csv_path)
personal_info = dict(zip(data['topic'], data['content']))

# ======== Chatbot Function ========
def chatbot_response(user_input: str) -> str:
    user_input_lower = user_input.lower()
    
    keywords = {
    "hobbies": ["hobby", "hobbies", "interest", "interests", "passatempos", "interesses"],
    "childhood_dream": ["childhood", "childhood dream", "young", "infância", "sonho de criança"],
    "education": ["education", "study", "degree", "school", "college", "university", "educação", "estudo", "formação", "universidade", "curso"],
    "name": ["name", "who are you", "nome"],
    "age": ["age", "how old", "idade"],
    "favorite_movie": ["movie", "film", "favorite movie", "filme", "filme favorito"],
    "club": ["club", "football club", "team", "clube", "equipa", "time"],
    "favorite_book": ["book", "favorite book", "livro", "livro favorito"],
    "favorite_food": ["food", "favorite food", "comida", "comida favorita"],
    "favorite_language": ["language", "favorite language", "linguagem", "linguagem favorita", "programming language"],
    "favorite_frameworks": ["framework", "frameworks", "vue", "node", "framework favorita"],
    "projects": ["project", "projects", "projeto", "projetos", "portfolio"],
    "favorite_series": ["series", "tv show", "favorite series", "série", "série favorita"],
    "love_travel": ["travel", "trip", "viagem", "viajar", "destinos"],
    "favorite_band": ["band", "music", "favorite band", "música", "banda", "banda favorita"],
    "dream_job": ["dream job", "career goal", "objetivo de carreira", "trabalho dos sonhos"]
}

    templates = {
    "hobbies": "He loves {}.",
    "childhood_dream": "When he was a child, he dreamed of becoming a {}.",
    "education": "He is currently studying {}.",
    "name": "His name is {}.",
    "age": "He is {} years old.",
    "favorite_movie": "His favorite movies are {}.",
    "club": "He supports the football club {}.",
    "favorite_book": "His favorite book is {}.",
    "favorite_food": "His favorite food is {}.",
    "favorite_language": "His favorite programming language is {}.",
    "favorite_frameworks": "His favorite frameworks are {}.",
    "projects": "He has worked on the following projects: {}.",
    "favorite_series": "His favorite series is {}.",
    "love_travel": "He loves traveling.",
     "favorite_band": "His favorite band is {}.",
    "dream_job": "His dream job is {}."
}

    for key, words in keywords.items():
        for word in words:
            if word in user_input_lower:
                value = personal_info.get(key)
                if value:
                    return templates.get(key, "{}").format(value)
                else:
                    return "He hasn't talked to me about it yet :("
    return "He hasn't talked to me about it yet :("

# ======== FastAPI Setup ========
app = FastAPI()

# Enable CORS to allow frontend requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou coloque o domínio do seu frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# ======== Models ========
class Query(BaseModel):
    question: str

# ======== Endpoints ========
@app.get("/")
def root():
    return {"message": "Chatbot API is running!"}

@app.post("/chat")
def chat(query: Query):
    response = chatbot_response(query.question)
    return {"response": response}
