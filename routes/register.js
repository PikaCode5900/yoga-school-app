const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
// const db = require('../database'); // Asegúrate de que la ruta sea correcta

// Mostrar el formulario de registro
router.get('/', (req, res) => {
    res.render('register', { title: 'Narayana Yoga | Registro' });
});

// Procesar el formulario de registro
router.post('/', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = { username: req.body.username, email: req.body.email, password: hashedPassword };
        
        db.query('INSERT INTO users SET ?', user, (error, results, fields) => {
            if (error) throw error;
            res.redirect('/login'); // Redirige al usuario a la página de login tras el registro exitoso
        });
    } catch {
        res.redirect('/register'); // En caso de error, redirigir al formulario de registro
    }
});

module.exports = router;
