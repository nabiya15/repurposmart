const express = require('express');
const app = express();
const PORT = 8000 || process.env.PORT;

app.get('/', (req, res) => {
	res.send("hello world");
});

app.listen(PORT, () => {
	console.log('Application running on port ' + PORT);
});
