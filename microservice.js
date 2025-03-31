const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Addition endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    res.json({ result: parseFloat(num1) + parseFloat(num2) });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    res.json({ result: parseFloat(num1) - parseFloat(num2) });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    res.json({ result: parseFloat(num1) * parseFloat(num2) });
});

// Division endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid input parameters' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero' });
    }
    res.json({ result: parseFloat(num1) / parseFloat(num2) });
});

// Start the server
app.listen(port, () => {
    console.log(`Calculator microservice running at http://localhost:${port}`);
});
