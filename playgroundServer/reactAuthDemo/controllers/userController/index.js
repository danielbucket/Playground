const jwt = require('jsonwebtoken');

exports.login_user = async (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(201).json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    }
};

exports.logout_user = async (req, res) => {
    res.send('Logout successful!');
};

exports.new_user = async (req, res) => {
    const { username, password } = req.body;

    // Here you would typically save the new user to your database
    // For this example, we will just return a success message
    res.status(201).json({ message: 'New user created successfully', user: { username } });
};