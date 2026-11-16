const mongoose = require("mongoose");
const _ = require("underscore");
const setName = (name) => _.escape(name).trim();


const DomoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        set: setName,
    },
    age: {
        type: Number,
        min: 0,
        required: true,
    },
    owner: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "Account",
    },
    creator: {
        type: String,
        required: true,
        trim: true,
    },
    createdDate: {
        type: Date,
        default: Date.now,
    },
});

DomoSchema.statics.toAPI = (doc) => ({
    name: doc.name,
    age: doc.age,
    creator: doc.creator,
});

const DomoModel = mongoose.model("Domo", DomoSchema);
module.exports = DomoModel;