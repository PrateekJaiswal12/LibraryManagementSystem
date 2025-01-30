import { findAllUsers, findUserById, modifyUser, removeUser } from '../services/UserServices.js'


async function getAllUsers(req, res) {
    try {
        const users = await findAllUsers();
        res.status(200).json({message: "users retrieved successfully", users});
        
    } catch (error) {
        res.status(500).json({message: "Unable to retrieve all users at this moment",error: error.message})
    }
}


async function getUserById(req, res) {
    const userId = req.params.userId;

    try {
        const user = await findUserById(userId);
        
        if(!user){
            res.status(404).json({message: "User requested does not exist", id: userId});
        }

        res.status(200).json({message: "user found successfully", user});
    } catch (error) {
        res.status(500).json({message: "Could not find the user", error: error.message});
    }
}


async function updateUser(req, res) {
    const user = req.body;

    try {
        const updatedUser = await modifyUser(user);

        if(!updateUser) {
            res.status(404).json({message: "User requested does not exist"});
        }

        res.status(200).json({message: "user updated successfully", updatedUser});
    
    } catch (error) {
        res.status(500).json({message: "Could not find the user", error: error.message});
    }
}

async function deleteUser(req, res) {
    const userId = req.params.userId;

    try {
        const deletedUser = await removeUser(userId);

        if(!deletedUser) {
            res.status(404).json({message: "User requested does not exist"});
        }

        res.status(200).json({message: "User deleted successfully"})
    } catch (error) {
        res.status(500).json({message: "Unable to delete user at this moment", error: error.message})
    }
}

export  { getAllUsers, getUserById, updateUser, deleteUser };