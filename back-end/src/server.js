require('dotenv').config();
const app = require('./app');

app.listen(process.env.API_PORT, () => console.log(`Server On at port ${process.env.API_PORT}`))
