const jwt = require("jsonwebtoken");
const TOKEN_SECRET = "weojdjkfjowewejfwefjiwewefj";

// check JWT
module.exports.CheckToken = function (req, res, next) {
  const token = req.headers["auth"];

  if (token) {
    jwt.verify(token, TOKEN_SECRET, function (err, payload) {
      if (err) {
        res.status(400).json({ msg: err.message });
      }
      req.tokenPayload = payload;
      next();
    });
  } else {
    res.status(400).json({ msg: err.message });
  }
};
