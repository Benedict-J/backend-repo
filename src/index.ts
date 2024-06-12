import express from 'express';
import userRouter from '../routes/userRoutes'

const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const app = express();
const port = 8000;

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});