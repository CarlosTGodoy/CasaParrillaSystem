const mysql = require('mysql');

var mysqlConnect = mysql.createConnection({
    host: 'localhost',
    database: 'casa_parrilla-system',
    user: 'root',
    password: ''
});

mysqlConnect.connect(function(error){
    if (error){
        throw error;
    } else {
        console.log('Conexion con la BD correcta');
    }
});

mysqlConnect.end();