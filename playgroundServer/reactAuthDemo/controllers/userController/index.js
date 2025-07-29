const jwt = require('jsonwebtoken');

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ token });
    } else {
        res.status(401).send('Invalid credentials');
    };
};

exports.logoutUser = async (req, res) => {
    res.send('Logout successful!');
};