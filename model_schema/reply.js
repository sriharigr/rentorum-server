const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var replySchema = new Schema({
    content: {
        type: String,
        required: true,
        min: 1,
        max: 500
    }, 
    createdBy: {
        type: String,
        required: true
    },
    createdDateAndTime: {
        type: Date,
        default: Date.now(),
        required: true
    },
    lastUpdatedDateAndTime: {
        type: Date,
        default: Date.now(),
        required: true
    },
    deletedFlag: {
        type: String,
        enum: ["true", "false"],
        default: "false"
    }
});

module.exports.schema = replySchema;