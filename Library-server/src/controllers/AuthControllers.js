import { loginUser, registerUser } from "../services/UserServices.js";


async function handleRegister (req, res) {
    const user = req.body;
    // console.log("user in authcontroller", user);

    try {
        const registeredUser = await registerUser(user);


        res.status(201).json({
            message: "User created successfully",
            user: {
                _id: registeredUser._id,
                firstName: registeredUser.firstName,
                lastName: registeredUser.lastName,
                email: registeredUser.email,
                type: registeredUser.type           
            }
        })
    } catch (error) { 
        if(error.message.includes("E11000 duplicate key error collection:")) {
            res.status(409).json({message: "User with email already exists", error: error.message});
        }  
        else {
            res.status(500).json({message: "Unable to register/signup at the moment", error: error.message});
        }
    }
};

async function handleLogin(req, res) {
    const user = req.body;

    try {
        const UserLogged = await loginUser(user);

        res.status(201).json({
            message: "User loggedIn successfully",
            user: {
                _id: UserLogged._id,
                firstName: UserLogged.firstName,
                lastName: UserLogged.lastName,
                email: UserLogged.email,
                type: UserLogged.type           
            }
        })

    } catch (error) {
        res.status(500).json({message: "Unable to login user at this moment", error: error.message});
    }

}

export { handleRegister , handleLogin};