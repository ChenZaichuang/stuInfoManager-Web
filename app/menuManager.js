const menuNode = require("./menuNode.js").menuNode;
const stuInfo = require("./stuInfo.js").stuInfo;
var readline = require('readline');

class menuManager{
    setFarther(farther , child){
        farther.children.push(child);
        child.farther.push(farther);
    }
    runMenuNode(node ,stuInfoBase){
        var newNode = node;
        var result;
        var input = readline.createInterface(process.stdin, process.stdout);
        var inputString = '';
        input.setPrompt(newNode.printInfo.mainInterfaceMessage);
        input.prompt();
        input.on('line', function(line) {
            inputString = line.trim();
            if((result = newNode.programOfMenuNode(stuInfoBase , inputString)).result == true){
                newNode = result.node;
                if (newNode === null) {
                    input.close();
                    process.exit(0);
                }
                input.setPrompt(newNode.printInfo.mainInterfaceMessage);
                input.prompt();
            }
        });
    }
}
module.exports.menuManager = menuManager;