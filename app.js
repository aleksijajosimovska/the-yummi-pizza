const express = require('express');
const cors = require('cors')
const path = require('path');
const PORT = process.env.PORT || 3009;
const app = express();
const router = require('./api/routes');
const { transferData } = require('./api/utilities');
const run = async () => {
    await transferData();
    if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
        app.use(cors())
    }
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use('/', express.static(path.join(__dirname, 'build')));
    app.use('/api', router);
    app.listen(PORT, () => console.log(`Our app listening at ${PORT}`));
};
run();