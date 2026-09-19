# Backend

FastAPI service for Neurativo. See the [root README](../README.md) for what the product does and how the pieces fit together.

```bash
cd backend
python -m venv venv
# Windows
.\venv\Scripts\activate
pip install -r requirements.txt
copy .env.example .env   # then fill in your own keys
uvicorn app.main:app --reload --port 8000
```

Docker (what Railway runs) listens on port **8080**. Local uvicorn uses **8000**.

API routes live under `/api/v1`. Docs (`/docs`) are off when `ENVIRONMENT=production`.
