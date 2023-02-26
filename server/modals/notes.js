const mongoose = require("mongoose");
const schema = mongoose.Schema


const noteSchema = new schema({
    name: String,
    heading: String,
    notes: String,
    date: {
        type: String,
        default: () => new Date().toLocaleString()
    }

})

noteSchema.set('timestamps', true)

module.exports = mongoose.model("note", noteSchema)