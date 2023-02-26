const express = require("express")
const router = express.Router();
const { getallData, getoneData, setData, deleteOneData, updateData } = require("../controller/home")

router.get("/:name", async (req, res) => {
    const data = await getallData(req.params.name)
    console.log(req.params.name);
    res.send(data)
})
router.get("/delete/:id", async (req, res) => {
    console.log(req.params.id);
    await deleteOneData(req.params.id)
    res.send()
})
router.get("/:name/:id", async (req, res) => {
    const data = await getoneData(req.params.id)
    res.send(data)
})
router.post('/insertData', async (req, res) => {
    const data = await setData(req.body)
    res.send()
})
router.post('/updateData', async (req, res) => {
    console.log(req.body);
    const data = await updateData(req.body)
    res.send()
})


module.exports = router