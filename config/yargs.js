const argv =require('yargs')
    .option('b',{
       alias: 'base',
       type: 'number',
       demandOption: true,
       describe:'Base de tabla de multiplicar'
     }) 
    .option('l',{
        alias:'listar',
        type:'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias:'hasta',
        type:'number',
        default: 10,
        describe: 'Muestra limite de la tabla en consola'
    })
    .check( ( argv, options) =>{
        if(isNaN(argv.base)){
             throw 'La base tiene que ser un número'
        }
            return true;
     })  
     .argv;

module.exports = argv;