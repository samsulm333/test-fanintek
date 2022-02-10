require("dotenv").config();
const express = require("express");
const router = express.Router();

const { auth } = require("../../middlewares/auth");

const { register, login } = require("../controllers/auth");
const {
  createEpresence,
  getEpresenceByUser,
  approveBySpv,
} = require("../controllers/epresence");

router.post("/register", register);
router.post("/login", login);

// eprsences
router.get("/epresence", auth, getEpresenceByUser);
router.post("/epresence", auth, createEpresence);
router.patch("/epresence/:id", auth, approveBySpv);

module.exports = router;
