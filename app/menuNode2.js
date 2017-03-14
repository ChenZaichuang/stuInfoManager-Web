const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode2 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n',
            inputError : '\n请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：\n'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var student = new Student();
        var returnPack = {};
        var string = '';
        if((string = stuInfoBase.printStuScore(inputString)) != ''){
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = string;
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }

        return returnPack;
    }
}


module.exports.menuNode2 = menuNode2;