const menuManager = require("../app/menuManager.js").menuManager;
const menuNodeHead = require("../app/menuNodeHead.js").menuNodeHead;
const stuInfo = require("../app/stuInfo.js").stuInfo;
const menuNode1 = require("../app/menuNode1.js").menuNode1;
const menuNode2 = require("../app/menuNode2.js").menuNode2;

describe("menuNode1 programOfMenuNode test", () => {

    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const node1 = new menuNode1();
    const node2 = new menuNode2();
    const stuInfoBase = new stuInfo();
    const inputString = '张三,1234,汉,1,math:60,chinese:70,English:80,programming:90';

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);

    const actualResult = node1.programOfMenuNode(stuInfoBase , inputString);
    const expectResult = {
        result : true,
        node : nodeHead
    };

    it('should indicate the analysis result of the input string is true and return the nodeHead', () => {
        expect(actualResult).toEqual(expectResult);
    });
});

describe("menuNode1 programOfMenuNode test", () => {

    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const node1 = new menuNode1();
    const node2 = new menuNode2();
    const stuInfoBase = new stuInfo();
    const inputString = '张A三,1234,汉,1,math:60,chinese:70,English:80,programming:90';

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);

    const actualResult = node1.programOfMenuNode(stuInfoBase , inputString);
    const expectResult = {
        result : false,
        node : null
    };

    it('should indicate the analysis result of the input string is true and return the null node', () => {
        expect(actualResult).toEqual(expectResult);
    });
});