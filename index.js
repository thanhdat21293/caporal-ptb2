/**
 * Created by thanhdat21293 on 3/3/17.
 */

const prog = require('caporal');
const ptb2_c = require('./ptb2.js');
let log = console.log;

prog
    .version('1.0.0')
    .command('ptb2')
    .argument('<a>', 'a param', prog.FLOAT)
    .argument('<b>', 'b param', prog.FLOAT)
    .argument('<c>', 'c param', prog.FLOAT)
    .action(function (args) {
        //Ptb2(args.a, args.b, args.c);
        log(ptb2);
        log(args);
    });

prog.parse(process.argv);