import express from 'express';
import router from './routes/routes.js';
import cors from 'cors';
import Connection from "./database/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(8000, () => {
    console.log("Server is running at port 8000");
});

Connection;
app.use('/api', router);