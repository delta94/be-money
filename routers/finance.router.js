const express = require("express");
const router = express.Router();
const controller = require("../controllers/finance.controller");

router.post("/income", controller.Income);
// expense
router.post("/expense", controller.Expense);
// balance
router.get("/balance", controller.Balance);
//get Balance
router.get("/get/expense", controller.getExpense);
//get chart line
router.get("/get/chartline", controller.getDataChartLine);
//get chart Doughnut
router.get("/get/doughnut", controller.getDataDoughnut);
//get chart Bar
router.get("/get/chartbar", controller.getDataCharBar);
// get Income
router.get("/income", controller.getIncome);

module.exports = router;
