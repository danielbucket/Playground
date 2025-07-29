const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const reactAuthDemo = require('./reactAuthDemo/index.v1');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Playground Dev Server is running!');
})

app.use('/react-auth-demo', reactAuthDemo);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
