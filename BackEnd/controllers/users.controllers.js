const UserService = require('../service/service'); // Update the path as necessary

const successMessage = "User created successfully";
const failureMessage = "User creation failure due to ";
const notFoundMessage = "User not found";

const UserController = {
    async createUser(req, res) {
        try {
            await UserService.createUser(req.body);
            res.send({ isSuccess: true, data: { message: successMessage } });
        } catch (e) {
            res.send({ isSuccess: false, data: { message: failureMessage, error: e.message } });
        }
    },

    async authenticateUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.authenticateUser(email, password);

            if (!user) {
                res.json({ authenticated: false });
            } else {
                res.json({ authenticated: true });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async editUser(req, res) {
        try {
            const { email } = req.params;

            if (req.body.email) {
                return res.status(400).send({ isSuccess: false, data: { message: "Updating the email is not allowed." } });
            }

            let updatedUser = await UserService.editUser(email, req.body);

            if (!updatedUser) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json({ isSuccess: true, data: updatedUser });
        } catch (err) {
            res.status(500).send({ isSuccess: false, error: err.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { email } = req.params;
            const user = await UserService.deleteUser(email);

            if (!user) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.send('User deleted.');
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (err) {
            res.status(500).send(err.message);
        }
    },

    async getUserByEmail(req, res) {
        try {
            const { email } = req.params;
            const user = await UserService.getUserByEmail(email);

            if (!user) {
                return res.status(404).send({ isSuccess: false, data: { message: notFoundMessage } });
            }

            res.json(user);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
};

module.exports = UserController;
