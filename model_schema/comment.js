const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: {
        type: String,
        required: true,
        min: 1,
        max: 750
    }, 
    replies: [{
        type:Schema.Types.ObjectId,
        ref: 'reply'
    }],
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

module.exports.schema = commentSchema;
