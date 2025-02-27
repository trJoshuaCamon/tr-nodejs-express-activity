const mysql = require("mysql2");

// Database configuration
const database = {
  host: "127.0.0.1", // Use 'host' instead of 'server'
  user: "root",
  password: "@Admin123",
  database: "nodejstask",
  port: 3306,
};

/**
 * Function to initialize database connection
 */
function initializeConnection(connect_callback) {
  console.log("Database Configuration:");
  console.log(" Host: " + database.host);
  console.log(" Database: " + database.database);
  console.log(" User: " + database.user);
  console.log("");

  console.log("Initializing MySQL Connection...");

  // Create connection
  const connection = mysql.createConnection({
    host: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
    port: database.port,
  });

  // Connect to MySQL
  connection.connect((err) => {
    if (err) {
      console.error("❌ Database connection failed:", err);
      if (connect_callback) connect_callback(err, null);
      return;
    }
    console.log("✅ Successfully connected to MySQL!");
    if (connect_callback) connect_callback(null, connection);
  });
}

// Export the function
module.exports = { initializeConnection };
