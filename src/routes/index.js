const express = require('express');
const router = express.Router();

router.get('https://prueba-omega-two.vercel.app/', (req, res) => {
  res.render('index', { title: 'First Web Node' });
});

router.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contact Page' });
});

module.exports = router;
