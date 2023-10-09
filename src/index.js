import app from "./app/app.js";
import {sequelize} from './database/database.js'
import 'dotenv/config'
const port = process.env.PORT || 3000;

async function main(){

    try {
        await sequelize.authenticate()
        console.log('Conexion establecida')        
        app.listen(port)
        console.log('Servidor activo en puerto:',port)        
    } catch (error) {
        console.error('No existe conexion a la base de datos: ',error)
        
    }

}
main()