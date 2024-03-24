const express = require('express');

const app = express();
app.use(express.static('dist'));

const port = 4500;
app.listen(port, () => console.log(`Server running in http://localhost:${port}`));
