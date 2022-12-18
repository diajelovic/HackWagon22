import uvicorn
import os
from fastapi import FastAPI

app = FastAPI()

@app.get('/')
def index():
    return {"message":"Hello1"}

@app.get('/{name}')
def get_name(name: str):
    return {"message" : f'Hello, {name}'}

if __name__ == "__main__":
    uvicorn.run(app, host='0.0.0.0', port=int(os.getenv('PORT')))

