const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode1 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>请输入学生信息（格式：姓名,学号,民族,班级,学科:成绩,...），按回车提交：<br></p>',
            inputError : '<p>请按正确的格式输入（格式：姓名,学号,民族,班级,学科:成绩,...）：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var student = new Student();
        var returnPack = {};

        if(student.checkStuInfoString(inputString) == true){
            stuInfoBase.addStudent(student);
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = `<p>学生${student.name}的成绩被添加<br></p>`;
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }
        return returnPack;
    }

}


module.exports.menuNode1 = menuNode1;