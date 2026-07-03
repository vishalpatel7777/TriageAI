# ⚙️ TriageAI Backend

Express backend powering the TriageAI platform.

The backend exposes REST APIs, communicates with Google Gemini, validates AI responses, stores structured tickets inside MongoDB, and provides ticket retrieval endpoints.

---

# Architecture

```text
Express

↓

Routes

↓

Controllers

↓

Services

↓

Repository

↓

Prisma

↓

MongoDB
```

---

# Folder Structure

```text
src/

config/
controllers/
middleware/
prompts/
repositories/
routes/
schemas/
services/
utils/

app.js
server.js
```

---

# Folder Responsibilities

## config/

Configuration files.

Examples

- Gemini Client
- Prisma Client

---

## controllers/

Receives HTTP requests and returns responses.

Responsibilities

- Request parsing
- Response formatting
- Error handling

---

## routes/

Defines REST API endpoints.

Current routes

- POST /triage
- GET /triage
- GET /triage/:id
- GET /health

---

## services/

Contains business logic.

Responsibilities

- Prompt generation
- AI communication
- Retry logic
- Response parsing

---

## repositories/

Database access layer.

Responsibilities

- Create Ticket
- Fetch Tickets
- Fetch Ticket by ID

Separating persistence from controllers improves maintainability.

---

## prompts/

Contains the system prompt used by Google Gemini.

Prompt engineering is isolated from business logic.

---

## middleware/

Reusable Express middleware.

Examples

- Global Error Handler

---

## utils/

Reusable utilities.

Examples

- ApiResponse
- ApiError
- asyncHandler

---

# AI Workflow

```text
Customer Message

↓

System Prompt

↓

Google Gemini

↓

JSON Extraction

↓

Zod Validation

↓

Repository

↓

MongoDB
```

---

# REST API

## POST

```
/api/v1/triage
```

Analyzes a customer message.

Returns

- Category
- Priority
- Summary
- Suggested Action
- Human Review
- Confidence

---

## GET

```
/api/v1/triage
```

Returns all analyzed tickets.

---

## GET

```
/api/v1/triage/:id
```

Returns a specific ticket.

---

## GET

```
/health
```

Returns server health.

---

# Security

Helmet

Adds secure HTTP headers.

---

CORS

Allows frontend-backend communication.

---

Morgan

Logs incoming HTTP requests.

---

Zod

Validates both requests and AI responses.

---

# Database

MongoDB Atlas

↓

Prisma ORM

↓

Ticket Repository

---

# Retry Strategy

Google Gemini occasionally returns temporary 503 responses.

The backend retries AI requests before returning an error to the client.

This improves reliability during transient service interruptions.

---

# Environment Variables

```env
PORT=5000

DATABASE_URL=

GEMINI_API_KEY=
```

---

# Running

Install dependencies

```bash
npm install
```

Run

```bash
npm run dev
```

---

# Future Improvements

- JWT Authentication
- RBAC
- Docker
- Redis
- Rate Limiting
- Unit Testing
- CI/CD