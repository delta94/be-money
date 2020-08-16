const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const controller = require("../controllers/user.controller");
const middleware = require("../middleware/tocken.middleware");

// Create user
router.post("/signup", controller.createUser);
//Login
router.post("/login", controller.login);
// Update inform user
router.post(
  "/update",
  middleware.CheckToken,
  upload.single("file"),
  controller.updateInfoUser
);
// Check logged in?
router.get("/checklogin", controller.checkLoggedIn);
// Fotgot pass
router.post("/forgot", controller.fogotPass);
// Choose default currency
router.post("/currency", controller.addCurrencyDefault);

module.exports = router;
