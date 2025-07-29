exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (username === 'admin' && password === 'password') {
        res.status(200).send('Login successful!');
    } else {
        res.status(401).send('Invalid credentials');
    };
};

exports.logoutUser = async (req, res) => {
    res.send('Logout successful!');
};