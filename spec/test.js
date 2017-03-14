// class a {
//     print(){
//         console.log('1');
//     }
// }
// function change(){
//     var b = new a();
//     b.print = function(){
//         console.log('2');
//     };
//     return b;
// }
//
//
//
// describe("student printMyScore test", () => {
//
//     var c = new a();
//     c.print = function(){
//         console.log('2');
//     };
//     var d = change();
//     it('should return the score information string of the student', () => {
//         expect(d).toEqual(c);
//     });
// });

var readline = require('readline');
function a(){
    rl = readline.createInterface(process.stdin, process.stdout);

    rl.setPrompt('OHAI> ');
    rl.prompt();

    rl.on('line', function(line) {
        switch(line.trim()) {
            case 'hello':
                console.log('world!');
                break;
            default:
                console.log('Say what? I might have heard `' + line.trim() + '`');
                break;
        }
        rl.prompt();
    }).on('close', function() {
        console.log('Have a great day!');
        process.exit(0);
    });
}

a();
console.log('good!');

// var readline = require('readline');
// var log = console.log;
//
// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// var recursiveAsyncReadLine = function () {
//     rl.question('Command: ', function (answer) {
//         if (answer == 'exit') //we need some base case, for recursion
//             return rl.close(); //closing RL and returning from function.
//         log('Got it! Your answer was: "', answer, '"');
//         recursiveAsyncReadLine(); //Calling this function again to ask new question
//     });
// };
//
// recursiveAsyncReadLine(); //we have to actually start our recursion somehow
// console.log('good!');



process.stdin.setEncoding('utf8');

process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
        process.stdout.write(`data: ${chunk}`);
    }
});
console.log('good');