const express = require('express');
const router = express.Router();


router.get('/:username', (req, res) => {
    const username = req.params.username;
    res.send('<h1 id="welcome-message">Welcome ' + username + '!</h1>');
    res.render('profile', {username})
});

module.exports = router;
