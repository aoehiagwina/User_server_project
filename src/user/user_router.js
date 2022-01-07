const {Router} = require("express");
const userRouter = Router();

const {
    add_user,
    list_user,
    update_user,
    delete_user
} = require("./user_controller");

const {hash_Password, decrypt_Password} = require("../middleware");

userRouter.post("/user", add_user, hash_Password);
userRouter.get("/user/:username", list_user);
userRouter.put("/user", update_user);
userRouter.delete("/user/:username", delete_user);

module.exports = userRouter;