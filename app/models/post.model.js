/**
 * Created by jacobstroop on 3/14/16.
 */
var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;

// resume mongoose model
var postSchema = new Schema({
    meta: {
        author: {type: String, defualt: 'Jacob Stroop'},
        createDate: {type: Date, default: Date.now},
        modifyDate: Date,
        tags: [String]
    },
    content: {
        title: String,
        short: String,
        body: String
    }
}, { collection : 'blog' });

mongoose.model('post', postSchema);
