const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode4 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>请输入要修改的学生的学号（格式： 学号），按回车提交：<br></p>',
            inputError : '<p>请按正确的格式输入要修改的学生的学号（格式： 学号），按回车提交：<br></p>',
            findError : '<p>未找到对应的学生信息，请重新输入，按回车提交：<br></p>'
        });
    }

    programOfMenuNode(stuInfoBase , inputString){
        var returnPack = {};
        var student = stuInfoBase.findStudent(StuNumberString);

        returnPack.result = (student === null) ? false : true;
        returnPack.printInfo = (student === null) ? this.printInfo.findError : '';
        returnPack.student = student;
        return returnPack;
    }
}


module.exports.menuNode4 = menuNode4;