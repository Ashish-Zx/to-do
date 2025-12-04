# ToDo Application

A full-stack ToDo application with React frontend and Node.js/Express backend.

## Project Structure

- **frontend/** - React application
- **Backend/** - Node.js/Express API with MongoDB

## Deployment

### Frontend (Vercel)
The frontend is deployed on Vercel and connects to the backend API.

### Backend
The backend needs to be deployed separately to a service that supports Node.js and MongoDB (e.g., Render, Railway, or Vercel Serverless Functions).

## Local Development

### Backend
```bash
cd Backend
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm start
```

## Environment Variables

Create a `.env` file in the Backend directory with your MongoDB connection string and other required variables.
