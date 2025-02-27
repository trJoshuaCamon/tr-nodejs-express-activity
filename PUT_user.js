const connection = require("./db-mysql"); // Import database connection module

function updateUser(userId, userData, callback) {
  const { user_fname, user_lname, user_isdel } = userData;

  // Validate if at least one field is provided for an update
  if (!user_fname && !user_lname && user_isdel === undefined) {
    return callback(
      {
        message:
          "At least one field (user_fname, user_lname, user_isdel) must be provided",
      },
      null
    );
  }

  connection.initializeConnection((err, connection) => {
    if (err) {
      return callback(err, null);
    }

    // Build dynamic query for updating only provided fields
    let query = "UPDATE users_tbl SET";
    let queryParams = [];

    if (user_fname) {
      query += " user_fname = ?,";
      queryParams.push(user_fname);
    }
    if (user_lname) {
      query += " user_lname = ?,";
      queryParams.push(user_lname);
    }
    if (user_isdel !== undefined) {
      query += " user_isdel = ?,";
      queryParams.push(user_isdel);
    }

    // Remove last comma and add WHERE clause
    query = query.slice(0, -1) + " WHERE user_id = ?";
    queryParams.push(userId);

    connection.query(query, queryParams, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      if (results.affectedRows === 0) {
        return callback(null, { message: "User not found or no changes made" });
      }
      callback(null, { message: "User updated successfully" });
    });

    connection.end(); // Close connection after query
  });
}

module.exports = updateUser;
