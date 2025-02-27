const express = require("express");
const getAllUsers = require("./GET_all_user");
const getUserById = require("./GET_user");
const createUser = require("./POST_user");
const updateUser = require("./PUT_user");
const connection = require("./db-mysql");

const swaggerSetup = require("./swagger"); // Import Swagger setup

//
const app = express();
app.use(express.json());

// Setup Swagger
swaggerSetup(app);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *       500:
 *         description: Failed to fetch users
 */

// Route to get all users
app.get("/api/users", (req, res) => {
  getAllUsers((err, users) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to fetch users", details: err });
    }
    res.json(users);
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     responses:
 *       200:
 *         description: User found
 *       404:
 *         description: User not found
 *       500:
 *         description: Failed to fetch user
 */

// Route to get a user by ID
app.get("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  getUserById(userId, (err, user) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to fetch user", details: err });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  });
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid request data
 */

// Route to create a new user
app.post("/api/users", (req, res) => {
  createUser(req.body, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.status(201).json(result);
  });
});

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Update a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The user ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid request data
 */

// Route to update a user by ID
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  updateUser(userId, req.body, (err, result) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    res.json(result);
  });
});

module.exports = app; // Export app so index.js can use it
