const router = require("express").Router();
const choreRoutes = require("./chores");

router.use("/chores", choreRoutes);

module.exports = router;
