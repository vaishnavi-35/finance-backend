# Finance Data Processing and Access Control Backend

## Project Overview

This project is a backend system developed for a finance dashboard application. It enables users to manage financial records such as income and expenses while ensuring proper access control based on user roles.

The system is designed with a modular and scalable architecture, focusing on clarity, maintainability, and correct implementation of backend logic.

---

## Tech Stack

- Node.js  
- Express.js  
- MongoDB with Mongoose  
- JSON Web Token (JWT) for authentication  

---

## User Roles and Access Control

The application supports role-based access control with the following roles:

- Viewer  
  Can only view financial data  

- Analyst  
  Can view records and access summary insights  

- Admin  
  Has full access to create, manage, and delete records  

---

## Features

- User registration and login  
- JWT-based authentication  
- Role-based authorization  
- Create financial records  
- View financial records  
- Delete records  
- Dashboard summary including total income, expenses, and net balance  
- Basic validation and error handling  

---

## API Endpoints

### Authentication

- POST /api/users/register  
  Register a new user  

- POST /api/users/login  
  Authenticate user and return token  

---

### Financial Records

- POST /api/records  
  Create a new financial record (Admin only)  

- GET /api/records  
  Retrieve all records for the logged-in user  

- DELETE /api/records/:id  
  Delete a record (Admin only)  

- GET /api/records/summary  
  Retrieve summary data including income, expense, and balance  

---

## API Testing

All endpoints have been tested using Postman. Authentication flow and role-based restrictions have been verified through multiple test cases.

---

## How to Run the Project

1. Clone the repository

   git clone https://github.com/vaishnavi-35/finance-backend.git

2. Navigate to the project folder

   cd finance-backend

3. Install dependencies

   npm install

4. Create a .env file in the root directory and add:

   MONGO_URI=your_mongodb_connection  
   JWT_SECRET=your_secret_key  

5. Start the server

   npm run dev

---

## Assumptions

- User roles are predefined and assigned during registration  
- Each financial record is linked to a specific user  
- Authentication is handled using JWT tokens  

---

## Security Notes

- Sensitive data such as database credentials and secret keys are stored in environment variables  
- The .env file is not included in the repository  
- A .env.example file can be used as a reference for setup  

---

## Design Approach

The backend is structured using a modular approach:

- Controllers handle business logic  
- Models define database schemas  
- Routes manage API endpoints  
- Middleware is used for authentication and authorization  

This structure improves readability, scalability, and maintainability of the application.

---

## Author

Vaishnavi Deshmukh
