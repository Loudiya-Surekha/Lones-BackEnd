# Lones-BackEnd

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)
![Express](https://img.shields.io/badge/Express.js-4.x-blue)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## Project Overview
**Lones-BackEnd** is a Node.js/Express backend application that provides APIs for managing [your project functionality, e.g., users, authentication, etc.].  
It uses MongoDB as the database and includes features like authentication, routing, and middleware for secure operations.

---

## Features
- User authentication (signup, login, logout)
- Profile update functionality
- RESTful API routes
- Middleware for authentication and error handling
- Environment variable management with `.env`
- Clean project structure for scalability

---

## Folder Structure
Lones-Backend/
│
├─ config/ # Configuration files
├─ controllers/ # Route controllers
├─ middlewares/ # Express middlewares
├─ models/ # Database models
├─ routes/ # API route definitions
├─ node_modules/ # Installed dependencies (ignored in Git)
├─ server.js # Entry point of the backend
├─ package.json # Project metadata & dependencies
├─ package-lock.json # Lock file for npm
├─ .env # Environment variables (ignored in Git)
└─ README.md # Project documentation


---

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Loudiya-Surekha/Lones-BackEnd.git

cd Lones-BackEnd

npm install

PORT=5000
MONGO_URI=<your-mongodb-connection-string>
TWILIO_ACCOUNT_SID=<your-twilio-account-sid>
TWILIO_AUTH_TOKEN=<your-twilio-auth-token>
TWILIO_PHONE=<your-twilio-phone-number>

# Start server in development mode
npm run dev

# Start server in production mode
npm start
