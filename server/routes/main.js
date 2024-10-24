const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Bay dat blog",
        description: "Simple blog talk simple knowledge"
    }
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;