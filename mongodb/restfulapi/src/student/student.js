const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    }
})

module.exports = mongoose.model("studentData" , studentSchema);