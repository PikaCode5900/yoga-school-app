const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
// const db = require('../database'); // Asegúrate de que la ruta sea correcta

// Mostrar el formulario de login
router.get('/', (req, res) => {
    res.render('login', { title: 'Narayana Yoga | Login' });
});

// Procesar el formulario de login
router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE email = ?', [email], async (error, results, fields) => {
        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            res.redirect('/login'); // En caso de fallo en el login, redirigir al formulario de login
        } else {
            res.redirect('/'); // En caso de éxito, redirigir a la página principal
        }
    });
});

module.exports = router;
