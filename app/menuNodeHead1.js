const menuNode = require("./menuNode.js").menuNode;

class menuNodeHead1 extends menuNode{
    constructor(){
        super([] , [] , {
            mainInterfaceMessage : '<p>1. 添加学生<br>2. 生成成绩单<br>3. 退出\n请输入你的选择（1～3）：<br></p>',
            inputError : '<p>输入错误，请重新输入：<br></p>'
        });
    }
    programOfMenuNode(stuInfoBase , inputString){
        var regularExpressionForCheck = /^[1-3]$/g;
        var regularExpressionForExtract = /(^\d$)/g;
        var returnPack = {};
        if(regularExpressionForCheck.test(inputString) == true) {
            var result = inputString.match(regularExpressionForExtract)[0];
            returnPack.result = true;
            returnPack.node = (result === '3') ? null : this.children[Number(result)-1];
            returnPack.printInfo = '';
        }else{
            alert(this.printInfo.inputError);
            returnPack.result = false;
            returnPack.node = null;
            returnPack.printInfo = this.printInfo.inputError;
        }
        return returnPack;
    }
}


module.exports.menuNodeHead1 = menuNodeHead1;
