import bcrypt from "bcrypt";

import { loginService, generateToken } from "../services/auth.service.js";

/*
    The auth.controller is for management of the user login, the function below search for the email and
    password in the database, and generate a random token for the user.
    
*/
const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await loginService(email);

        if(!user) {

            return res.status(404).send({ message: "User or password not found" });
            
        }
    
        const passwordIsValid = bcrypt.compareSync(password, user.password);//This compare can be done with await too: const passwordIsValid = await bcrypt.compare(password, user.password);

        if(!passwordIsValid) {

            return res.status(404).send({ message: "User or password not found" });
            
        }

        const token = generateToken(user.id);
    
        res.send({ token });

    } catch (err) {
        
        res.status(500).send(err.message);

    }

};

export { login }