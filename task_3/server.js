const express = require('express');

const app = express();
app.use(express.static('public'));

const port = 3500;

app.listen(port, () => console.log(`Server running in port http://localhost:${port}`));
