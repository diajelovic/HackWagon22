import uvicorn
import os
from fastapi import FastAPI
from app import VagonModel, vagon

app = FastAPI()
model = VagonModel()

@app.post('/predict')
def predict(time: vagon):
    data = time.dict()
    prediction = model.predict_some(
        data['st_code_snd', 'st_code_snd']
    )

    return {
        'prediction': prediction
    }

    if __name__ == "__main__":
        uvicorn.run(app, host='0.0.0.0', port=int(os.getenv('PORT')))

