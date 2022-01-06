const {Router} = require("express");
const userRouter = Router();

const {
    add_user,
    list_user,
    update_user,
    delete_user
} = require("./user_controller");

userRouter.post("/user", add_user);
userRouter.get("/user", list_user);
userRouter.put("/user", update_user);
userRouter.delete("/user", delete_user);

module.exports = userRouter;