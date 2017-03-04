/**
 * Created by thanhdat21293 on 3/3/17.
 */

const prog = require('caporal');
const ptb2_call = require('./ptb2.js');
let log = console.log;

prog
    .version('1.0.0')
    .command('tinhtoan')
    //.option('--a <a>', 'a param', prog.FLOAT)
    //.option('--b <b>', 'b param', prog.FLOAT)
    //.option('--c <c>', 'c param', prog.FLOAT)
    .argument('<a>', 'a param', prog.FLOAT)
    .argument('<b>', 'b param', prog.FLOAT)
    .argument('<c>', 'c param', prog.FLOAT)
    .action(function (args, options) {
        ptb2_call.Ptb2(args.a, args.b, args.c);
    });

prog.parse(process.argv);
