const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/complaintDB")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});


const complaintRoutes = require("./routes/complaintroutes");

app.use("/complaints", complaintRoutes);


app.get("/", (req, res) => {

    res.send("Complaint Management API");

});


const PORT = 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});