const connection = require("./db-mysql"); // Import database connection module

// Function to get a user by ID
function getUserById(userId, callback) {
  connection.initializeConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }

    const query =
      "SELECT * FROM users_tbl WHERE user_id = ? AND user_isdel = 0";

    connection.query(query, [userId], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.length === 0) {
        return callback(null, null); // No user found
      }
      callback(null, results[0]); // Return the first user found
    });

    connection.end(); // Close connection after query
  });
}

module.exports = getUserById;
