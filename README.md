---
# Node.js REST API with MySQL & Swagger Documentation

This project is a simple RESTful API built with **Node.js**, **Express**, and **MySQL**. It includes **Swagger** integration for interactive API documentation.
---

## 🚀 Technologies Used

- **Node.js**
- **Express.js**
- **MySQL**
- **dotenv** – For environment variable management
- **swagger-ui-express** – For Swagger documentation UI
- **swagger-jsdoc** – To generate Swagger docs from JSDoc comments

---

## 📦 Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js (v16 or later)](https://nodejs.org/)
- [MySQL](https://www.mysql.com/)

---

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/trJoshuaCamon/tr-nodejs-express-activity
   cd <project-folder>
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and configure your MySQL credentials:

   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabasename
   ```

4. **Set up your MySQL database**  
   Create the necessary tables to support user data. Example:
   ```sql
   CREATE TABLE users (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     email VARCHAR(100)
   );
   ```

---

## ▶️ Running the App

To start the server, run:

```bash
node index.js
```

By default, the app runs on:  
`http://localhost:3000`

---

## 📖 API Documentation

### Swagger UI

Access the interactive Swagger docs at:  
📍 `http://localhost:3000/api-docs`

### Sample API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/users`     | Get all users     |
| GET    | `/api/users/:id` | Get user by ID    |
| POST   | `/api/users`     | Create a new user |
| PUT    | `/api/users/:id` | Update user by ID |

---

## 🧪 Testing with Postman

You can use [Postman](https://www.postman.com/) or any API client to test these endpoints.

**Sample POST Request:**

```
POST /api/users
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

## 📂 Project Structure

```
├── GET_all_user.js
├── GET_user.js
├── POST_user.js
├── PUT_user.js
├── db-mysql.js
├── index.js
├── swagger.js
├── package.json
└── .env
```

---

## 📄 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---
