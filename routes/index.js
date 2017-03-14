const menuManager = require("../app/menuManager.js").menuManager;
const menuNodeHead = require("../app/menuNodeHead.js").menuNodeHead;
const menuNodeHead1 = require("../app/menuNodeHead1.js").menuNodeHead1;
const stuInfo = require("../app/stuInfo.js").stuInfo;
const menuNode1 = require("../app/menuNode1.js").menuNode1;
const menuNode2 = require("../app/menuNode2.js").menuNode2;
const Student = require('../app/student.js').Student;

var nodeHead = require('../app.js').nodeHead;
var nodeHead1 = require('../app.js').nodeHead1;
var node1 = require('../app.js').node1;
var node2 = require('../app.js').node2;
var stuInfoBase = require('../app.js').stuInfoBase;

exports.index=function(req,res){
    res.render("index",{title:"主页"});
}
exports.index1=function(req,res) {
    res.render("index1", {title:"主页1",printinfo:''});
}
exports.addStudent=function(req,res){
    res.render("addStudent",{title:"添加学生信息",printinfo:''});
}
exports.checkStudent=function(req,res){  //这里调用结点
    var newNode = node1;
    var result;
    var inputString = req.query.stuinfo;
    console.log(inputString);
    console.log(newNode);
    console.log(stuInfoBase);
    if((result = newNode.programOfMenuNode(stuInfoBase , inputString)).result == true){
        newNode = result.node;
        if (newNode === null) {
            console.log('checkStudent null');
            res.render("addStudent", {title:"添加学生信息",printinfo:''});
            //关闭页面
            // input.close();
            // process.exit(0);
        }else{
            console.log('checkStudent not null');
            res.render("index1", {title:"主页1",printinfo:result.printInfo});
        }
        // input.setPrompt(newNode.printInfo.mainInterfaceMessage);
        // input.prompt();
    }else{
        console.log('checkStudent false');
        res.render("addStudent", {title:"添加学生信息",printinfo:result.printInfo});
    }
}
exports.printStudentScore=function(req,res){
    res.render("printStudentScore",{title:"打印学生成绩单",printinfo:''});
}
exports.checkNumber=function(req,res){
    var newNode = node2;
    var result;
    var inputString = req.query.stunumber;
    if((result = newNode.programOfMenuNode(stuInfoBase , inputString)).result == true){
        newNode = result.node;
        if (newNode === null) {
            console.log('checkNumber null');
            res.render("printStudentScore", {title:"打印学生成绩单",printinfo:''});
            //关闭页面
            // input.close();
            // process.exit(0);
        }else{
            res.render("index1", {title:"主页1",printinfo:result.printInfo});
        }
        // input.setPrompt(newNode.printInfo.mainInterfaceMessage);
        // input.prompt();
    }else{
        console.log('checkNumber false');
        res.render("index1", {title:"主页1",printinfo:result.printInfo});
    }
}
exports.quit=function(req,res){
    res.render("quit",{title:"打印学生成绩单"});
}