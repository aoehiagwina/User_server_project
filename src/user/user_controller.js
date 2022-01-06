const User = require("./user_model");

exports.add_user = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).send({message: "User Added", user: user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
    
};

exports.list_user = async (req, res) => {
    try {
        const user = await User.findOne({username: req.param.username});
        res.status(200).send({message:"user found", user: user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server logs"});
    }
};

exports.update_user =  async (req, res) => {
    try {
        const updated_user = await User.updateOne(
            {username: req.body.username },
            {$set: { email: req.body.email } },
            {new: true }
        );
        res.status(200).send({message: "user updated", updated_user: updated_user});

    } catch (error) {
        console.log(error)
        res.status(500).send({message: "Check server log"});
    }
};

exports.delete_user = async (req, res) => {
    try {
        const deleted_user = await User.deleteOne({username: req.param.username})
        res.status(200).send({message: "User Deleted", deleted_user: deleted_user});
    } catch (error) {
        console.log(error);
        res.status(500).send({message: "Check server log"});
    }
}