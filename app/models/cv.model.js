/**
 * Created by jacobstroop on 3/13/16.
 */
var mongoose      = require('mongoose'),
    Schema        = mongoose.Schema;

// resume mongoose model
var cvSchema = new Schema({
    _id: Number,
    name: {
        first: String,
        last: String,
        middle: String
    },
    contact: {
        email: String,
        phone: String
    }
}, { collection : 'resume' });

mongoose.model('cv', cvSchema);
