const mongoose = require('mongoose');

const dbConexion = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Conexion exitosa...');

    } catch (error) {
        console.log(error);
        throw new Error('Error en conexion con BD...');
    }
}

module.exports = {
    dbConexion
}