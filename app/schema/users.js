exports.schema = new mongoose.Schema({
    name: { type: String, maxlength: 50, minlength: 3},
    lastname: {type: String, minlength: 2},
    age: {type: Number, min: 18, max: 104},
    job: {type: String, maxlength: 50},
    tel: {type: String, maxlength: 50}
});