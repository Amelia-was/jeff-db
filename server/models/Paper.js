const { Schema, model } = require('mongoose');

const paperSchema = new Schema(
    {
        category: {
            type: String,
            required: 'Please select a a category'
        },
        thoughtText: {
            type: String,
            required: 'You need to leave a thought!',
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Paper = model('Paper', paperSchema);

module.exports = Paper;
