require("./db/connection");
const express = require("express");
const app = express();

const userRouter = require("./user/user_router");

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(userRouter);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);

});