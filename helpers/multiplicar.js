//const { rejects } = require('assert');
const fs = require('fs');
//const { resolve } = require('path');
const colors = require('colors');


const crearArchivo  = async ( base = 5, listar = false, hasta=10) => {
    
    try{
        let salida = '';
        let consola = '';

            for(let i =1; i<=hasta;  i++){
                consola += `${base } ${'x'.magenta} ${ i } ${'='.magenta} ${base * i}\n` ;
                salida += `${base } x ${ i } = ${base * i}\n` ;
            }
            if( listar){
                console.log('===================='.rainbow);
                console.log( 'TABLA DEL: '.blue, base );
                console.log('===================='.rainbow);
               
             
                console.log(consola);
            }


        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);

        return `tabla-${base}.txt`;

    }catch(err){
        throw err;
    }
       
    
    
}

module.exports = {
    crearArchivo 
}



