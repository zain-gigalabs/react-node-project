import express from 'express';
import router from './routes/routes.js';
import Connection from "./database/db.js";

const app = express();
app.use('/',router);

app.listen(8000, () => {
    console.log("Server is running at port 8000");
});

Connection;