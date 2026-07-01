# 🎨 TriageAI Frontend

React frontend for the TriageAI customer support dashboard.

---

# Overview

The frontend provides an intuitive dashboard for customer support agents to submit customer requests, visualize AI-generated analysis, monitor ticket statistics, and review previously analyzed tickets.

The application communicates with the Express backend through REST APIs.

---

# Features

- Customer message submission
- AI Analysis Dashboard
- Ticket Statistics
- Ticket History
- Ticket Filtering
- Human Review Indicators
- Confidence Visualization
- Loading & Empty States
- Responsive Layout

---

# Folder Structure

```text
src/
│
├── components/
│   ├── Layout/
│   ├── Triage/
│   └── UI/
│
├── hooks/
│
├── pages/
│
├── services/
│
├── constants/
│
├── utils/
│
├── App.jsx
└── main.jsx
```

---

# Component Overview

## Layout

Contains reusable layout components.

- Navbar

---

## Triage Components

Contains domain-specific UI.

- MessageForm
- ResultCard
- TicketHistory
- DashboardStats
- ConfidenceBar
- PriorityBadge

---

## UI Components

Reusable generic components.

- Button
- Card
- Loader

---

# Data Flow

```text
Customer Input

↓

MessageForm

↓

Axios Service

↓

Backend API

↓

AI Analysis

↓

Dashboard Update
```

---

# API Communication

All API requests are centralized inside

```
services/
```

This provides a single source of truth for backend communication.

---

# State Management

The application uses a custom React Hook.

```
useTriage()
```

Responsibilities

- Submit customer messages
- Store AI results
- Fetch ticket history
- Manage loading state
- Manage selected ticket

---

# Running

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# Future Improvements

- Authentication
- Charts
- Pagination
- Dark Mode
- Real-time Updates