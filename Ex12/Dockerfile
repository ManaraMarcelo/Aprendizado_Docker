# Dockerfile seguro e atualizado

FROM python:3.9-slim

RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y --no-install-recommends gcc \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN useradd -m appuser
USER appuser

WORKDIR /home/appuser/Ex12

COPY --chown=appuser:appuser requirements.txt .  
RUN pip install --no-cache-dir -r requirements.txt

COPY --chown=appuser:appuser . .
CMD ["python", "app.py"]
