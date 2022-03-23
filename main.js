const express = require('express');
const router = require("./routes/okRoutes")
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use("/", router)


app.listen(PORT, () => {
    console.log("Server running on PORT: ", PORT);
})