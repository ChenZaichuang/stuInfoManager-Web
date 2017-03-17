const menuManager = require("./menuManager.js").menuManager;
const menuNodeHead = require("./menuNodeHead.js").menuNodeHead;
const menuNodeHead1 = require("./menuNodeHead1.js").menuNodeHead1;
const stuInfo = require("./stuInfo.js").stuInfo;
const menuNode1 = require("./menuNode1.js").menuNode1;
const menuNode2 = require("./menuNode2.js").menuNode2;
const Student = require('./student.js').Student;

// 张三,1234,汉,1,math:60,chinese:70,English:80,programming:90
// 李四,2345,汉,1,math:51,chinese:79,English:60,programming:100
// 王五,3456,汉,1,math:0,chinese:0,English:0,programming:1
// 王五,1,汉,1,math:0,chinese:0,English:0,programming:0

function mainFunc(){
    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const nodeHead1 = new menuNodeHead1();
    const node1 = new menuNode1();
    const node2 = new menuNode2();
    const stuInfoBase = new stuInfo();

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);
    menuManagerObj.setFarther(nodeHead1 , node1);
    menuManagerObj.setFarther(nodeHead1 , node2);

    // console.log(node1);
    // console.log(stuInfoBase);

    menuManagerObj.runMenuNode(nodeHead , stuInfoBase);
}

mainFunc();


