const userService = require('../services/user.service');
const mongoose = require('mongoose');

const create = async (req, res) => {

    const { name, username, email, password, avatar, background } = req.body;

    if (!name || !username || !email || !password || !avatar || !background) {
        
        res.status(400).send({ message: "Submit all fields for registration" });

    }

    const user = await userService.createService(req.body);

    if(!user) {

        res.status(400).send({ message: "Error creating User" });

    }

    res.status(201).send({

        message: "User created sucessfuly!",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        }
    });
};

const findAll = async (req, res) => {

    const users = await userService.findAllService();

    if (users.length === 0) {

        return res.status(400).send({ message: "There are no registered Users" });
    }

    res.send(users)
};

const findById = async (req, res) => {

    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).send({ message: "Invalid User ID" });

    }

    const user = await userService.findByIdService(id);

    if (!user) {

        return res.status(400).send({ message: "User not found" });

    }

    res.send(user);
};

const update = async (req, res) => {

    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
        
        res.status(400).send({ message: "Submit at least one field for update" });

    }

    const id = await req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {

        res.status(400).send({ message: "Invalid user ID" });

    }

    const user = await userService.findByIdService(id);

    if(!user) {

        res.status(400).send({ message: "User not found " });
    }

    await userService.updateService(
        id, 
        name, 
        username, 
        email, 
        password, 
        avatar, 
        background
    );

    res.send({ message: "User sucessfully updated!" });
    
};

module.exports = { create, findAll, findById, update }