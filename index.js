const app = require("./server"); // Import the Express app
const port = 3000; // Define the port

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
