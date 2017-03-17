const menuManager = require("./app/menuManager.js").menuManager;
const menuNodeHead = require("./app/menuNodeHead.js").menuNodeHead;
const menuNodeHead1 = require("./app/menuNodeHead1.js").menuNodeHead1;
const stuInfo = require("./app/stuInfo.js").stuInfo;
const menuNode1 = require("./app/menuNode1.js").menuNode1;
const menuNode2 = require("./app/menuNode2.js").menuNode2;
const menuNode3 = require("./app/menuNode3.js").menuNode3;
const menuNode4 = require("./app/menuNode4.js").menuNode4;
const Student = require('./app/student.js').Student;

const menuManagerObj = new menuManager();
var nodeHead = new menuNodeHead();
var nodeHead1 = new menuNodeHead1();
var node1 = new menuNode1();
var node2 = new menuNode2();
var node3 = new menuNode3();
var node4 = new menuNode4();
var stuInfoBase = new stuInfo();

menuManagerObj.setFarther(nodeHead , node1);
menuManagerObj.setFarther(nodeHead , node2);
menuManagerObj.setFarther(nodeHead1 , node1);
menuManagerObj.setFarther(nodeHead1 , node2);

module.exports.nodeHead = nodeHead;
module.exports.nodeHead1 = nodeHead1;
module.exports.node1 = node1;
module.exports.node2 = node2;
module.exports.node3 = node3;
module.exports.node4 = node4;
module.exports.stuInfoBase = stuInfoBase;


var express = require('express');
var routes=require("./routes");
var bodyParser=require("body-parser");
var app=express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine",'ejs');
app.use(express.static(__dirname));

app.get('/',routes.index);
app.get('/index1',routes.index1);
app.get('/addStudent',routes.addStudent);
app.get('/checkStudent',routes.checkStudent);
app.get('/printStudentScore',routes.printStudentScore);
app.get('/checkNumber',routes.checkNumber);
app.get('/delStuInfo',routes.delStuInfo);
app.get('/delStudent',routes.delStudent);
app.get('/findStudent',routes.findStudent);
app.get('/newStuInfo',routes.newStuInfo);
app.get('/reviseStudent',routes.reviseStudent);
app.get('/quit',routes.quit);

app.listen('8080');


