
# Journal App

A simple Journal App built using the MERN stack (MongoDB, Express.js, React, Node.js) with JWT-based authentication and MongoDB Atlas as the database. The app allows users to register, log in, and securely manage their journal entries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [How to Run](#how-to-run)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication using JWT (JSON Web Token)
- Password hashing with bcrypt for secure storage
- CRUD operations for journal entries
- Protected routes requiring JWT authentication
- Easy to set up and extend

## Technologies Used

- **Backend**: Node.js, Express.js, MongoDB Atlas
- **Authentication**: JWT (JSON Web Token), bcrypt.js
- **Database**: MongoDB Atlas
- **Frontend**: React (UI implementation can be extended)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/journal-app.git
cd journal-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up MongoDB Atlas

- Sign up or log in to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- Create a new cluster and obtain your MongoDB connection string.

### 4. Create a `.env` File

Create a `.env` file in the root directory and add the following variables:

```plaintext
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

Replace `your_mongo_connection_string` with your MongoDB URI and `your_jwt_secret` with a secure secret key for JWT.

### 5. Run the Application

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

## Project Structure

```
journal-app
├── models
│   ├── User.js
│   └── Journal.js
├── routes
│   ├── auth.js
│   └── journal.js
├── middleware
│   └── auth.js
├── server.js
├── .env
└── package.json
```

## Environment Variables

- `MONGO_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: Secret key for JWT
- `PORT`: Port on which the server will run

## API Endpoints

### Auth Routes

- **POST /api/auth/register**: Register a new user
- **POST /api/auth/login**: Login a user and return a JWT

### Journal Routes

- **POST /api/journal**: Create a new journal entry (protected route)
- **GET /api/journal**: Get all journal entries of the logged-in user (protected route)

## How to Run

1. Make sure you have Node.js and npm installed.
2. Follow the setup instructions to configure the project.
3. Use Postman or another API client to test the endpoints.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

