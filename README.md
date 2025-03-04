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
  "password": "yourpassword (at least of length 8)"
}
```

**Response:**

```json
{
  "message": "User created successfully",
}
```

### 2. Signin

**Endpoint:** `POST /api/v1/signin`

**Description:** Logs in an existing user.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "yourpassword (at least of length 8)"
}
```

**Response:**

```json
{
  "message": "User signed in successfully",
}
```

### 3. Update Password

**Endpoint:** `PUT /api/v1/update`

**Description:** Updates the user's password.

**Request Body:**

```json
{
  "email": "user@example.com",
  "newPassword": "newpassword (at least of lenght 8)"
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

