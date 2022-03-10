const { Schema, model } = require('mongoose');

const paperSchema = new Schema(
    {
        category: {
            type: String,
            required: 'Please select a a category'
        },
        title: {
            type: String,
            required: 'Please enter a title'
        },
        authors: {
            type: String,
            required: 'Please enterthe authors'
        },
        journal: {
            type: String,
            required: 'Please enter a journal title'
        },
        abstract: {
            type: String
        },
        citation: {
            type: String
        },
        email: {
            type: String,
            required: true
        },
        links: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Link'
            }
        ],
        order: {
            type: Number,
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
