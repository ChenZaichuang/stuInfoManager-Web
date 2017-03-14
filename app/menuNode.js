class menuNode{
    constructor(farther = [] , children = [] , printInfo = {}) {
        this.farther = farther;
        this.children = children;
        this.printInfo = printInfo;
    }
    programOfMenuNode(){
        alert('have not revised yet');
    }
}
module.exports.menuNode = menuNode;