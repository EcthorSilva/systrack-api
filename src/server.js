const express = require('express');
const config = require('config');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(express.json());
app.use('/systrackapi', routes);
app.use(errorHandler);

const PORT = process.env.PORT || config.get('port');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));