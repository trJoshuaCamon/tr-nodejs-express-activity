const connection = require("./db-mysql"); // Import database connection module

function createUser(userData, callback) {
  const { user_fname, user_lname } = userData;

  // Validation: Ensure both fields are not empty
  if (!user_fname || !user_lname) {
    return callback({ message: "First name and last name are required" }, null);
  }

  connection.initializeConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }

    const query =
      "INSERT INTO users_tbl (user_fname, user_lname, user_isdel) VALUES (?, ?, 0)";

    connection.query(query, [user_fname, user_lname], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, {
        message: "User created successfully",
        user_id: results.insertId,
      });
    });

    connection.end(); // Close connection after query
  });
}

module.exports = createUser;
