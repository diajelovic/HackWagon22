FROM python:3.9-alpine

RUN apk update && apk add cmake &&  pip install --upgrade pip
RUN pip install --no-cache-dir fastapi
RUN pip install --no-cache-dir "uvicorn[standard]"

WORKDIR /app

COPY . .

EXPOSE $PORT

CMD ["python", "./api.py" ]
