const menuNode = require("../app/menuNode.js").menuNode;
const stuInfo = require("../app/stuInfo.js").stuInfo;
const menuManager = require("../app/menuManager.js").menuManager;
const menuNodeHead = require("../app/menuNodeHead.js").menuNodeHead;
const menuNode1 = require("../app/menuNode1.js").menuNode1;
const menuNode2 = require("../app/menuNode2.js").menuNode2;

describe("menuManager setFarther test", () => {
    const menuManagerObj = new menuManager();
    const nodeHead = new menuNodeHead();
    const node1 = new menuNode1();
    const node2 = new menuNode2();

    menuManagerObj.setFarther(nodeHead , node1);
    menuManagerObj.setFarther(nodeHead , node2);

    it('should add the students to the stuInfoBase', () => {
        expect(nodeHead.children).toEqual([node1,node2]);
        expect(node1.children).toEqual([]);
        expect(node2.children).toEqual([]);
        expect(node1.farther).toEqual(nodeHead);
        expect(node2.farther).toEqual(nodeHead);
    });
});
