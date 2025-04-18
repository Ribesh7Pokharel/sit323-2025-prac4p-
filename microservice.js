const express = require("express"); // Import the Express framework
const app = express(); // Create an Express application
const port = 3000; // Define the port number

// Middleware to parse JSON requests
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send(
    "Welcome to the Calculator Microservice! Use /add, /subtract, /multiply, or /divide with num1 and num2 query params."
  );
});

// Addition endpoint
app.get("/add", (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input parameters" });
  }
  res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction endpoint
app.get("/subtract", (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input parameters" });
  }
  res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication endpoint
app.get("/multiply", (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input parameters" });
  }
  res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division endpoint
app.get("/divide", (req, res) => {
  const { num1, num2 } = req.query;
  if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ error: "Invalid input parameters" });
  }
  if (parseFloat(num2) === 0) {
    return res.status(400).json({ error: "Cannot divide by zero" });
  }
  res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Calculator microservice running at http://localhost:${port}`);
});
