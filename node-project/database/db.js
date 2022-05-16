import mongoose from 'mongoose';

const Connection = mongoose.connect('mongodb://localhost:27017/usersdb',
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

export default Connection;