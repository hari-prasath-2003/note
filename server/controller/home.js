const { findById } = require("../modals/user")
const notes = require("../modals/notes")

async function getallData(name) {
   const data = await notes.find({ name: name })
   return data
}

async function getoneData(id) {
   const data = await notes.findById(id)
   return data
}

async function setData(note) {
   const data = await new notes(note)
   await data.save()

}
async function deleteOneData(id) {
   console.log(id);
   await notes.findByIdAndDelete(id)

}
async function updateData(data) {
   const newData = await notes.findById(data.id)
   newData.heading = data.heading
   newData.notes = data.notes
   await newData.save()
}


module.exports = { getallData, getoneData, setData, deleteOneData, updateData }