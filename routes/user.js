const router = require("express").Router();

// http://localhost:5000/api/users/usertest
router.get("/usertest", (req, res) => {
  res.send("user test");
});

// http://localhost:5000/api/users/userposttest
router.post("/userposttest", (req, res) => {
  const username = req.body.username;
  res.send(username);
  console.log(username);
});
module.exports = router;
