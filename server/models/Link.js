const { Schema, model } = require('mongoose');

const paperSchema = new Schema(
    {
        title: {
            type: String,
            required: 'Please enter a link tilte'
        },
        url: {
            type: String,
            reuqired: 'Please enter a URL'
        }
    }
)