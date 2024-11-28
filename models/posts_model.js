
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: String,
    owner: {
        type: String,
        required: true
    },
}, {
   versionKey: false,
});

const PostModel = mongoose.model('Posts', postSchema);

module.exports = PostModel;