const bcrypt = require("bcryptjs");
const User = require("../user/user_model");

exports.hash_Password = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};

exports.decrypt_Password = async (req, res, next) => {
  try {
    req.user = await User.findOne({ username: req.body.username });
    if (await bcrypt.compare(req.body.password, req.user.password)) {
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check server logs" });
  }
};
