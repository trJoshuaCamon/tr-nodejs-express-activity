const db = require("./db-mysql");

db.initializeConnection((err, connection) => {
  // Use initializeConnection instead of init
  if (err) {
    console.error("Connection failed!");
    process.exit(1); // Exit with an error code
  } else {
    console.log("Connected successfully! 🎉");
    connection.end(); // Close the connection after testing
  }
});
