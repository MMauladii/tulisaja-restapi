const mongoose= require('mongoose')

const postSchema = mongoose.Schema({
    content: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        require: true
    },
    created_date: {
        type: Date,
        require: Date.now
    },
    modified_date: {
        type: Date,
        require: null
    },
    username: {
        type: String,
        require: true
    },
})

module.exports = mongoose.model('Post', postSchema)