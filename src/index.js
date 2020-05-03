import express from 'express';

const app = express();
const PORT = 4500;

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.listen(PORT, function () {
	console.log(`App running on http://localhost:${PORT}`);
});
