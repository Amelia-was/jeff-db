const { Schema, model } = require('mongoose');

const linkSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Please enter a link tilte'
        },
        url: {
            type: String,
            reuqired: 'Please enter a URL'
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Link = model('Link', linkSchema);

module.exports = Link;