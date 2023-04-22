const asynHandler = require("express-async-handler");
const User = require("../models/usermodels");
const jwt = require("jsonwebtoken");

const protect = asynHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      //decoddes token id
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized token failed");
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized no token ");
    }
  }
});
module.exports = protect;
