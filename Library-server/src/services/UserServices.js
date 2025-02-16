import bcrypt from 'bcrypt';
import  { User }  from '../models/UserModel.js';

export async function registerUser(user) {

    try {
        
        // console.log("user", user);
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const savedUser = new User({...user, password: hashedPassword});
        
        return savedUser.save();
    } catch (error) {
        console.log(error.message);
    }
}

export async function loginUser(credential) {
    const { email, password } = credential;

    try {
        const user = await User.findOne({email});

        if(!user) {
            throw new Error("Invalid email or password");
        } else{
            const validPassword = await bcrypt.compare(password, user.password);

            if(validPassword) {
                return user;
            } else{
                throw new Error("Invalid password, please enter a correct password");
            }
        }

    } catch (error) {
        throw new Error(error.message);
    }
};

export async function findAllUsers() {
    try {
        const users = await User.find();
        
        if(users) return users;
        

    } catch (error) {
        return [];        
    }
}

export async function findUserById(userId) {
    try {
        
        const user = await User.findById(userId);
        if(user) {
            return user;
        }

        throw new Error('user does not exist with this id');

    } catch (error) {
        throw new Error(error.message);    
    }
}

export async function modifyUser(user) {
    try {
        const id = await User.findByIdAndUpdate(user._id, user, {new: true});

        if(!id) {
            throw new Error("User Does not exist with this ID", id);
        }

        return user;
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function removeUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        
        if(!deletedUser) {
            throw new Error("User Does not exist with this ID", deletedUser);
        }

        return "User deleted successfully"
    } catch (error) {
        throw new Error('Unable to delete user');
    }
}