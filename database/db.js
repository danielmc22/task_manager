const mongoose = require("mongoose");
/* require("dotenv").config() */

mongoose
    .connect(process.env.URI)
    .then(() => console.log("db connected 🚀"))
    .catch(e => console.log("conection db fail" + e))

