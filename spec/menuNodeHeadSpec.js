const menuManager = require("../app/menuManager.js").menuManager;
const menuNodeHead = require("../app/menuNodeHead.js").menuNodeHead;
const menuNode1 = require("../app/menuNode1.js").menuNode1;
const menuNode2 = require("../app/menuNode2.js").menuNode2;
const menuNode = require("../app/menuNode.js").menuNode;
const stuInfo = require("../app/stuInfo.js").stuInfo;

describe("menuNodeHeadSpec programOfMenuNode test", () => {

    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const node1 = new menuNode1();
    const node2 = new menuNode2();
    const stuInfoBase = new stuInfo();
    const inputString = '1';

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);

    const actualResult = nodeHead.programOfMenuNode(stuInfoBase , inputString);
    const expectResult = {
        result : true,
        node : node1
    };

    it('should indicate the analysis result of the input string is true and return the correct node', () => {
        expect(actualResult).toEqual(expectResult);
    });
});

describe("menuNodeHeadSpec programOfMenuNode test", () => {

    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const node1 = new menuNode1();
    const node2 = new menuNode2();
    const stuInfoBase = new stuInfo();
    const inputString = '1.2';

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);

    const actualResult = nodeHead.programOfMenuNode(stuInfoBase , inputString);
    const expectResult = {
        result : false,
        node : null
    };

    it('should indicate the analysis result of the input string is false and return the null node', () => {
        expect(actualResult).toEqual(expectResult);
    });
});