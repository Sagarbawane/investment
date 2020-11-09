const express = require("express");
const clientController = require("../Controllers/clientController.js");
const investmentController = require("../Controllers/investmentController.js");
const transactionController = require("../Controllers/transactionController.js");
const withdrawalController = require("../Controllers/withdrawalController.js");


const { authenticateUser } = require("../Middlewares/authenticate");

const router = express.Router();

router.post("/api/client/register",authenticateUser, clientController.register);
router.post("/api/client/login", clientController.login);
router.get("/api/client/account", authenticateUser, clientController.account);
router.get("/api/client/list",authenticateUser, clientController.list);
router.put("/api/client/password/:id",authenticateUser, clientController.update);

router.delete("/api/client/logout", authenticateUser, clientController.logout);

router.get("/api/client/investment", authenticateUser, investmentController.list);
router.post("/api/client/investment", authenticateUser, investmentController.create);
router.get("/api/client/investment/:id", authenticateUser, investmentController.show);
router.delete("/api/client/investment/:id", authenticateUser, investmentController.destroy);


router.get("/api/user/transaction", authenticateUser, transactionController.list);
router.post("/api/user/transaction", authenticateUser, transactionController.create);
router.get("/api/user/transaction/:id", authenticateUser, transactionController.show);
router.delete("/api/user/transaction/:id", authenticateUser, transactionController.destroy);

router.get("/api/client/withdrawal", authenticateUser, withdrawalController.list);
router.post("/api/client/withdrawal", authenticateUser, withdrawalController.create);
router.get("/api/client/withdrawal/:id", authenticateUser, withdrawalController.show);
router.delete("/api/client/withdrawal/:id", authenticateUser, withdrawalController.destroy);





module.exports = router;