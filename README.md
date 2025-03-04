# Authentication System

This is a simple authentication system built using **Node.js**, **TypeScript**, **MongoDB**, and **Zod** for input validation. The system provides three authentication routes:

## Features

- User Signup
- User Signin
- Password Update
- Input Validation using Zod
- JWT Authentication

## API Endpoints

### 1. Signup

**Endpoint:** `POST /api/v1/signup`

**Description:** Creates a new user account.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "message": "User created successfully",
  "token": "your-jwt-token"
}
```

### 2. Signin

**Endpoint:** `POST /api/v1/signin`

**Description:** Logs in an existing user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

**Response:**

```json
{
  "message": "Login successful",
  "token": "your-jwt-token"
}
```

### 3. Update Password

**Endpoint:** `PUT /api/v1/update`

**Description:** Updates the user's password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "oldPassword": "oldpassword",
  "newPassword": "newpassword"
}
```

**Response:**

```json
{
  "message": "Password updated successfully"
}
```

## Deployment

🚀 The authentication system is live! You can test it here:

🔗 **Render Deployment:** https://authentication-system-oeqx.onrender.com


## Installation & Running Backend Locally

1. Clone the repository:

```sh
git clone <repository-url>
cd <repository-folder>
```

2. Clone the repository:

```sh
cd server
```

3. Install dependencies:

```sh
npm install
```

4. Add environment variables in a `.env` file:

```
MONGODB_URL=your-mongodb-connection-string
JWT_SECRET=your-jwt-secret
```

5. Build the project:

```sh
npm run build
```

6. Start the development server:

```sh
npm run dev
```

## Tech Stack

- **Node.js** - Runtime environment
- **TypeScript** - Typed JavaScript
- **MongoDB** - NoSQL database
- **Zod** - Input validation
- **JWT** - Authentication

## License

This project is licensed under the MIT License.

