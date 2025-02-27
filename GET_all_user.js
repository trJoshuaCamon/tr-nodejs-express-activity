const connection = require("./db-mysql"); // Import database connection module

function getAllUsers(callback) {
  connection.initializeConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }

    const query = "SELECT * FROM users_tbl WHERE user_isdel = 0";

    connection.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });

    connection.end(); // Close connection after query
  });
}

module.exports = getAllUsers;
