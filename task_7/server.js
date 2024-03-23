const express = require('express');

const app = express();
app.use(express.static('static'));

const port = 5500;
app.listen(port, () => console.log(`Server in http://localhost:${port}`));
