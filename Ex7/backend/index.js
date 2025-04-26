const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://mongo:27017/meubanco')
  .then(() => console.log('✅ Conectado ao MongoDB'))
  .catch(err => console.error('❌ Erro na conexão:', err));

app.get('/', (req, res) => res.send('🚀 API funcionando'));

app.listen(5000, () => console.log('✅ Servidor na porta 5000'));
