//===============
//puerto
//===============

process.env.PORT = process.env.PORT || 3000;

//===============
//entorno
//===============
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
//base de datos
//===============
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://doki2020:KnLGLG7nZXo5bG0d@cluster0.7mwfg.mongodb.net/cafe?retryWrites=true&w=majority';
}

process.env.URLDB = urlDB;