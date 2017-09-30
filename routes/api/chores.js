const router = require("express").Router();
const choreController = require("../../controllers/choreController");

router.route("/")
	.get(choreController.findAll)
	.post(choreController.create);

router
	.route("/:id")
	.put(choreController.update)
	.delete(choreController.remove);

module.exports = router;