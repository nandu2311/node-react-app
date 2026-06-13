const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
// Middleware
app.use(cors());
app.use(express.json());
// Sample API endpoint
app.get('/api/hello', (req, res) => {
	res.json({ message: 'Hello from Node.js backend!' });
	const PORT = process.env.PORT || 3000;
	const env = process.env.NODE_ENV || 'development';


});
// Start server
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
