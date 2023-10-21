const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.status(404).send("Sorry, we didn't find that! Looks like wrong path!");
});

module.exports = router;