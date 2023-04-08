const express = require("express");
const router = express.Router();
const contoller = require("../controllers/control");
router.get(["/","/homa"], (req, res) => {
  res.render("homa");
});

router.get("/tcp", (req, res) => {
  res.render("tcp");
});

router.get("/udp", (req, res) => {
    res.render("udp");
});

router.get("/comparisons", (req, res) => {
    res.render("comparisons");
});  

module.exports = router;