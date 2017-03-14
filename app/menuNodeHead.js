const menuNode = require("./menuNode.js").menuNode;

class menuNodeHead extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '1. 添加学生\n2. 生成成绩单\n请输入你的选择（1～2）：\n',
            inputError : '\n输入错误，请重新输入：\n'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var regularExpressionForCheck = /^[1-2]$/g;
        var regularExpressionForExtract = /(^\d$)/g;
        var returnPack = {};
        if(regularExpressionForCheck.test(inputString) == true) {
            var result = inputString.match(regularExpressionForExtract)[0];
            returnPack.result = true;
            returnPack.node = this.children[Number(result)-1];
            returnPack.printInfo = '';
        }else{
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }

        return returnPack;
    }
}


module.exports.menuNodeHead = menuNodeHead;
