const express = require('express');
const router = express.Router();


router.get('/:username', (req, res) => {
    res.send('<h1 id="welcome-message">Welcome ' + req.params.username + '!</h1>');
});

module.exports = router;
