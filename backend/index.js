// import express from 'express';
// import db from "./config/Database.js";
// import Users from "./models/UserModel.js";

// const app = express();
// const port = 5000;

// try {
//   await db.authenticate()
//   console.log('Connection Database Success.');
//   await Users.sync();
// } catch (error) {
//   console.error(error);
// }

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';

dotenv.config();
const app = express();
const port = 5000;

try {
    await db.authenticate()
    console.log('Connection Database Success.');
} catch (error) {
    console.error(error)
}

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server sedang berjalan di http://localhost:${port}`);
  });