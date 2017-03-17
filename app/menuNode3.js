const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode3 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>请输入要删除的学生的学号（格式： 学号, 学号,...），按回车提交：<br></p>',
            inputError : '<p>请按正确的格式输入要删除的学生的学号（格式： 学号, 学号,...），按回车提交：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var returnPack = {};
        if(stuInfoBase.deleteStudent(inputString)){
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = `学号为${inputString}的学生已被删除！`;
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }

        return returnPack;
    }
}


module.exports.menuNode3 = menuNode3;