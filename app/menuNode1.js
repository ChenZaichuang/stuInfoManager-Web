const menuNode = require("./menuNode.js").menuNode;
const Student = require('./student.js').Student;


class menuNode1 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '请输入学生信息（格式：姓名,学号,民族,班级,学科:成绩,...），按回车提交：\n',
            inputError : '\n请按正确的格式输入（格式：姓名,学号,民族,班级,学科:成绩,...）：\n'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var student = new Student();
        var returnPack = {};

        if(student.checkStuInfoString(inputString) == true){
            console.log('here2');
            stuInfoBase.addStudent(student);
            returnPack.result = true;
            returnPack.node = this.farther[1];
            returnPack.printInfo = `学生${student.name}的成绩被添加`;
        }else{
            console.log('here3');
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }
        console.log('here4');
        return returnPack;
    }

}


module.exports.menuNode1 = menuNode1;