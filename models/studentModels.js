const mongoose = require("mongoose");

const stSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        default: "XYZ - DEFAULT ENTRY"
    },
    phone: {
        type: Number
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const stModel = mongoose.model("Student", stSchema);

module.exports = stModel;
