const Router = require("express")
const router = new Router();
const OKamountController = require("../controllers/ok.controller")

router.post("/", OKamountController.createItem)
router.get("/", OKamountController.getItems)
router.get("/:id", OKamountController.getOneItem)
router.put("/", OKamountController.updateCount)
router.delete("/:id", OKamountController.deleteItem)




module.exports = router