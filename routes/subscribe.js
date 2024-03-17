const express = require('express');
const router = express.Router();

// Ruta para manejar la solicitud POST del formulario de suscripción
router.post('/', function(req, res, next) {
  // Procesar los datos del formulario
  const email = req.body.email;
  const confirm = req.body.confirm;

  // Por ahora, simplemente muestra los datos recibidos en la consola
  console.log('Email:', email);
  console.log('Confirmación:', confirm);

  // Redirecciona a la página de confirmación
  res.render('confirmation', { title: 'Narayana Yoga | Confirmación' });
});

module.exports = router;
