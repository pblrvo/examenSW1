const express = require("express");
const router = express.Router();
const users = require("../users");

router.post('/', async (req, res) => {
    if (!req.session.user) {
        // User not authenticated, set cookiesAccepted in session
        console.log('Session before accepting cookies:', req.session.cookiesAccepted);
        req.session.cookiesAccepted = true;
        console.log('Session after accepting cookies:', req.session.cookiesAccepted);

        res.redirect('/');
    } else {
        req.session.user.cookies = true;

        // Ensure that req.session.user.username is defined before calling saveCookies
        if (req.session.user.username) {
            console.log('Saving cookies for user:', req.session.user.username);
            await users.saveCookies(req.session.user.username, req.session.user.cookies);

            // Use await to ensure that the session is updated before rendering the view
            await res.render('index', { title: 'Restricted', user: req.session.user });
        } else {
            console.error('Error: Username is undefined. Session:', req.session);
            res.status(500).send('Internal Server Error');
        }
    }
});





// Exportar el enrutador
module.exports = router;
  