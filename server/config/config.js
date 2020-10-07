//===============
//puerto
//===============

process.env.PORT = process.env.PORT || 3000;

//===============
//entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
//vencimiento del token
//===============
//60 segundos
//60 minutos
//24 horas
//30 dias
process.env.CADUCIDAD_TOKEN = '48h';

//===============
//Seed< de autenticacion
//===============
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


//===============
//base de datos
//===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//======================
//Google client ID
//======================
process.env.CLIENT_ID = process.env.CLIENT_ID || '390378983206-cn4f5hbo8qmldn8l9e5jjtsma65nuv23.apps.googleusercontent.com';