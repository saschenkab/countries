const { Router } = require("express");
const countriesRoute = require("./countries");
const router = Router();

router.use("/countries", countriesRoute);

module.exports = router;
