// MODULO EXPRESS PARA HACER EL SERVIDOR
const express = require('express');

// MODULO EJS-MATE PARA PLANTILLAS
const engine = require('ejs-mate');

// MODULO PATH
const path = require('path');

// OBJETO PARA DETONAR EXPRESS
const app = express();

// ESTABLECER LA RUTA DE CARPETAS Y ARCHIVOS
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname,'public')));

// ASIGNAR EL MOTOR ENGINE
app.engine('ejs', engine);

// CONFIGURACIONES
app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000); // VA Y BUSCA EL PUERTO DISPONIBLE

// IMPORTAR RUTAS
app.use(require('./routes/routes'));

// EMPEZAR SERVIDOR
app.listen(app.get('port'), () => {
    console.log('El servidor esta escuchando', app.get('port'));
});
