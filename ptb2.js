/**
 * Created by thanhdat21293 on 3/3/17.
 */

const prog = require('caporal');

let log = console.log;

let Ptb2 = (a, b, c) => {
    let delta, x1, x2;

    if (isNaN(a)) {
        throw new Error('a is not number');
    }
    if (isNaN(b)) {
        throw new Error('b is not number');
    }
    if (isNaN(c)) {
        throw new Error('c is not number');
    }
    delta = b * b - 4 * a * c;
    a2 = 2 * a;
    canDelta = Math.sqrt(delta);
    if (delta < 0) {
        throw new Error('PT vo nghiem');
    } else if (delta > 0) {
        x1 = (-b - canDelta) / a2;
        x2 = (-b + canDelta) / a2;
        log(x1, x2);
    } else {
        log(-b / a2);
    }
}

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
        Ptb2(args.a, args.b, args.c);
        //log(options);
    });

prog.parse(process.argv);